import React, { Component } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import { EVENTS } from "../../constants/EVENT_CONSTANTS";

import Button from 'apsl-react-native-button';

const {
  View,
  Text,
  StyleSheet,
  Image,
  ListView,
  TouchableHighlight
} = React;

class Playlist extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(AppStore.getPlaylistRoutines()),
    };
  }

  renderRoutine(routine) {
    return (
      <View style={styles.listContainer}>
        <Image source={routine.categoryPic} style={styles.backgroundImage}>
          <TouchableHighlight
            onPress={() => Actions.routineshow({routineId: routine.id, trainerId: routine.trainerId})}
          >
            <Text style={styles.routineName}>{routine.name}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={Actions.trainershow}>
            <Text style={styles.trainerName}>{routine.trainer}</Text>
          </TouchableHighlight>
          <Text style={styles.routineLevel}>Level {routine.level}</Text>
          <Button
            onPress={Actions.tab3}
            style={styles.playlistButton}
            textStyle={styles.playlistButtonText}
          >
            GO
          </Button>
       </Image>
      </View>
    )
  }

  render() {
      return (
				<View style={styles.container}>
	  			<ListView
	  				automaticallyAdjustContentInsets={false}
	  				dataSource={this.state.dataSource}
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
		backgroundColor: '#1c1c1c'
	},
	listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
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
  	fontFamily: 'BebasNeue',
  	color: '#ce3c3c',
  	letterSpacing: 3,
  	fontSize: 16
  },
  listView: {
  	marginTop: 55
  }
});

export default Playlist;
