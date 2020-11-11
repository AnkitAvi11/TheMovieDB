import React, {Component} from 'react';
import TrendingMovies from '../components/home/TrendingMovies'

class Home extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="ui container">
                <TrendingMovies />
            </div>
        )
    }

}

export default Home;