import axios from 'axios';

import {FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_ERROR,FETCH_PRODUCT_REQUEST} from '../actions/actionTypes';

const intialState = {
    product:[],
    loading:false,
    error:''
  };

export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_ERROR,
    payload:error
  };
};


export const fetchProduct=()=>{
    return function (dispatch){
        dispatch(fetchProductRequest)
        axios.get('https://fakestoreapi.com/products?_limit=20')
        .then(response => {
            const product = response.data;
            dispatch(fetchProductSuccess(product))
          })
          .catch(error => {
         
            dispatch(fetchProductFailure(error.message))
          })
    }
}

export function productReducer(state = intialState, action) {
    console.log('actiosn types',action.type);
    switch (action.type) {
        case 'FETCH_PRODUCT_REQUEST':
            return  {
                ...state,
                loading:true 
            } ;

        case 'FETCH_PRODUCT_SUCCESS':
            return {
                loading: false,
                product: action.payload,
                error: ''
              }
        
            case 'FETCH_PRODUCT_ERROR':
                return {
                    loading: false,
                    product: [],
                    error: action.payload
                  }

        default:
            return state;
    }
}



