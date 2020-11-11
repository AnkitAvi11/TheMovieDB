import React from 'react';

const Layout = (props) => {
    return (
        <div className="ui container" style={{padding:"10px 12px"}}>
            {props.children}
        </div>
    )
}

export default Layout;