import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ({location}) => {

  console.log(location);

  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><NavLink to='/todos'>Todos</NavLink></li>
            <li><NavLink to='/featured'>Featured</NavLink></li>
            <li><NavLink to='/archives'>Archives</NavLink></li>
            <li><NavLink to='/settings'>Settings</NavLink></li>
          </ul>
        </div>

      </div>
    </nav>
  );

}

export default Header;
