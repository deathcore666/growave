import React from 'react';

import Select from '../components/select/index';
import Result from '../components/result/index';
import TopResult from '../components/top-result/index';
import { CountriesList } from '../hooks/countriesList';
import { ResutsList } from '../hooks/resultsList';
import { Country } from '../hooks/country';
import { IsLoading } from '../hooks/isLoading';
import { findTopRecoveredCasesEntry } from '../helpers/findTopEntry';

function CovidContainer() {
    const countriesList = CountriesList();
    const resultsList = ResutsList();
    const { setCountry } = Country();
    const isLoading = IsLoading();

    return (
        <>
            <Select setCountry={(country) => setCountry(country)}
                    countries={countriesList}/>
            { resultsList.length > 0 ? <Result results={resultsList}/> : <>Results came back empty</> }
            { resultsList.length > 0 ? <TopResult { ...findTopRecoveredCasesEntry(resultsList) }/> : <>Results came back empty</> }
        </>
    );
}

export default CovidContainer;