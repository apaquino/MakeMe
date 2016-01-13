import React, { Component } from 'react-native';
import LoginSignupLogo from './LoginSignupLogo';
import Button from 'apsl-react-native-button';
import InputBackground from './InputBackground';
import InputBackgroundLeft from './InputBackgroundLeft';

const {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  AlertIOS,
  TouchableHighlight
} = React;

class LoginSignup extends Component {
  constructor(props){
    super(props);
    this.state = {
      formType: this.props.startform,
      password: '',
      username: '',
      newUsername: '',
      newPassword: '',
      newEmail: ''
    };
  }

  moveToPasswordField = () => {
    this._password.focus();
  };

  moveToNewPasswordField = () => {
    this._newPassword.focus();
  };

  onNewEmailChange = (e) =>{
    this.setState({newEmail: e.nativeEvent.text});
  };

  signup = () => {
    const { newUsername, newPassword, newEmail } = this.state;
  };

  loginAuthentification = () => {
    console.log("loginAuthentification pressed");
  };

  _renderLoginSignUpForm(){
    const { formType } = this.state;

    if(formType === 'login') {
      return (
        <InputBackgroundLeft>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Username"
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              enablesReturnKeyAutomatically={true}
              returnKeyType='next'
              onChange={(e) => this.setState({username: e.nativeEvent.text})}
              onSubmitEditing={this.moveToPasswordField}
              ref={(c) => this._username = c}
              value={this.state.username}
            >
            </TextInput>
            <TextInput
              style={styles.inputLogin}
              placeholder="Password"
              ref={(c) => this._password = c}
              returnKeyType='go'
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
              onChange={(e) => this.setState({password: e.nativeEvent.text})}
              onSubmitEditing={this.loginAuthentification}
              value={this.state.password}
            >
            </TextInput>
          </View>
        </InputBackgroundLeft>
        )
      } else if (formType === 'signup2'){
        return (
          <InputBackground>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Create username"
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              enablesReturnKeyAutomatically={true}
              returnKeyType='next'
              onChange={(e) => this.setState({newUsername: e.nativeEvent.text})}
              onSubmitEditing={this.moveToNewPasswordField}
              ref={(c) => this._newUsername = c}
              value={this.state.newUsername}
            >
            </TextInput>
            <TextInput
              style={styles.inputLogin}
              placeholder="Create password"
              ref={(c) => this._newPassword = c}
              returnKeyType='go'
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
              onChange={(e) => this.setState({newPassword: e.nativeEvent.text})}
              onSubmitEditing={this.signup}
              value={this.state.newPassword}
            >
            </TextInput>
            </View>
            </InputBackground>
        )
      } else {
        return (
        <InputBackground>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Email"
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType = 'email-address'
              enablesReturnKeyAutomatically={true}
              returnKeyType='next'
              onChange={(e) => this.setState({newEmail: e.nativeEvent.text})}
              onSubmitEditing={() => this.setState({formType: 'signup2'})}
              ref={(c) => this._newEmail = c}
              value={this.state.newEmail}
            >
            </TextInput>
            <TouchableHighlight
              onPress={this.showSignUp2Form}
            >
              <Text style={styles.nextSignup}>Next</Text>
            </TouchableHighlight>
        </View>
        </InputBackground>
      )};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('image!Backdrop_sample')}
          style={styles.backgroundImage}
        >
        <LoginSignupLogo />
        <Text style={styles.tagLine}>Exercise just got personal.</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            onPress={() => this.setState({formType: 'login'})}
          >
          <Text style={styles.tagLineDirectionLeft}>LOG IN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.setState({formType: 'signup1'})}
          >
           <Text style={styles.tagLineDirectionRight}>SIGN UP</Text>
          </TouchableHighlight>
        </View>
        {this._renderLoginSignUpForm()}
        </Image>
      </View>
    )
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
    justifyContent: 'flex-start'
  },
  tagLine: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 19,
    fontSize: 12
  },
  tagLineDirectionLeft: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 70,
    fontSize: 11,
    letterSpacing: 1,
    textAlign: 'center',
    marginRight: 45
  },
  tagLineDirectionRight: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 70,
    fontSize: 11,
    letterSpacing: 1,
    textAlign: 'center',
    marginLeft: 45
  },
  makeRows: {
    flex: 1,
    flexDirection: 'row'
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 17,
  },
  inputLogin: {
    height: 40,
    width: 330,
    borderColor: 'transparent',
    borderWidth: 2,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 15
  },
  nextSignup: {
    color: '#ce3c3c',
    marginTop: 12,
    fontSize: 15,
    fontFamily: 'Raleway',
    letterSpacing: 1
  }
});

export default LoginSignup;
