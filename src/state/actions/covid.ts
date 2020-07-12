import axios from 'axios';

import * as actionTypes from '../constants';
import { CountryInterface } from '../interfaces/country.interface';

export const fetchCountries = () => {
    return async (dispatch: any) => {
        dispatch(setLoading(true));
        try {
            const res = await axios.get(`https://api.covid19api.com/countries`);
            dispatch(setCountries(res.data));
        } catch (err) {
            // do smth
        }

        dispatch(setLoading(false));
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
        try {
            const res = await axios.get(`https://api.covid19api.com/total/dayone/country/${country}`); //sometimes 429 is returned
            dispatch(setResults(res.data));
            const isEmpty = res.data.length === 0;
            dispatch(setEmpty(isEmpty));       
        } catch(err) {
            //do smth
        }
        dispatch(setLoading(false));                                                               
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

export const setEmpty = (isEmpty: boolean) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actionTypes.SET_EMPTY,
            payload: isEmpty
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

