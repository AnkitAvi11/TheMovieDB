import { combineReducers } from "redux";
import { trendingMoviesReducer, trendingSeriesReducer, moviePageReducer } from './movies'

export default combineReducers ({
    trendingMovies : trendingMoviesReducer,
    trendingSeries : trendingSeriesReducer,
    searched_movies : moviePageReducer
});