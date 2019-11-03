import React, { Component } from "react";

import { Link } from "react-router-dom";

class MenuBar extends Component {
  render() {
    return (
      <div className="navbar is-vertical">
        <div className="navbar-start">
          <Link className="navbar-item" to="/escritorio">
            <i className="material-icons">home</i>
          </Link>
          <Link className="navbar-item" to="/data">
            <i className="material-icons">file_copy</i>
          </Link>
          <Link className="navbar-item" to="/cartas">
            <i className="material-icons">email</i>
          </Link>
          <Link className="navbar-item" to="/escritorio">
            <i className="material-icons">help</i>
          </Link>
          <Link className="navbar-item" to="/usuarios">
            <i className="material-icons">supervised_user_circle</i>
          </Link>
          <Link className="navbar-item" to="/">
            <i className="material-icons">exit_to_app</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default MenuBar;
