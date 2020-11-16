import React from 'react';
import { connect } from 'react-redux';
import { getIndividualMovie } from "../../actions/movies";
import Layout from '../Layout';
import Loader from '../Loader';

class Movie extends React.Component {

    componentDidMount () {
        let movieid = this.props.match.params.movieid
        this.props.getIndividualMovie(parseInt(movieid))
    }

    render () {

        if(this.props.movie.loading) {
            return (
                <Layout>
                    <Loader />
                </Layout>
            )
        }


        let movie = null
        if (!this.props.movie.loading && !this.props.movie.error) {
            movie = (
                <div className="ui grid">
                    <div className="five wide column">
                        <div className="ui card">
                            <div className="image">
                                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${this.props.movie.movie.poster_path}`} style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                    <div className="eleven wide column">
                        <h1>{this.props.movie.movie.original_title}</h1>
                        <p>
                            <b>{this.props.movie.movie.release_date} * {this.props.movie.movie.status}</b>
                        </p>
                        <p>
                            {this.props.movie.movie.tagline}
                        </p>
                        <h3>
                            Total votes : {this.props.movie.movie.vote_count} | Rating : <b>{this.props.movie.movie.vote_average}</b>
                        </h3>

                        <h5>
                            {this.props.movie.movie.overview}
                        </h5>
                    </div>
                </div>
            )
        }

        return (
            <Layout>
                {movie}
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.movie)
    return state
}

export default connect(mapStateToProps, {
    getIndividualMovie
})(Movie);