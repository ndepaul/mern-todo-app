import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import auth0Client from './Auth';
import NavBar from './navbar/NavBar';
import SecuredRoute from './securedroute/SecuredRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Welcome from "./components/welcome";
import Callback from './Callback';
import amplitude from "amplitude-js";
//import {
//  AmplitudeProvider,
//  Amplitude,
//  LogOnMount
//} from "@amplitude/react-amplitude";

const AMPLITUDE_KEY = "2a0c877f114bcac05f8990957f9efcf3";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
    this.setState({checkingSession:false});
    return;
  }

  try {
    await auth0Client.silentAuth();
    this.forceUpdate();
  } catch (err) {
    if (err.error !== 'login_required') console.log(err.error);
  }

  this.setState({checkingSession:false});

  }

  render() {
    return  (
      amplitude.init(AMPLITUDE_KEY),
      <Router>
        <div className="container">
          <NavBar/>
          <br/>
          <Route exact path="/" component={Welcome} />
          <Route path="/todos" component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <SecuredRoute path="/create" component={CreateTodo} checkingSession={this.state.checkingSession} />
          <Route exact path='/callback' component={Callback}/>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
