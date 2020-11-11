import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui segment" style={{height:"200px"}}>
        <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
        </div>
        <p></p>
        </div>
    )
}

export default Loader;