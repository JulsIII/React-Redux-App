import axios from 'axios';

export const FETCH_JOKE_START = "FETCH_QUOTE_START";
export const FETCH_JOKE_FAIL = "FETCH_QUOTE_FAIL";
export const FETCH_JOKE_SUCCESS = "FETCH_QUOTE_SUCCESS";

export const getJoke = () => dispatch => {
    dispatch({ type:FETCH_JOKE_START});
    axios 
        .get('GET https://icanhazdadjoke.com/')
        .then((res)=>{
            dispatch({ type:FETCH_JOKE_SUCCESS, payload: res.data.joke});
        })
        .catch(err => {
            dispatch({ type:FETCH_JOKE_FAIL, payload: err.response.code});
        });
}

