import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import auth0Client from './Auth';
import NavBar from './navbar/NavBar';
import SecuredRoute from './securedroute/SecuredRoute';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import Callback from './Callback';

class App extends Component {

  async componentDidMount() {
  if (this.props.location.pathname === '/Callback') return;
  try {
    await auth0Client.silentAuth();
    this.forceUpdate();
  } catch (err) {
    if (err.error !== 'login_required') console.log(err.error);
  }
  }

  render() {
    return  (
      <Router>
        <div className="container">
          <NavBar/>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <SecuredRoute path="/create" component={CreateTodo} />

          <Route exact path='/callback' component={Callback}/>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
