import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import Immutable from 'seamless-immutable';

import reducers from '../reducers/index';
import { StateInterface } from '../interfaces/state.interface';
import SeamlessImmutable from 'seamless-immutable';

const configureStore = (initalState?: { covid: SeamlessImmutable.Immutable<StateInterface> }) => {
    return createStore(
        reducers,
        initalState,
        applyMiddleware(thunkMiddleware, thunk)
    );
}

const store = configureStore({
    covid: Immutable({
        results: [],
        country: (localStorage.getItem('country') as string) || '',
        isLoading: false,
        isEmpty: false,
        countries: []
    })}
);

export default store;