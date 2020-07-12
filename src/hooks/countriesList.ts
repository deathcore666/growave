import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StateInterface } from '../state/interfaces/state.interface';
import { ActionsCreators } from '../state/actions';

export function CountriesList() {
    const dispatch = useDispatch();
    const countriesList = useSelector((state: { covid: StateInterface }) => {
        return state.covid.countries;
    });
    
    useEffect(() => {
        dispatch(ActionsCreators.fetchCountries());
    }, [dispatch]);

    return countriesList;
}