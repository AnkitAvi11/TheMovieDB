
const getMoviesStart = () => {
    return {
        type : 'GET_MOVIES_START'
    }
}

const getMovieError = (err) => {
    return {
        type : 'MOVIE_ERROR',
        payload : err
    }
}

const movieSuccess = (movies) => {
    return {
        type : 'MOVIE_SUCCESS',
        payload : movies
    }
}

export const getMoviesList = (keyword='avengers') => {
    return async dispatch => {
        await dispatch(getMoviesStart())
        fetch("https://api.themoviedb.org/3/search/movie?api_key=d99cf91619cb57d8e03e43735adae9bd&language=en-US&page=1&include_adult=true&query="+keyword)
        .then(res => res.json())
        .then(data => {
            dispatch(movieSuccess(data.results));
        }).catch(err => {
            getMovieError(err);
        });
    }
}
