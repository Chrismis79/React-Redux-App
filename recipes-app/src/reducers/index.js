import {FETCH_START, FETCH_SUCCESS, FETCH_FAILED, SET_SEARCH} from '../actions';

const initialState = {
    recipes:  [],
    isFetching: false,
    error: null,
    item: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH: {
            return {
                ...state,
                item: action.payload,
                recipes: [],
                isFetching: true,
                error: null,
            }

        }

        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                recipes: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;            
    }
};

export default reducer;