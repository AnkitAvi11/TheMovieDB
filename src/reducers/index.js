import { combineReducers } from "redux";
import { trendingMoviesReducer, trendingSeriesReducer } from './movies'

export default combineReducers ({
    trendingMovies : trendingMoviesReducer,
    trendingSeries : trendingSeriesReducer
});