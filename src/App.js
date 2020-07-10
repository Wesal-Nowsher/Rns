import React, { Component } from 'react';
import { connect } from "react-redux";
// import  Layout from './components/layout'
import Login from './components/login';
import CreateUser from './components/createUser';
import Main from './components/main';


import ScrollToHOC from "./scroll.js";



import Layout from './components/layout'
import { Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';

class App extends Component {
  componentDidMount() {


    // this.props.history.push("/menu/1");
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>

              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={CreateUser} />
              <Route exact path="/welcome" component={Layout} />
            </Switch>
        </BrowserRouter>


      </div>
    );
  }
}

const mapStateToProps = ({ }) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  { }
)(withRouter(App));
