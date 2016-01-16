import React, { Component } from 'react-native';
import { Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import Launch from '../components/Start/Launch';
import LoginSignup from '../components/Start/LoginSignup';
import About from '../components/Start/About';
import TabView from '../components/Main/TabView';
import Playlist from '../components/Main/Playlist';
import RoutineShow from '../components/Main/RoutineShow';
import TrainerShow from '../components/Main/TrainerShow';
import Suggested from '../components/Main/Suggested';
import Favorites from '../components/Main/Favorites';
import Profile from '../components/Main/Profile';

import {
  ProfileTabIcon,
  FavoritesTabIcon,
  PlaylistTabIcon,
  GoTabIcon,
  SuggestedTabIcon,
} from '../components/Main/TabBarIcons';

import {
  renderTitle,
  renderTitleTryMe,
} from '../components/Main/NavBarIcons';

const {
  Navigator,
  Text,
  View,
  Image,
  StyleSheet
} = React;

class MakeMeRouter extends Component {
  render() {

    // nested router backbutton pop https://github.com/aksonov/react-native-router-flux/issues/110
    return (
      <Router hideNavBar={true}>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" navigationBarStyle={{backgroundColor: '#1c1c1c'}} renderTitle={renderTitle}/>
        <Route name="launch" component={Launch} initial={true} />
        <Route name="loginsignup" component={LoginSignup} />
        <Route name="about" component={About} />
        <Route name="tabbar" >
          <Router footer={TabBar} style={{backgroundColor: '#1c1c1c'}} showNavigationBar={false}>
            <Route name="tab1" schema="tab" title="Playlist" icon={PlaylistTabIcon} >
              <Router>
                <Route name="playlist" title="playlist" component={Playlist} renderTitle={renderTitle}/>
                <Route name="routineshow" title="routineshow" component={RoutineShow} renderTitle={renderTitle}/>
                <Route name="trainershow" title="trainershow" component={TrainerShow} renderTitle={renderTitle}/>
              </Router>
              </Route>
              <Route name="tab2" schema="tab" title="Suggested" icon={SuggestedTabIcon}>
              <Router>
                <Route name="suggested" title="suggested" component={Suggested} renderTitle={renderTitleTryMe}/>
                <Route name="routineshow2" title="routineshow" component={RoutineShow} renderTitle={renderTitle}/>
                <Route name="trainershow2" title="trainershow" component={TrainerShow} renderTitle={renderTitle}/>
                </Router>
              </Route>
              <Route name="tab3" schema="tab" title="Tab #3" component={TabView} icon={GoTabIcon}/>
              <Route name="tab4" schema="tab" title="Favorites" icon={FavoritesTabIcon}>
                <Router>
                  <Route name="favorites" title="favorites" component={Favorites} renderTitle={renderTitle}/>
                  <Route name="routineshow3" title="routineshow" component={RoutineShow} renderTitle={renderTitle}/>
                  <Route name="trainershow3" title="trainershow" component={TrainerShow} renderTitle={renderTitle}/>
                </Router>
              </Route>
              <Route name="tab5" schema="tab" title="Profile" component={Profile} icon={ProfileTabIcon}/>
          </Router>
        </Route>
      </Router>
    );
  }
};

export default MakeMeRouter;
