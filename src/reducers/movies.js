
//  for trending movies reducers
const initialState = {
    loading : false,
    error : null,
    movies : null
}

export const trendingMoviesReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'TRENDING_START' : 
        return {
            ...state,
            loading : true
        }

        case 'ERROR_REQUEST' : 
        return {
            ...state,
            loading: false,
            error : action.payload
        }

        case 'REMOVE_LOADING' : 
        return {
            ...state,
            loading: false
        }

        case 'SUCCESS_REQUEST' : 
        return {
            ...state,
            loading: false,
            error: null,
            movies: action.payload
        }

        default : return state
    }
}