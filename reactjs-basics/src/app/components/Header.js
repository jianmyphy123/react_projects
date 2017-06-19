import React from 'react';

export const Header = (props) => {

    return (
      <nav className="nav navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#">{props.homeLink}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );

}
