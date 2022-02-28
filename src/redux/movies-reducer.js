import API from '../api/api'

const SET_LIST_MUVIES = 'SET_LISTMUVIES';
const SET_MUVIE = 'SET_MUVIE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    movies: [],
    currentPage:1,
    totalCount:100
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_MUVIES: {
            return {
                ...state,
                movies: [ ...action.movies],
                totalCount:action.totalCount
            }
        }
        case SET_MUVIE: {
            return {
                ...state,
                movie: action.movie
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default:
            return state;
    }
};

export const setMuvies = (movies) => ({ type: SET_LIST_MUVIES, movies });

export const setTotalCount = (totalCount) => ({ type: SET_LIST_MUVIES, totalCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const getMovies = (currentPage) => {
    return (dispatch) => {
        API.get('', {
            params: {
                s: 'abc',
                page: currentPage
            }
        })
            .then(response => {
                let movies = response.data.Search;
                let totalCount = response.data.totalResults
                dispatch(setMuvies(movies));
                dispatch(setTotalCount(totalCount))
            });
    };
};

export default moviesReducer;