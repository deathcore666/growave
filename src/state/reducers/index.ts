import { combineReducers } from 'redux';
import { covid } from './covid';

const reducers = combineReducers({
    covid,
});

export default reducers;