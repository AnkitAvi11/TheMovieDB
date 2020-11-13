
const startRequest = () => {
    return {
        type : 'TRENDING_START'
    }
}

const errorRequest = (err) => {
    return {
        type : 'ERROR_REQUEST',
        payload : err
    } 
}

const successRequest = (movies) => { 
    return {
        type : 'SUCCESS_REQUEST',
        payload : movies
    }
}

const removeLoading = () => {
    return {
        type : 'REMOVE_LOADING'
    }
}


export const getTrendingMovies = () => {
    return async dispatch => {
        await dispatch(startRequest());
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=d99cf91619cb57d8e03e43735adae9bd')
        .then( res => res.json())
        .then(data => {
            dispatch(successRequest(data.results))
            dispatch(removeLoading())
        })
        .catch(err => dispatch(errorRequest(err)))
    }
}

const succsesSeries = (series) => {
    return {
        type : 'SUCCESS_SERIES',
        payload : series
    }
} 

const trendingStart = () => {
    return {
        type : 'trending_start'
    }
}

const trendingError = (err) => {
    return {
        type : 'trending_error',
        payload : err
    }
}

const removeTrendingError = (err) => {
    return {
        type : 'remove_trending_error',
        payload : err
    }
}


export const getTrendingSeries = () => {
    return async dispatch => {
        await dispatch(trendingStart());
        fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=d99cf91619cb57d8e03e43735adae9bd')
        .then( res => res.json())
        .then(data => {
            dispatch(succsesSeries(data.results))
        })
        .catch(err => {
            dispatch(trendingError(err))
            dispatch(removeTrendingError())
        })
    }
}
