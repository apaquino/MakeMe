import React, { Component } from 'react-native';
import { Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import Launch from '../components/Start/Launch';
import LoginSignup from '../components/Start/LoginSignup';
import About from '../components/Start/About';
import TabView from '../components/Main/TabView';
import Playlist from '../components/Main/Playlist';
import RoutineShow from '../components/Main/RoutineShow';
import TrainerShow from '../components/Main/TrainerShow';

import {
  ProfileTabIcon,
  FavoritesTabIcon,
  PlaylistTabIcon,
  GoTabIcon,
  SuggestedTabIcon } from '../components/Main/TabBarIcons';

const {
  Navigator,
  Text,
  View,
  Image,
  StyleSheet
} = React;

const renderTitle = () => {
  return (
    <View>
      <Image
        style={styles.icon}
        source={require('../img/logos/NavLogo.png')}
      />
    </View>
  )
}

class MakeMeRouter extends Component {
  render() {
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
              <Route name="tab1" schema="tab" title="Playlist"  icon={PlaylistTabIcon} >
                <Router>
                  <Route name="playlist" title="playlist" component={Playlist} renderTitle={renderTitle}/>
                  <Route name="routineshow" title="routineshow" component={RoutineShow} renderTitle={renderTitle}/>
                  <Route name="trainershow" title="trainershow" component={TrainerShow} renderTitle={renderTitle}/>
                </Router>
              </Route>
              <Route name="tab2" schema="tab" title="Tab #2" component={TabView} icon={SuggestedTabIcon}/>
              <Route name="tab3" schema="tab" title="Tab #3" component={TabView} icon={GoTabIcon}/>
              <Route name="tab4" schema="tab" title="Tab #4" component={TabView} icon={FavoritesTabIcon}/>
              <Route name="tab5" schema="tab" title="Tab #5" component={TabView} icon={ProfileTabIcon}/>
          </Router>
        </Route>
      </Router>
    );
  }
};

const styles = StyleSheet.create({
	icon: {
		width: 90,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 5
	}
});

export default MakeMeRouter;
