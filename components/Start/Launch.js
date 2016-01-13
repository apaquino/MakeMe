'use strict';

import React, { Component } from 'react-native';
import Button from 'apsl-react-native-button';
import AppActions from '../../src/actions/AppActions';
import AppStore from '../../src/stores/AppStore';
import { Actions } from 'react-native-router-flux';


import StartLogo from './StartLogo';

const {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBarIOS,
} = React;

const _getNameState = () => {
  return AppStore.getName();
};

class Launch extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: _getNameState(),
      inputValue: ""
    };
  }

  componentDidMount () {
    StatusBarIOS.setStyle(1);
    AppStore.startListening(this._onFluxChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.stopListening(this._onFluxChange.bind(this));
  }

  _onFluxChange(){
    this.setState({name: _getNameState()});
  }

  onInputSubmit() {
    const { inputValue } = this.state;
    AppActions.setName(inputValue);
    this.setState({inputValue: ""});
  }

  onLoginPress(){
    console.log("Login button was pressed");
    Actions.login();
  }

  render() {
    return (
      <View style={styles.container}>
				<Image
          source={require('image!Backdrop_sample')}
          style={styles.backgroundImage}
        >
					<StartLogo/>
					<Text style={styles.tagLine}>Exercise just got personal.</Text>
					<Button
            onPress={Actions.login}
            style={styles.loginStyleButton}
            textStyle={styles.loginStyleText}>
                LOG IN
          </Button>
          <Button
            style={styles.signupStyleButton}
            textStyle={styles.loginStyleText}>
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
    marginTop: -65
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
