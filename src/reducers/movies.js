
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
        case 'SUCCESS_SERIES' : 
        return {
            ...state,
            loading : false,
            error : null,
            series : action.payload
        }

        case 'trending_error' : 
        return {
            ...state,
            error : action.payload
        }

        case 'trending_start' : 
        return {
            ...state,
            loading : true
        }

        case 'remove_trending_error' : 
        return {
            ...state,
            loading : false,
            error : null,
            series:  null
        }

        default : return state;
    }
}


const initState = {
    loading : false,
    error : null,
    movies : []
}

export const moviePageReducer = (state=initState, action) => {
    switch(action.type) {

        case 'GET_MOVIES_START' : 
        return {
            ...state,
            loading : true
        }

        case 'MOVIE_SUCCESS' : 
        return  {
            ...state,
            loading : false,
            error : null,
            movies : action.payload
        }

        case 'MOVIE_ERROR' : 
        return {
            ...state,
            error : action.payload
        }

        default : return initState;

    }
}


const initial_movie_state = {
    loading : false, 
    error : false,
    movie : ""
}

export const getMovie = (state = initial_movie_state, action) => {
    switch(action.type) {

        case 'GET_MOVIE_START' : 
        return  {
            ...state,
            loading : true
        }

        case 'GET_MOVIE_SUCCESS' : 
        return {
            ...state,
            loading : false,
            error : false,
            movie : action.payload
        }

        case 'GET_MOVIE_ERROR' : 
        return {
            ...state,
            error : action.payload
        }

        case 'REMOVE_GET_MOVIE_LOADING' : 
        return {
            ...state,
            loading : false
        }


        default : 
        return state
    }
}