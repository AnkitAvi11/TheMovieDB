
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
            setTimeout(()=>{
                dispatch(removeLoading())
            }, 500)
        })
        .catch(err => dispatch(errorRequest(err)))
    }
}