import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/Users/nicolas/mern-todo-app/src/Amplitude.png";
import auth0Client from '../Auth';

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://amplitude.com/" target="_blank" rel="noopener noreferrer">
        <img src={logo} width="138.53" height="70" alt="Amplitude"/>
      </a>
      <Link to="/" className="navbar-brand">To Do App</Link>
      <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">To Do List</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create To Do</Link>
            </li>
          </ul>
        </div>

        {
          !auth0Client.isAuthenticated() &&
          <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
            <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
          </div>
        }

        </nav>
  );
}

export default withRouter(NavBar);
