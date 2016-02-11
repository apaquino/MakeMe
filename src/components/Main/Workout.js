import React, { Component } from 'react-native';
import { AudioPlayer } from './AudioPlayer';
import { Actions } from 'react-native-router-flux';

const {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  AlertIOS
} = React;

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOption: false,
      playingAudio: true,
      isPaused: false
    };
  }

  componentDidMount() {
    if (this.state.playingAudio) {
      AudioPlayer.play('MakeMeWorkOut.mp3');
    }
  }

  componentWillUnmount() {
    AudioPlayer.stop();
  }

  handlePauseButton() {
    const { playingAudio, isPaused } = this.state;
    if(playingAudio && !isPaused) {
      AudioPlayer.stop();
      this.setState({
        playingAudio: false,
        isPaused: true
      });
    } else {
      AudioPlayer.pause();
      this.setState({
        playingAudio: true,
        isPaused: false
      });
    }
  }

  alertQuitWorkout() {
    AlertIOS.alert('Exit Current Workout?', 'Are you sure?',
      [
        {text: 'Cancel', onPress: () => console.log("cancelled logout")},
        {text: 'Yes', onPress: this.quitWorkout },
      ]
    );
  }

  quitWorkout() {
    AudioPlayer.stop();
    AudioPlayer.play('WorkoutQuit.mp3');
    Actions.pop();
  }

  toggleOptions() {
    this.setState({
      showOptions: !this.state.showOptions,
      playAudio: true
    });
  }

  showOptions() {
    const { showOptions, playingAudio } = this.state;
    if (showOptions) {
      return (
        <View style={styles.backgroundImage}>
          <TouchableHighlight onPress={this.alertQuitWorkout.bind(this)}>
            <Text style={styles.xText}>X</Text>
          </TouchableHighlight>
          <Text style={styles.readyText}>VIDEO.</Text>
          <TouchableHighlight onPress={this.handlePauseButton.bind(this)}>
            <Text style={styles.pauseText}>{playingAudio ? "II" : ">>" }</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.toggleOptions.bind(this)}>
          <View style={styles.backgroundImage}>
            {this.showOptions()}
          </View>
        </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexWrap: 'wrap'
  },
  readyText: {
    fontFamily: 'BebasNeue',
    color: '#ce3c3c',
    fontSize: 31,
    letterSpacing: 2
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    width: 375,
    height: 650,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  xText: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#ce3c3c',
    fontSize: 29,
    letterSpacing: 2,
    marginRight: 30
  },
  pauseText: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#ce3c3c',
    fontSize: 29,
    letterSpacing: 3,
    marginLeft: 25
  },
});

export default Workout;
