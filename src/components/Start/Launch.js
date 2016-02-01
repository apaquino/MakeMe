'use strict';

import React, { Component } from 'react-native';
import Button from 'apsl-react-native-button';
import StartLogo from './StartLogo';
import { Actions } from 'react-native-router-flux';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import { EVENTS } from "../../constants/EVENT_CONSTANTS";

const {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBarIOS,
} = React;

class Launch extends Component {
  componentDidMount () {
    StatusBarIOS.setStyle(1);
  }

  render() {
    return (
      <View style={styles.container}>
				<Image
          source={require('../../img/backgrounds/Backdrop_sample.png')}
          style={styles.backgroundImage}
        >
					<StartLogo/>
					<Text style={styles.tagLine}>Exercise just got personal.</Text>
					<Button
            onPress={() => Actions.loginsignup({startform: 'login'})}
            style={styles.loginStyleButton}
            textStyle={styles.loginStyleText}
          >
            LOG IN
          </Button>
          <Button
            onPress={() => Actions.loginsignup({startform: 'signup1'})}
            style={styles.signupStyleButton}
            textStyle={styles.loginStyleText}
          >
            SIGN UP
          </Button>
				</Image>
			</View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tagLine: {
  	color: '#e6e6e6',
  	letterSpacing: 1,
  	fontFamily: 'Raleway',
  	marginTop: 19,
  	fontSize: 12
  },
  loginStyleButton: {
  	marginTop: 290,
  	backgroundColor: '#ce3c3c',
  	width: 185,
  	alignSelf: 'center',
  	borderRadius: 23,
  	borderColor: '#e6e6e6',
  	borderWidth: .5
  },
  loginStyleText: {
  	color: '#e6e6e6',
  	fontFamily: 'Raleway',
  	fontSize: 14,
  	letterSpacing: 1.2
  },
  signupStyleButton: {
  	marginTop: 10,
  	backgroundColor: 'transparent',
  	width: 185,
  	alignSelf: 'center',
  	borderRadius: 23,
  	borderColor: '#e6e6e6',
  	borderWidth: .5
  }
});

export default Launch;
