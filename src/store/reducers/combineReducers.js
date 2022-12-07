import { combineReducers } from 'redux';
import { getUserReducer } from './getUser';
import { userReducer } from './setUser';

export default combineReducers({
    userSignup: userReducer,
    user: getUserReducer
}) 