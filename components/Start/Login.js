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

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      formType: 'login',
      password: '',
      username: '',
      newUsername: '',
      newPassword: '',
      newEmail: ''
    };
  }

  onUsernameChange(e) {
    this.setState({username: e.nativeEvent.text});
  }

  moveToPasswordField() {
    this._password.focus();
  }

  onPasswordChange(e) {
    this.setState({password: e.nativeEvent.text});
  }

  onNewUsernameChange(e) {
    this.setState({newUsername: e.nativeEvent.text});
  }

  moveToNewPasswordField() {
    this._newPassword.focus();
  }

  onNewPasswordChange(e) {
    this.setState({newPassword: e.nativeEvent.text});
  }

  onNewEmailChange(e) {
    this.setState({newEmail: e.nativeEvent.text});
  }

  signup() {
    var newUsername = this.state.newUsername;
    var newPassword = this.state.newPassword;
    var newEmail = this.state.newEmail;
    this._newUsername.setNativeProps({text: ''});
    this._newPassword.setNativeProps({text: ''});
    // this._newEmail.setNativeProps({text: ''});
  }

  showLoginForm(){
    this.setState({formType: 'login'});
  }

  showSignUp1Form(){
    this.setState({formType: 'signup1'});
  }

  showSignUp2Form(){
    this.setState({formType: 'signup2'});
    this._newEmail.setNativeProps({text: ''});
  }

  loginAuthentification(){
    console.log("loginAuthentification pressed");
  }

  _renderLoginSignUpForm(){

    if(this.state.formType === 'login') {
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
              onChange={this.onUsernameChange.bind(this)}
              onSubmitEditing={this.moveToPasswordField.bind(this)}
              ref={(c) => this._username = c}>
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
              onChange={this.onPasswordChange.bind(this)}
              onSubmitEditing={this.loginAuthentification.bind(this)}>
            </TextInput>
          </View>
        </InputBackgroundLeft>
        )
      } else if (this.state.formType === 'signup2'){
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
              onChange={this.onNewUsernameChange.bind(this)}
              onSubmitEditing={this.moveToNewPasswordField.bind(this)}
              ref={(c) => this._newUsername = c}>
            </TextInput>
            <TextInput
              style={styles.inputLogin}
              placeholder="Create password"
              ref={(c) => this._newPassword= c}
              returnKeyType='go'
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
              onChange={this.onNewPasswordChange.bind(this)}
              onSubmitEditing={this.signup.bind(this)}>
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
              onChange={this.onNewEmailChange}
              onSubmitEditing={this.showSignUp2Form}
              ref={(c) => this._newEmail= c}>
            </TextInput>
            <TouchableHighlight
              onPress={this.showSignUp2Form.bind(this)} >
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
            onPress={this.showLoginForm.bind(this)}
          >
          <Text style={styles.tagLineDirectionLeft}>LOG IN</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.showSignUp1Form.bind(this)}
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
    marginTop: 200,
    fontSize: 11,
    letterSpacing: 1,
    textAlign: 'center',
    marginRight: 45
  },
  tagLineDirectionRight: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 200,
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

export default Login;
