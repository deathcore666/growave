import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import SeamlessImmutable from 'seamless-immutable';
import storage from 'redux-persist/lib/storage'

import reducers from '../reducers/index';
import { StateInterface } from '../interfaces/state.interface';
import ImmutablePersistenceTransform from '../../helpers/immutablePersistenceTransform';

const persistConfig = {
    key: 'root',
    storage,
    transforms: [ImmutablePersistenceTransform]
}
const configureStore = (initalState?: { covid: SeamlessImmutable.Immutable<StateInterface> }) => {
    const persistedReducer = persistReducer(persistConfig, reducers);
    const store = createStore(persistedReducer, initalState, applyMiddleware(thunkMiddleware, thunk));
    let persistor = persistStore(store);
    return { store, persistor }
}

const store = configureStore();

export default store;