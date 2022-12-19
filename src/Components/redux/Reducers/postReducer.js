import axios from 'axios';
import {  FETCH_POST_SUCCESS ,FETCH_POST_ERROR,FETCH_POST_REQUEST} from '../actions/actionTypes';


const intialState = {
    post: [],
    product:[],
    loading:false,
    error:''
  };

export const fetchPostSuccess = (post) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
};

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_ERROR,
    payload:error
  };
};


export const fetchPosts=()=>{
    return function (dispatch){
        dispatch(fetchPostRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
        .then(response => {
          console.log("response.data");
            const post = response.data;
            dispatch(fetchPostSuccess(post))
          })
          .catch(error => {
         
            dispatch(fetchPostFailure(error.message))
          })
    }
}

export function postReducer(state = intialState, action) {
    console.log('actiosn types',action.type);
    switch (action.type) {
        case 'FETCH_POST_REQUEST':
            return  {
                ...state,
                loading:true 
            } ;

        case 'FETCH_POST_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
              }
        
            case 'FETCH_POST_ERROR':
                return {
                    loading: false,
                    post: [],
                    error: action.payload
                  }

        default:
            return state;
    }
}



