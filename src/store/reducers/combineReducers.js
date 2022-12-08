import { combineReducers } from 'redux';
import { getUserReducer } from './getUser';
import { eleReducer } from './setElement';

export default combineReducers({
    element: eleReducer,
    user: getUserReducer
}) 