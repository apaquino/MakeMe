import React, { Component } from 'react-native';
import { Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import Launch from './components/Start/Launch';
import Login from './components/Start/Login';

const {
  Navigator
} = React;

class MakeMeRouter extends Component {
  render() {
          return (
              <Router hideNavBar={true}>
                  <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                  <Schema name="withoutAnimation"/>
                  <Route name="launch" component={Launch} initial={true} title="Launch" />
                  <Route name="login" component={Login} title="Login" />
              </Router>
          );
  }
};

export default MakeMeRouter;
