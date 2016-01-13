import React, { Component } from 'react-native';
import { Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import Launch from './components/Start/Launch';
import LoginSignup from './components/Start/LoginSignup';

const {
  Navigator
} = React;

class MakeMeRouter extends Component {
  render() {
          return (
              <Router hideNavBar={true}>
                  <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                  <Schema name="withoutAnimation"/>
                  <Route name="launch" component={Launch} initial={true} />
                  <Route name="loginsignup" component={LoginSignup}  />
              </Router>
          );
  }
};

export default MakeMeRouter;
