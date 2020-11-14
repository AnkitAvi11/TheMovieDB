import React from 'react';

class Movie extends React.Component {

    componentDidMount () {
        let movieid = this.props.match.params.movieid
        console.log(movieid)
    }

    render () {
        return (
            <p>{this.props.match.params.movieid}</p>
        )
    }
}

export default Movie;