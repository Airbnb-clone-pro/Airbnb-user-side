import { combineReducers } from 'redux';
import { getCatReducer } from './getCat';
import { getUserReducer } from './getUser';
import { eleReducer } from './setElement';

export default combineReducers({
    element: eleReducer,
    user: getUserReducer,
    cat: getCatReducer
}) 