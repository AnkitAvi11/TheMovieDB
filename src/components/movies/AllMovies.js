import React, {Component} from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import { getMoviesList } from "../../actions/movies";
import { Link } from 'react-router-dom';

class AllMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword : ""
        }
    }

    componentDidMount() {
        this.props.getMoviesList();
    }

    onChange = (e) => {
        let keyword = e.target.value
        if(keyword === "" || keyword === " ") {
            this.props.getMoviesList("avengers");
        }else{
            this.props.getMoviesList(keyword);
        }
    }

    render () {
        let movies = null;
        if(!this.props.movies.loading) {
            movies = this.props.movies.movies.map(movie => {
                return  <div className="four wide column" key={movie.id}>
                <div className="ui card">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.id} />
                </div>
                <div className="content">
                    <p className="header">
                        <Link to={`${this.props.match.path}/${movie.id}`}>{movie.title}</Link>
                    </p>
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
            })
        }

        return (
            <Layout>
                <h2>Movies</h2>
                <div className="ui icon input" style={{width:"100%"}}>
                    <input type="text" placeholder="Search keyword ..." onChange={this.onChange} />
                    <i className="search link icon"></i>
                </div>
                {
                    this.props.movies.loading ? 
                    <Loader/>
                    :
                    <div className="ui grid" style={{marginTop:"20px"}}>
                        {movies}
                    </div>
                }
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        'movies' : state.searched_movies
    }
}

export default connect(mapStateToProps,{getMoviesList})(AllMovies);