import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import Immutable from 'seamless-immutable';

import reducers from '../reducers/index';
import { StateInterface } from '../interfaces/state.interface';
import SeamlessImmutable from 'seamless-immutable';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ImmutablePersistenceTransform from './transform'

const persistConfig = {
    key: 'root',
    storage,
    transforms: [ImmutablePersistenceTransform]
}
const configureStore = (initalState?: { covid: SeamlessImmutable.Immutable<StateInterface> }) => {
    const persistedReducer = persistReducer(persistConfig, reducers);
    let store = createStore(persistedReducer, initalState, applyMiddleware(thunkMiddleware, thunk));
    let persistor = persistStore(store);
    return { store, persistor }


    // return createStore(
    //     reducers,
    //     initalState,
    //     applyMiddleware(thunkMiddleware, thunk)
    // );
}


const store = configureStore();

export default store;