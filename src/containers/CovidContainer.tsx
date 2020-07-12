import React from 'react';

import Select from '../components/select/index';
import Result from '../components/result/index';
import TopResult from '../components/top-result/index';
import { CountriesList } from '../hooks/countriesList';
import { ResutsList } from '../hooks/resultsList';
import { Country } from '../hooks/country';
import { findTopRecoveredCasesEntry } from '../helpers/findTopEntry';

import './covidContainer.scss';

function CovidContainer() {
    const countriesList = CountriesList();
    const resultsList = ResutsList();
    const { setCountry } = Country();

    return (
        <div className='main-container'>
            <Select setCountry={(country) => setCountry(country)}
                    countries={countriesList}/>
            <div className='results-container'>
                <div className='results'>{ resultsList.length > 0 ? <Result results={resultsList}/> : <></> }</div>
                { resultsList.length > 0 ? <TopResult { ...findTopRecoveredCasesEntry(resultsList) }/> : <></> }
            </div>
        </div>
    );
}

export default CovidContainer;