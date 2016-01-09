'use strict';

import React, { Component } from 'react-native';
import AppActions from './src/actions/AppActions';
import AppStore from './src/stores/AppStore';

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;



const _getNameState = () => {
  return AppStore.getName();
};

class MakeMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: _getNameState(),
      inputValue: ""
    };
  }

  componentDidMount () {
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native, {this.state.name}!
        </Text>
        <Text style={styles.instructions}>
          You are set up for react-native and flux!!!
        </Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={() => this.onInputSubmit()}
          ref="input"
          placeholder="enter your name"
          onChangeText={(text) => this.setState({inputValue: text})}
          value={this.state.inputValue}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.onInputSubmit()}
        >
        <Text style={styles.buttonText}>
          Update Name
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#48BBEC',
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('MakeMe', () => MakeMe);
