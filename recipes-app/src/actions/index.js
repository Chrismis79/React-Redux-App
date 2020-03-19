import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_SEARCH = 'FETCH_SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';


const API_ID = process.env.REACT_APP_EDAMAM_API_ID; 
const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;


export const getRecipes = () => dispatch => {
    dispatch({type: FETCH_START});
    axios.get(`https://api.edamam.com/search?q=steak&app_id=${API_ID}&app_key=${API_KEY}`)
    .then(res => {
        dispatch({type: FETCH_SUCCESS, payload: res.data.hits})
    })
    .catch(err => dispatch({type: FETCH_FAILED, payload: err.response}))
}

export const searchRecipes = (query) => dispatch => {
    dispatch({type: FETCH_SEARCH});
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    .then(res => {
        dispatch({type: SEARCH_SUCCESS, payload: res.data.hits})
    })
    .catch(err => dispatch({type: SEARCH_FAILED, payload: err.response}))
}


