import axios from 'axios';


export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';



const API_ID = process.env.REACT_APP_EDAMAM_API_ID; 
const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;



export const getRecipes = (input) => dispatch => {
    dispatch({type: FETCH_START});
    axios.get(`https://api.edamam.com/search?q=${input}&app_id=${API_ID}&app_key=${API_KEY}`)
    .then(res => {
        console.log(res.data.hits);
        dispatch({type: FETCH_SUCCESS, payload: res.data.hits})
    })
    .catch(err => dispatch({type: FETCH_FAILED, payload: err.response}))
}


