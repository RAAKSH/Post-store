import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { productReducer } from './productReducer';

export default combineReducers({
    postRed:postReducer,
    productRed:productReducer
    
});