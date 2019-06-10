import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './navbar/NavBar';
import SecuredRoute from './securedroute/SecuredRoute';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import Callback from './Callback';

class App extends Component {
  render() {
    return  (
      <Router>
        <div className="container">
          <NavBar/>
          <br/>
          <Route path="/" exact component={TodosList} />
          <SecuredRoute path="/edit/:id" component={EditTodo} />
          <SecuredRoute path="/create" component={CreateTodo} />

          <Route exact path='/callback' component={Callback}/>
        </div>
      </Router>
    );
  }
}

export default App;
