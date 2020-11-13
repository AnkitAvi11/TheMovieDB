import React, {Component} from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import { getTrendingSeries } from "../../actions/trendingmovies";

class TrendingSeries extends Component {

    componentDidMount() {
        this.props.getTrendingSeries();
    }

    render () {
        
        if(this.props.series.loading) {
            return <Layout>
                <h3 className="title">Trending Series</h3>
                <Loader/>
            </Layout>
        }

        let movieCards = null;
        if(this.props.series.series !== null) {
            let series = []
            for(let i=0;i<8;i++){
                series.push(this.props.series.series[i])
            }
            
            movieCards = series.map((movie, index) => {
                return (
                    <div className="four wide column" key={index}>
                        <div className="ui card">
                        <div className="image">
                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.backdrop_path}`} alt={movie.id} />
                        </div>
                        <div className="content">
                            <p className="header">{movie.name}</p>
                            <div className="meta">
                            <span className="date">{movie.first_air_date}</span>
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
                <h3 className="title">Trending Series</h3>
                <div className="ui grid">
                {movieCards}
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {series : state.trendingSeries};
}

export default connect(mapStateToProps, {getTrendingSeries})(TrendingSeries);