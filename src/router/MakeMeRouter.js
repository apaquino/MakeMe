import React, { Component } from 'react-native';
import { Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import Launch from '../components/Start/Launch';
import LoginSignup from '../components/Start/LoginSignup';
import About from '../components/Start/About';
import Playlist from '../components/Main/Playlist';
import RoutineShow from '../components/Main/RoutineShow';
import TrainerShow from '../components/Main/TrainerShow';
import Suggested from '../components/Main/Suggested';
import Favorites from '../components/Main/Favorites';
import Profile from '../components/Main/Profile';
import Go from '../components/Main/Go';
import Workout from '../components/Main/Workout';

import
  { ProfileTabIcon
  , FavoritesTabIcon
  , PlaylistTabIcon
  , GoTabIcon
  , SuggestedTabIcon
  } from '../components/Main/TabBarIcons';

import
  { renderTitle
  , renderTitleTryMe
  , renderTitleLikeMe
  , renderRightButtonGear
  , renderLeftBackButton
  , renderLeftFilter
  } from '../components/Main/NavBarIcons';

const
  { Navigator
  , Text
  , View
  , Image
  , StyleSheet
  } = React;

class MakeMeRouter extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight} renderRightButton={renderRightButtonGear}/>
        <Schema name="backbutton" renderTitle={renderTitle} renderLeftButton={renderLeftBackButton}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" navigationBarStyle={{backgroundColor: '#1c1c1c'}} renderTitle={renderTitle}/>
        <Route name="launch" component={Launch} initial={true} />
        <Route name="loginsignup" component={LoginSignup} />
        <Route name="about" component={About} />
        <Route name="tabbar" >
          <Router footer={TabBar} style={{backgroundColor: '#1c1c1c'}} showNavigationBar={false}>
            <Route name="tab1" schema="tab" title="Playlist" icon={PlaylistTabIcon} >
              <Router>
                <Route name="playlist" title="playlist" component={Playlist} renderTitle={renderTitle} />
                <Route name="routineshow" title="routineshow" component={RoutineShow} schema="backbutton"/>
                <Route name="trainershow" title="trainershow" component={TrainerShow} schema="backbutton"/>
                <Route name="go" title="go" component={Go} schema="backbutton"/>
                <Route name="workout" title="workout" component={Workout} schema="backbutton"/>
              </Router>
            </Route>
            <Route name="tab2" schema="tab" title="Suggested" icon={SuggestedTabIcon}>
              <Router>
                <Route name="suggested" title="suggested" component={Suggested} renderTitle={renderTitleTryMe} renderLeftButton={renderLeftFilter}/>
                <Route name="routineshow" title="routineshow" component={RoutineShow} schema="backbutton"/>
                <Route name="trainershow" title="trainershow" component={TrainerShow} schema="backbutton"/>
              </Router>
            </Route>
            <Route name="tab3" schema="tab" title="Go" icon={GoTabIcon}>
              <Router>
                <Route name="go" title="go" component={Go} renderTitle={renderTitle}/>
                <Route name="routineshow" title="routineshow" component={RoutineShow} schema="backbutton"/>
                <Route name="trainershow" title="trainershow" component={TrainerShow} schema="backbutton"/>
                <Route name="workout" title="workout" component={Workout} schema="backbutton"/>
              </Router>
            </Route>
            <Route name="tab4" schema="tab" title="Favorites" icon={FavoritesTabIcon}>
              <Router>
                <Route name="favorites" title="favorites" component={Favorites} renderTitle={renderTitleLikeMe}/>
                <Route name="routineshow" title="routineshow" component={RoutineShow} schema="backbutton"/>
                <Route name="trainershow" title="trainershow" component={TrainerShow} schema="backbutton"/>
              </Router>
            </Route>
            <Route name="tab5" schema="tab" title="Profile" icon={ProfileTabIcon}>
              <Router>
                <Route name="profile" title="profile" component={Profile} renderTitle={renderTitle}/>
                <Route name="routineshow" title="routineshow" component={RoutineShow} schema="backbutton"/>
                <Route name="trainershow" title="trainershow" component={TrainerShow} schema="backbutton"/>
              </Router>
            </Route>
          </Router>
        </Route>
      </Router>
    );
  }
};

export default MakeMeRouter;
