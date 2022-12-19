import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from '../Reducers/combineReducer';


export default function configureStore(initialState) {

    const enhancer = applyMiddleware(thunk)

    return createStore(
       combineReducer,
        initialState,
        enhancer
    );
}


