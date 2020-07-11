import axios from 'axios';

import * as actionTypes from '../constants';
import { CountryInterface } from '../interfaces/country.interface';

export const fetchCountries = () => {
    return async (dispatch: any) => { // todo catch and handle request error
        dispatch(setLoading(true));
        const res = await axios.get(`https://api.covid19api.com/countries`);
        dispatch(setLoading(true));
        dispatch(setCountries(res.data));
    };
}

export const setCountries = (countries: CountryInterface) => {
    return (dispatch: (arg0: { type: string; payload: any }) => void) => {
        dispatch({
            type: actionTypes.SET_COUNTRIES,
            payload: countries
        });
    };
}

export const fetchResults = (country: string) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true));
        const res = await axios.get(`https://api.covid19api.com/total/dayone/country/${country}`); //implement err handlin todo
        dispatch(setLoading(false));                                                               //sometimes 429 is returned
        dispatch(setResults(res.data));                                                            //do not forget!!!
    };
}

export const setResults = (results: any[]) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actionTypes.SET_RESULTS,
            payload: results
        });
    };
}

export const setLoading = (isLoading: boolean) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actionTypes.SET_LOADING,
            payload: isLoading
        });
    };
}

export const setCountry = (country: string) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actionTypes.SET_COUNTRY,
            payload: country
        });
    };
}

