import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMovies from '../components/movies/AllMovies';
import Movie from '../components/movies/Movie';


class Movies extends Component {
    render () {
        return (
            <Switch>
                
                <Route
                path="/movies"
                exact
                component={AllMovies}
                />

                <Route 
                path={`${this.props.match.path}/:movieid`}
                component={Movie}
                />

            </Switch>
        )
    }
}

export default Movies;