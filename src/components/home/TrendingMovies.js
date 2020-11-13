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
                <h2 className="title">Trending Movies</h2>
                <Loader/>
            </Layout>
        }

        let movieCards = null;
        if(this.props.movies.movies !== null) {
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
                        </div>
                        <div className="extra content">
                                <span className="left floated like">
                                <i className="like icon" style={{color:"red"}}></i>
                                {movie.vote_count}
                                </span>
                                <span className="right floated star">
                                <i className="star icon" style={{color:"orange"}}></i>
                                {movie.vote_average} / 10
                                </span>
                        </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <Layout>
                <h2 className="title">Trending Movies</h2>
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

