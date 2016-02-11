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
  ListView,
  TouchableHighlight,
} = React;

class Favorites extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      favTrainers: ds.cloneWithRows(AppStore.getUserFavoriteTrainers()),
      favRoutines: ds.cloneWithRows(AppStore.getUserFavoriteRoutines()),
      isTrainerTabSelected: true
    };
  }

  componentWillMount() {
    AppStore.startListening(EVENTS.ROUTINE_ADDED_TO_PLAYLIST, this._fluxCb_FavAdd);
  }

  componentWillUnmount() {
    AppStore.stopListening(EVENTS.ROUTINE_ADDED_TO_PLAYLIST, this._fluxCb_FavAdd);
  }

  renderRoutine(routine) {
  	return (
      <View style={styles.listContainer}>
        <Image source={routine.categoryPic} style={styles.backgroundImageRoutine}>
          <TouchableHighlight onPress={() => Actions.routineshow({routineId: routine.id, trainerId: routine.trainerId})}>
            <Text style={styles.routineName}>{routine.name}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.trainershow({trainerId: routine.trainerId})}>
            <Text style={styles.trainerNameRoutine}>{routine.trainer}</Text>
          </TouchableHighlight>
          <Text style={styles.routineLevel}>Level {routine.level}</Text>
          <Button
            onPress={() => AppActions.addRoutineToPlaylist(routine.id)}
            style={styles.playlistButton} textStyle={styles.playlistButtonText}
          >
            +
          </Button>
        </Image>
      </View>
		)
	}

  renderRoutineList() {
    // need key for ListView because of diff algorithm will not render correctly
    // when switching between routines and trainers
    return (
      <ListView
        key={"routineList"}
        dataSource={this.state.favRoutines}
        renderRow={this.renderRoutine}
      />
    );
  }

  renderTrainer(trainer) {
    // TODO styles for View
    return (
      <View style={styles.needToReplace}>
        <Image source={require('../../img/backgrounds/trainers_background_fav.png')} style={styles.backgroundTrainer}>
          <Image source={trainer.profilePic} style={styles.profile}/>
          <TouchableHighlight onPress={() => Actions.trainershow({trainerId: trainer.id})}>
            <Text style={styles.trainerName}>{trainer.name}</Text>
          </TouchableHighlight>
          <Text style={styles.specialties}>Specialties: {trainer.specialties}</Text>
          <Text style={styles.completedRoutines}>3 of 8</Text>
        </Image>
       </View>
    )
  }

  renderTrainerList() {
    // need key for ListView because of diff algorithm will not render correctly
    // when switching between routines and trainers.
    return (
      <ListView
        key={"trainerList"}
        dataSource={this.state.favTrainers}
        renderRow={this.renderTrainer}
      />
    );
  }

  _fluxCb_FavAdd = () => {
    Actions.tab1()
  };

  render() {
    const { isTrainerTabSelected, favRoutines } = this.state;
    const trainerBar =  isTrainerTabSelected ?
                        require('../../img/buttons/active_bar.png') :
                        require('../../img/buttons/inactive_bar.png');
    const routineBar =  isTrainerTabSelected ?
                        require('../../img/buttons/inactive_bar.png') :
                        require('../../img/buttons/active_bar.png');
    return (
      <View style={styles.container}>
				<View style={styles.child}>
          <TouchableHighlight onPress={() => this.setState({isTrainerTabSelected: false})}>
					<Image source={routineBar} style={styles.bar}>
						<Text
              style={isTrainerTabSelected ? styles.barTextDisactive : styles.barTextActive}
            >
              ROUTINES
            </Text>
          </Image>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({isTrainerTabSelected: true})}>
					<Image source={trainerBar} style={styles.bar}>
						<Text
              style={isTrainerTabSelected ? styles.barTextActive : styles.barTextDisactive}
            >
              TRAINERS
            </Text>
					</Image>
          </TouchableHighlight>
				</View>
        {isTrainerTabSelected ? this.renderTrainerList() : this.renderRoutineList()}
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    marginTop: 60
  },
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  child: {
    flexDirection: 'row',
    borderColor: '#333333',
    borderWidth: .5,
    height: 55
  },
  bar: {
  	height: 55,
  	width: 188
  },
  barTextActive: {
  	fontFamily: 'Raleway',
  	fontWeight: 'bold',
  	color: '#ce3c3c',
  	fontSize: 14,
  	marginTop: 4,
  	letterSpacing: 2,
  	alignSelf: 'center',
  	marginTop: 23
  },
  barTextDisactive: {
  	fontFamily: 'Raleway',
  	fontWeight: 'bold',
  	color: '#666666',
  	fontSize: 14,
  	marginTop: 4,
  	letterSpacing: 2,
  	alignSelf: 'center',
  	marginTop: 23
  },
  backgroundImageRoutine: {
    height: 135,
    width: 375
  },
  routineName: {
  	marginLeft: 23,
  	marginTop: 22,
  	fontFamily: 'Raleway',
  	fontSize: 19,
  	letterSpacing: 1.5,
  	color: '#ce3c3c'
  },
  trainerNameRoutine: {
  	marginLeft: 23,
  	fontFamily: 'Raleway',
  	color: '#b3b3b3',
  	fontSize: 11,
  	marginTop: 7,
  	letterSpacing: 1
  },
  routineLevel: {
  	marginLeft: 23,
  	fontFamily: 'Raleway',
		color: '#b3b3b3',
		fontSize: 10,
		letterSpacing: 1,
  	marginTop: 5
  },
  playlistButton: {
  	marginLeft: 23,
  	backgroundColor: '#1c1c1c',
  	width: 40,
  	height: 22,
  	borderRadius: 7,
  	borderColor: '#1c1c1c',
  	marginTop: 12
  },
  playlistButtonText: {
    fontFamily: 'HelveticaNeue-Light',
    color: '#ce3c3c',
    letterSpacing: 3,
    fontSize: 21,
    marginTop: -5,
    marginLeft: 2,
    backgroundColor: 'transparent'
  },
  listView: {
  	marginTop: 0
  },
  profile: {
    width: 62,
    height: 62,
    marginTop: 15,
    marginLeft: 15
  },
  trainerName: {
    color: '#ce3c3c',
    fontFamily: 'Raleway',
    fontSize: 18,
    letterSpacing: 1.5,
    position: 'absolute',
    bottom: 20,
    left: 90,
    paddingBottom: 20
  },
  specialties: {
    color: '#b3b3b3',
    fontFamily: 'Raleway',
    letterSpacing: 1.5,
    position: 'absolute',
    bottom: 0,
    fontSize: 11,
    left: 90,
    paddingBottom: 20
  },
  completedRoutines: {
    color: '#b3b3b3',
    fontFamily: 'Raleway',
    letterSpacing: 1,
    fontSize: 11,
    position: 'absolute',
    right: 20,
    top: 30
  },
  backgroundTrainer: {
    width: 375,
    height: 85
  }
});

export default Favorites;
