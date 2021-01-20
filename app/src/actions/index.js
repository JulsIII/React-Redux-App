import axios from 'axios';

export const FETCH_JOKE_START = "FETCH_JOKE_START";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";

export const getJoke = () => dispatch => {
    dispatch({ type:FETCH_JOKE_START});
    axios 
        .get('GET https://icanhazdadjoke.com/')
        
        .then((res)=>{
            console.log('the get*****', res);
            dispatch({ type:FETCH_JOKE_SUCCESS, payload: res.data.joke});
        })
        .catch(err => {
            dispatch({ type:FETCH_JOKE_FAIL, payload: err.response.code});
        });
        
}

