
const getMoviesStart = () => {
    return {
        type : 'GET_MOVIES_START'
    }
}

const getMoviesError = (err) => {
    return {
        type : 'MOVIE_ERROR',
        payload : err
    }
}

const moviesSuccess = (movies) => {
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
            dispatch(moviesSuccess(data.results));
        }).catch(err => {
            getMoviesError(err);
        });
    }
}

const getMovieStart = () => {
    return {
        type : 'GET_MOVIE_START'
    }
}

const getMovieSucces = (movie) => {
    return {
        type : 'GET_MOVIE_SUCCESS',
        payload : movie
    }
}

const getMovieError = (err) => {
    return {
        type : 'GET_MOVIE_ERROR',
        payload : err
    }
}

const removeLoading = () => {
    return {
        type : 'REMOVE_GET_MOVIE_LOADING'
    }
}

export const getIndividualMovie = (movieid) => {
    return async dispatch => {
        await dispatch(getMovieStart());
        fetch("https://api.themoviedb.org/3/movie/"+movieid+"?api_key=d99cf91619cb57d8e03e43735adae9bd&language=en-US&external_source=imdb_id")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch(getMovieSucces(data))
            dispatch(removeLoading());
        }).catch(err => {
            dispatch(getMovieError(err))
        })
    }
}