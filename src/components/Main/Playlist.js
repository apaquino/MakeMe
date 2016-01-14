import React, { Component } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import { EVENTS } from "../../constants/EVENT_CONSTANTS";

import Button from 'apsl-react-native-button';

var MOCK_ROUTINE_PLAYLIST_RESULTS = [{
																				name: "V - Core 1.2",
																				trainer: "Val Pherson",
																				level: "2",
																				category: "core",
																				categoryPic: require('../../img/backgrounds/core.png')
																		 },
																		 {
																				name: "HIIT",
																				trainer: "Chris Reede",
																				level: "3",
																				category: "conditioning",
	  																		categoryPic: require('../../img/backgrounds/conditioning.png'),

																		 },
																		 {
																				name: "Purgatory 11",
																				trainer: "Angel Alicea",
																				level: "3",
																				category: "strength",
																				categoryPic: require('../../img/backgrounds/strength.png')
																		 },
																		 {
																				name: "Powerstrike 2.0",
																				trainer: "Ilaria Montague",
																				level: "3",
																				category: "kickbox",
																				categoryPic: require('../../img/backgrounds/kickbox.png'),
																		 },
																		 {
																				name: "V - Core 1.3",
																				trainer: "Val Pherson",
																				level: "2",
																				category: "core",
																				categoryPic: require('../../img/backgrounds/core.png')
																		 },
																		 // {
																			// 	name: "Fit to Fight",
																			// 	trainer: "James Park",
																			// 	level: "2",
																			// 	category: "boxing"
																		 // },
																		];
	// var images = {
	//   core: require('../../img/backgrounds/core.png'),
	//   conditioning: require('../../img/backgrounds/conditioning.png'),
	//   boxing: require('../../img/backgrounds/boxing.png'),
	//   kickbox: require('../../img/backgrounds/kickbox.png'),
	//   strength: require('../../img/backgrounds/strength.png')
	// };

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
      dataSource: ds.cloneWithRows(MOCK_ROUTINE_PLAYLIST_RESULTS),
    };
  }

  renderRoutine(routine) {
    // const image = images[routine.category];
    return (
      <View style={styles.listContainer}>
        <Image source={routine.categoryPic} style={styles.backgroundImage}>
          <TouchableHighlight onPress={Actions.routineshow}>
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
