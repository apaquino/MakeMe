import React, { Component, PropTypes } from 'react-native';
import LoginSignupLogo from './LoginSignupLogo';
import Button from 'apsl-react-native-button';
import InputBackground from './InputBackground';
import InputBackgroundLeft from './InputBackgroundLeft';
import { Actions } from 'react-native-router-flux';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import { EVENTS } from "../../constants/EVENT_CONSTANTS";

const
  { View
  , StyleSheet
  , Image
  , Text
  , TextInput
  , AlertIOS
  , TouchableHighlight
  , TouchableOpacity
  } = React;

const propTypes =
  { startform: PropTypes.string.isRequired
  }

class LoginSignup extends Component {
  constructor(props){
    super(props);
    // NOT binding props to state.  It is to initialize on first load from the router.
    this.state =
      { formType: this.props.startform
      , password: ''
      , username: ''
      , newUsername: ''
      , newPassword: ''
      , newEmail: ''
      , msg: ''
      , isLoggedIn:''
      };
  }

  componentWillMount() {
    AppStore.startListening(EVENTS.USER_AUTHENTICATED, this._fluxCb_UserAuth);
    AppStore.startListening(EVENTS.USER_CREATED, this._fluxCb_UserCreated);
  }

  componentWillUnmount() {
    AppStore.stopListening(EVENTS.USER_AUTHENTICATED, this._fluxCb_UserAuth);
    AppStore.stopListening(EVENTS.USER_CREATED, this._fluxCb_UserCreated);
  }

  moveToPasswordField = () => {
    this._password.focus();
  };

  moveToNewPasswordField = () => {
    this._newPassword.focus();
  };

  signup = () => {
    const { newUsername, newPassword, newEmail } = this.state;
    const newUser =
      { username: newUsername
      , email: newEmail
      , password: newPassword
      };
    AppActions.createNewUser(newUser);
  };

  loginAuthentification = () => {
    const { username, password } = this.state;
    const user =
      { username
      , password
      };

    AppActions.authenticateUser(user);
    this.setState({
      username: "",
      password: ""
    });
  };

  // TODO: break up into separate components
  _renderLoginSignUpForm() {
    const { formType, isLoggedIn } = this.state;

    if(formType === 'login') {
      return (
        <InputBackgroundLeft key={'login'}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Username"
              autoCapitalize='none'
              enablesReturnKeyAutomatically={true}
              returnKeyType='next'
              onChange={(e) => this.setState({username: e.nativeEvent.text})}
              onSubmitEditing={this.moveToPasswordField}
              ref={(c) => this._username = c}
              value={this.state.username}
              autoCorrect={false}
              autoFocus={true}
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
          <InputBackground key={'signup2'}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputLogin}
                placeholder="Create username"
                autoCorrect={false}
                autoCapitalize='none'
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                onChange={(e) => this.setState({newUsername: e.nativeEvent.text})}
                onSubmitEditing={this.moveToNewPasswordField}
                ref={(c) => this._newUsername = c}
                value={this.state.newUsername}
                autoFocus={true}
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
        <InputBackground key={'signup1'}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType = 'email-address'
              enablesReturnKeyAutomatically={true}
              returnKeyType='next'
              onChange={(e) => this.setState({newEmail: e.nativeEvent.text})}
              onSubmitEditing={() => this.setState({formType: 'signup2'})}
              ref={(c) => this._newEmail = c}
              value={this.state.newEmail}
              autoFocus={true}
            >
            </TextInput>
            <TouchableHighlight
              onPress={() => this.setState({formType: 'signup2'})}
            >
              <Text style={styles.nextSignup}>Next</Text>
            </TouchableHighlight>
          </View>
        </InputBackground>
      )
    };
  }
  // callbacks for flux.  Has this so I included in the class
  _fluxCb_UserCreated = () => {
    const userid = AppStore.getCurentUserId();
    if (userid) {
      Actions.about();
    } else {
      // TODO Make alert before demo and prod
      this.setState({
        formType: 'signup1',
        newUsername: '',
        newPassword: '',
        newEmail: '',
      });
    }
  };

  _fluxCb_UserAuth = () => {
    const result = AppStore.getIsLoggedIn();
    const userid = AppStore.getCurentUserId();
    if (!result) {
      AlertIOS.alert('The Creditionals You Provided Are Invalid', 'Please try again',
        [{text: 'Okay'
        , onPress: () => this._username.focus()}
        ]
      );
    } else {
      Actions.tabbar();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../img/backgrounds/Backdrop_sample.png')}
          style={styles.backgroundImage}
        >
        <LoginSignupLogo />
        <Text style={styles.tagLine}>Exercise just got personal.</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.setState({formType: 'login'})}
          >
          <Text style={styles.tagLineDirectionLeft}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({formType: 'signup1'})}
          >
           <Text style={styles.tagLineDirectionRight}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        {this._renderLoginSignUpForm()}
        </Image>
      </View>
    )
  }
};

LoginSignup.propTypes = propTypes;

const styles = StyleSheet.create(
  { container:
      { flex: 1
      , flexDirection: 'column'
      , alignItems: 'center'
      , backgroundColor: 'transparent'
      }
  , backgroundImage:
      { flex: 1
      , resizeMode: 'contain'
      , alignItems: 'center'
      , justifyContent: 'flex-start'
      }
  , tagLine:
      { color: '#e6e6e6'
      , letterSpacing: 1
      , fontFamily: 'Raleway'
      , marginTop: 19
      , fontSize: 12
      }
  , tagLineDirectionLeft:
      { color: '#e6e6e6'
      , letterSpacing: 1
      , fontFamily: 'Raleway'
      , marginTop: 70
      , fontSize: 11
      , letterSpacing: 1
      , textAlign: 'center'
      , marginRight: 45
      }
  , tagLineDirectionRight:
      { color: '#e6e6e6'
      , letterSpacing: 1
      , fontFamily: 'Raleway'
      , marginTop: 70
      , fontSize: 11
      , letterSpacing: 1
      , textAlign: 'center'
      , marginLeft: 45
      }
  , makeRows:
      { flex: 1
      ,flexDirection: 'row'
      }
  , inputView:
      { flex: 1
      , alignItems: 'center'
      , marginTop: 17
      }
  , inputLogin:
      { height: 40
      , width: 330
      , borderColor: 'transparent'
      , borderWidth: 2
      , backgroundColor: 'transparent'
      , textAlign: 'center'
      , fontFamily: 'Raleway'
      , fontSize: 15
      }
  , nextSignup:
      { color: '#ce3c3c'
      , marginTop: 12
      , fontSize: 15
      , fontFamily: 'Raleway'
      , letterSpacing: 1
      }
  }
);

export default LoginSignup;
