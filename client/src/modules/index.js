import { combineReducers } from 'redux';
import auth from './auth'

const rootReducer = combineReducer({
    auth,
});

export default rootReducer;