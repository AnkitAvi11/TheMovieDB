
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
            movies: action.payload
        }

        default : return state
    }
}

//  reducer for the trending TV series
const initialSeriesState = {
    loading : false,
    error: null,
    series : null
}

export const trendingSeriesReducer = (state = initialSeriesState, action) => {
    switch(action.type) {

        default : return state;
    }
}
