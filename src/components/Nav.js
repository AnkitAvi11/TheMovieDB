import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
<div className="ui container" style={{margin:"15px 0px"}}>
        <div className="ui secondary  menu">
        <Link to="/" className="item">
          <b>The Movie DB</b>
        </Link>
        <NavLink to="/movies" className="item">
          Movies
        </NavLink>
        <NavLink to="/tvshows" className="item">
          TV Shows
        </NavLink>
        <NavLink to="/people" className="item">
          People
        </NavLink>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search movies ..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Nav;