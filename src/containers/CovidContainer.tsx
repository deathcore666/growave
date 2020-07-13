import React from 'react';

import { findTopRecoveredCasesEntry } from '../helpers/findTopEntry';
import Select from '../components/select/index';
import Result from '../components/result/index';
import TopResult from '../components/top-result/index';
import { CountriesList } from '../hooks/countriesList';
import { ResutsList } from '../hooks/resultsList';
import { Country } from '../hooks/country';
import { IsLoading } from '../hooks/isLoading';
import { loading, empty, errRes } from '../constants/textValues';
import { IsError } from '../hooks/isError';

import './covidContainer.scss';

function CovidContainer() {
    const countriesList = CountriesList();
    const resultsList = ResutsList();
    const isLoading = IsLoading();
    const isError = IsError();
    const { setCountry } = Country();

    const renderLoading = () => {
        if (isLoading) {
            return (<div className='loading'>{loading}</div>);
        }
    }
    const renderResult = () => {
        if (resultsList.length > 0 && !isError) {
            return (
                <div className={ isLoading ? 'results-container opaque' : 'results-container'}>
                    <div className='results'><Result results={resultsList}/></div>
                    <TopResult { ...findTopRecoveredCasesEntry(resultsList) }/>
                </div>
            );
        }
    }
    const renderErrorMessage = () => {
        if (!isLoading && (resultsList.length === 0 || isError)) {
            return (
                <div className='empty-response'>
                    {isError ? errRes :empty} 
                </div> 
            );
        }
    }
 
    return (
        <div className='main-container'>
            <Select setCountry={(country) => setCountry(country)}
                    countries={countriesList}/>
            {renderLoading()}
            {renderResult()}
            {renderErrorMessage()}
        </div>
    );
}

export default CovidContainer;