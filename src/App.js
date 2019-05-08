import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() extends Component {
  render() {
    return  (
      <Router>
      <div className="container">
        <h2>MERN-Stack Todo App</h2>
        </div>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        </Router>
    );
  }
}

export default App;
