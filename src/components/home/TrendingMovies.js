import React, {Component} from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { getTrendingMovies } from "../../actions/trendingmovies";

class TrendingMovies extends Component {

    componentDidMount = () => {
        this.props.getTrendingMovies();
    }

    render () {
        if(this.props.movies.loading) {
            return <Layout>
                <h3 className="title">Trending Movies</h3>
                <Loader/>
            </Layout>
        }

        let movieCards = null;
        if(this.props.movies.movies !== null) {
            console.log(this.props.movies.movies[1])
            let movies = []
            for(let i=0;i<8;i++){
                movies.push(this.props.movies.movies[i])
            }
            movieCards = movies.map((movie, index) => {
                return (
                    <div className="four wide column" key={index}>
                        <div className="ui card">
                        <div className="image">
                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.backdrop_path}`} alt={movie.id} />
                        </div>
                        <div className="content">
                            <p className="header">{movie.title}</p>
                            <div className="meta">
                            <span className="date">{movie.release_date}</span>
                            </div>
                            <div className="description">
                            <small><b>Populatiry</b> {movie.vote_average}</small>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <Layout>
                <h3 className="title">Trending Movies</h3>
                <div className="ui grid">
                {movieCards}
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies : state.trendingMovies
    };
}

export default connect(mapStateToProps,{
    getTrendingMovies
})(TrendingMovies);