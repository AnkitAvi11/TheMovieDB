import React, {Component} from 'react';
import TrendingMovies from '../components/home/TrendingMovies'
import TrendingSeries from '../components/home/TrendingSeries';

class Home extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="ui container">
                <TrendingMovies />
                <TrendingSeries />
            </div>
        )
    }

}

export default Home;