import { combineReducers } from "redux";
import { trendingMoviesReducer } from './movies'

export default combineReducers ({
    trendingMovies : trendingMoviesReducer
});