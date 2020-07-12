import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ActionsCreators } from '../state/actions';

import Select from '../components/select/index';
import Result from '../components/result/index';
import TopResult from '../components/top-result/index';
import { StateInterface } from '../state/interfaces/state.interface';
import { ResultInterface } from '../state/interfaces/result.interface';
import { topResultProps } from '../components/top-result/topResult';

function CovidContainer() {
    const dispatch = useDispatch();
    const country = useSelector((state: { covid: StateInterface }) => {
        return state.covid.country;
    });
    const countriesList = useSelector((state: { covid: StateInterface }) => {
        return state.covid.countries;
    });
    const resultsList = useSelector((state: { covid: StateInterface }) => {
        return state.covid.results;
    });

    useEffect(() => {
        if(!country) {
            dispatch(ActionsCreators.setCountry('kyrgyzstan'));
        }
    }, [country, countriesList, dispatch]);

    useEffect(() => {
        dispatch(ActionsCreators.fetchCountries());
    }, [dispatch]);

    useEffect(() => {
        if (country) {
            dispatch(ActionsCreators.fetchResults(country));
        }
    }, [country, dispatch]);

    const findTopRecoveredCasesEntry = (resultsList: ResultInterface[]): topResultProps => {
        let cases: number = 0;
        let resultingEntry: ResultInterface = resultsList[0];
        resultsList.forEach((entry: ResultInterface, index: number, array: ResultInterface[]) => {
            if (index === 0) {
                return;
            }
            const currentCases = entry.Recovered - array[index -1].Recovered
            if (currentCases > cases) {
                cases = currentCases;
                resultingEntry = entry;
            }
        });

        return { cases, date: resultingEntry.Date };
    };

    return (
        <>
            <Select setCountry={(country) => dispatch(ActionsCreators.setCountry(country))}
                    countries={countriesList}/>
            <Result results={resultsList}/>
            { resultsList.length > 0 ? <TopResult { ...findTopRecoveredCasesEntry(resultsList) }/> : <></> }
        </>
    );
}

export default CovidContainer;