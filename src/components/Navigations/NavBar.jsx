import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#home">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#Home">
                  Home
                  <span className="sr-only">
                    (current)
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#Disabled">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
