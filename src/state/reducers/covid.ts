import SeamlessImmutable from 'seamless-immutable';
import Immutable from 'seamless-immutable';

import * as actionTypes from '../constants/index';
import { StateInterface } from '../interfaces/state.interface';

const initialState: SeamlessImmutable.Immutable<StateInterface> = Immutable({
    results: [],
    country: '',
    isLoading: false,
    isEmpty: false,
    countries: []
});

export const covid = (
    state: SeamlessImmutable.Immutable<StateInterface> = initialState, 
    action: any
): SeamlessImmutable.Immutable<StateInterface> => {
    switch(action.type) {
        case actionTypes.SET_COUNTRIES:
            return state.set('countries', action.payload);

        case actionTypes.SET_RESULTS:
            return state.set('results', action.payload);

        case actionTypes.SET_COUNTRY:
            return state.set('country', action.payload);

        case actionTypes.SET_LOADING:
            return state.set('isLoading', action.payload);

        case actionTypes.SET_EMPTY:
            return state.set('isEmpty', action.payload);

        default: return state;
    }
};