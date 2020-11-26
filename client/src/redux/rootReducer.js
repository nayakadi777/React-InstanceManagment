import { combineReducers } from 'redux';
import {instanceReducer} from './Instance/InstanceReducer.js';
import {userReducer} from './user/userReducer.js';

export const rootReducer = combineReducers({
    isLoggedIn : userReducer,
    instanceData :instanceReducer, 
});

