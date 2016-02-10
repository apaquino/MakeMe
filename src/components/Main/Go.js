import React, { Component } from 'react-native';
import Button from 'apsl-react-native-button';
import { Actions } from 'react-native-router-flux';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import { EVENTS } from "../../constants/EVENT_CONSTANTS";

const {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} = React;

class Go extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistRoutines: AppStore.getPlaylistRoutines(),
      routineIndex: 0
    };
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { routineIndex, playlistRoutines } = this.state;
    const routine = this.state.playlistRoutines[routineIndex];

    return (
      <View style={styles.container}>
        <Image
          source={routine.goBackgroundPic}
          style={styles.backgroundImage}
        >
          <Image
            source={routine.trainerPic}
            style={styles.profileImage}
          />
            <TouchableHighlight
              onPress={() => Actions.routineshow4({routineId: routine.id, trainerId: routine.trainerId})}
            >
              <Text style={styles.routineName}>{routine.name}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => Actions.trainershow4({trainerId: routine.trainerId})}
            >
              <Text style={styles.trainerName}>{routine.trainer}</Text>
            </TouchableHighlight>
            <View style={styles.playText}>
              <TouchableHighlight onPress={() => console.log("X")}>
                <Text style={styles.xText}>X</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => console.log("Ready")}>
                <Text style={styles.readyText}>Ready.</Text>
              </TouchableHighlight>
              {/* do not show button if on the last routine */}
              { routineIndex < playlistRoutines.length - 1 ? (
                <TouchableHighlight onPress={() => this.setState({routineIndex: routineIndex + 1})}>
                  <Image
                    source={require('../../img/buttons/next_go.png')}
                    style={styles.nextGo}
                  />
                </TouchableHighlight> ) : <View />
              }
            </View>
        </Image>
      </View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  trainerName: {
    color: '#b3b3b3',
    letterSpacing: 1.5,
    fontFamily: 'Raleway',
    marginTop: 14,
    fontSize: 12
  },
  routineName: {
    color: '#b3b3b3',
    letterSpacing: 1.5,
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    marginTop: 19,
    fontSize: 17
  },
  profileImage: {
    width: 95,
    height: 95,
    alignSelf: 'center',
    marginTop: 150
  },
  readyText: {
    fontFamily: 'BebasNeue',
    color: '#ce3c3c',
    fontSize: 31,
    letterSpacing: 2
  },
  xText: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#ce3c3c',
    fontSize: 29,
    letterSpacing: 2,
    marginRight: 25
  },
  playText: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 140
  },
  nextGo: {
    marginTop: 7,
    height: 20,
    width: 32,
    marginLeft: 22
  }
});

export default Go;
