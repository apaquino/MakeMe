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
  TouchableHighlight
} = React;

class RoutineShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routineAdd: false,
      routine: AppStore.getRoutineDetails(this.props.routineId),
      trainer: AppStore.getTrainerDetails(this.props.trainerId)
    };
  }

  onPressAdd = () => {
    const { routineAdd } = this.state;
    if (!routineAdd) {
      this.setState({
        routineAdd: true
      });

      AppActions.addRoutineToPlaylist(this.props.routineId);
      Actions.playlist();
    } else {
      console.log("You already added this");
      //Add alert before demo after development
    }
  };

  render() {
    const { routine, trainer, routineAdd } = this.state;
    return (
			<View style={styles.container}>
         <Image source={routine.categoryCoverPic} style={styles.coverImage} >
          <Image source={routine.trainerPic} style={styles.profileImage}/>
          <TouchableHighlight
            style={styles.highlightButton}
            onPress={this.onPressAdd}
          >
          {routineAdd ?
              <Image source={require('../../img/buttons/added_icon_button.png')} style={styles.playlistButtonIcon}/> :
              <Image source={require('../../img/buttons/add_icon_button.png')} style={styles.playlistButtonIcon}/>
          }
          </TouchableHighlight>
          <Text style={styles.trainerName1}>{routine.name}</Text>
          <TouchableHighlight>
            <Text style={styles.location}>{routine.trainer}</Text>
          </TouchableHighlight>
        </Image>
        <Image source={require('../../img/buttons/triple_red_bar.png')} style={styles.redBar}>
          <View style={styles.parent}>
            <Text style={styles.child}>{trainer.numFavorites}</Text>
            <Text style={styles.child}>{routine.duration}</Text>
            <Text style={styles.child}>{trainer.numComments}</Text>
          </View>
          <View style={styles.parent}>
          <Text style={styles.childLow}>Favorited</Text>
          <Text style={styles.childLow}>Minutes</Text>
          <Text style={styles.childLow}>Comments</Text>
          </View>
        </Image>

        <View style={styles.parentBottom}>
          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Level</Text>
            <Text style={styles.childBottomRight}>{routine.level}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Space</Text>
            <Text style={styles.childBottomRight}>{routine.space}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Equipment</Text>
            <Text style={styles.childBottomRight}>{routine.equipment}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Targets</Text>
            <Text style={styles.childBottomRight}>{routine.targets}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Category</Text>
            <Text style={styles.childBottomRight}>{routine.category}</Text>
          </View>
        </View>
      </View>
		)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 60
  },
  coverImage: {
    width: 375,
    height: 200,
    justifyContent: 'flex-end'
  },
  profileImage: {
    width: 95,
    height: 95,
    alignSelf: 'flex-start',
    marginLeft: 13,
    position: 'absolute',
    bottom: 13
  },
  trainerName1: {
    fontFamily: 'Raleway',
    color: '#ffffff',
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: 'bold',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  location: {
    fontFamily: 'Raleway',
    color: '#b3b3b3',
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 20,
    marginTop: 5,
    letterSpacing: 1
  },
  redBar: {
    width: 375,
    height: 55
  },
  parent: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  child: {
    textAlign: 'center',
    fontSize: 12,
    flex: 1,
    color: '#ffffff',
    fontFamily: 'Raleway',
    letterSpacing: 2,
    fontWeight: 'bold',
    marginTop: 9
  },
  childLow: {
    textAlign: 'center',
    fontSize: 11,
    flex: 1,
    color: '#000000',
    fontFamily: 'Raleway',
    letterSpacing: 2,
    fontWeight: 'bold',
    marginBottom: 10
  },
  parentBottom: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    borderWidth: 1,
    marginBottom: 25,
    alignSelf: 'stretch'
  },
  childBottom: {
    flexDirection: 'row',
    borderColor: '#333333',
    borderWidth: .5,
    height: 60
  },
  childBottomLeft: {
    flex: 1,
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Raleway',
    color: '#cccccc',
    alignSelf: 'center',
    paddingLeft: 30,
    letterSpacing: 1,
    backgroundColor: 'transparent'
  },
  childBottomRight: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'Raleway',
    color: '#999999',
    alignSelf: 'center',
    paddingRight: 30,
    letterSpacing: 1,
    backgroundColor: 'transparent'
  },
  playlistButton: {
    backgroundColor: '#1c1c1c',
    width: 45,
    height: 30,
    borderRadius: 7,
    borderColor: '#1c1c1c',
    marginLeft: 165
  },
  playlistButtonText: {
    backgroundColor: 'transparent',
    fontFamily: 'BebasNeue',
    color: '#ce3c3c',
    marginTop: 2,
    fontSize: 30
  },
  playlistButtonIcon: {
    height: 30,
    width: 45
  },
  highlightButton: {
    marginLeft: 165,
    position: 'absolute',
    bottom: 69
  }
});

export default RoutineShow;
