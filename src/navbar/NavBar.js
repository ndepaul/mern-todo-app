import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/Users/nicolas/mern-todo-app/src/Amplitude.png";

function NavBar() {
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
        </nav>
  );
}

export default NavBar;
