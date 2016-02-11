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
  TouchableHighlight
} = React;

class Suggested extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(AppStore.getSuggestedRoutines()),
    };
  }

  componentWillMount() {
    AppStore.startListening(EVENTS.ROUTINE_ADDED_TO_PLAYLIST, this._fluxCb_SugAdd);
  }

  componentWillUnmount() {
    AppStore.stopListening(EVENTS.ROUTINE_ADDED_TO_PLAYLIST, this._fluxCb_SugAdd);
  }

  renderRoutine(routine) {
		return (
      <View style={styles.container}>
        <Image source={routine.categoryPic} style={styles.backgroundImage}>
          <TouchableHighlight onPress={() => Actions.routineshow({routineId: routine.id, trainerId: routine.trainerId})}>
            <Text style={styles.routineName}>{routine.name}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.trainershow({trainerId: routine.trainerId})}>
            <Text style={styles.trainerName}>{routine.trainer}</Text>
          </TouchableHighlight>
            <Text style={styles.routineLevel}>Level {routine.level}</Text>
          <Button
            onPress={() => AppActions.addRoutineToPlaylist(routine.id)}
            style={styles.playlistButton}
            textStyle={styles.playlistButtonText}
          >
            +
          </Button>
        </Image>
      </View>
		)
	}

  _fluxCb_SugAdd = () => {
    const { dataSource } = this.state;
    // Issue with ListView but leaving here.  If there is a setState, there will
    // be a re-render.  See render function.
    this.setState = ({
      dataSource: dataSource.cloneWithRows(AppStore.getPlaylistRoutines()),
    });
    // Issue calling function in onPress in listview. function undefined.
    // Temp workaround to make it redirect after adding playlist
    Actions.tab1()
  };

  render() {
    /*  Current issue with list view (update with GitHub issue # later)
     *  This will always get the current data as long as there is a re-render
     *  The flux cb will trigger a re-render on setState and this will run.
     */
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
          newSuggestedList = ds.cloneWithRows(AppStore.getSuggestedRoutines());

    return (
      <View style={[styles.container, {marginTop: 60}]}>
        <Image source={require('../../img/buttons/suggested_bar.png')} style={styles.suggestedBar}>
          <Text style={styles.suggestedContent}>Suggested for you</Text>
        </Image>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={newSuggestedList}
          renderRow={this.renderRoutine}
          style={styles.listView}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'black'
  },
    backgroundImage: {
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
  trainerName: {
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
  	marginTop: 5,
    backgroundColor: 'transparent'
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
  suggestedBar: {
  	width: 375,
  	height: 21
  },
  suggestedContent: {
  	fontFamily: 'Raleway',
  	color: '#b3b3b3',
  	fontSize: 11,
  	marginTop: 4,
  	letterSpacing: 1,
  	alignSelf: 'center',
    backgroundColor: 'transparent'
  }
});

export default Suggested;
