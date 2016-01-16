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
  ScrollView,
} = React;

/*
 *  This is a componet that is for POC only.  Data is mostly mocked and not
 *  as functional as the other scenes.  New users will always see most of this
 *  data.  Buttons will not perform any mutations.
 *  Many opportunities to refactor and create new components
*/

const MOCK_CALENDAR = [ "Oct 05 - Oct 11", "Sept 28 - Oct 4", "Sept 21 - Sep 27"];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      showCompletedRoutines: false,
      showMinutes: false,
      showWeekId: 0
    };
  }

  render() {
    const { dataSource, showCompletedRoutines, showMinutes, showWeekId } = this.state;
    const minutesArrow =  showMinutes ?
                          require('../../img/buttons/drop_arrow_true.png') :
                          require('../../img/buttons/drop_arrow_false.png');

    return (
      <View style={styles.container}>
        <Image
          source={require('../../img/profile/user/userprofile_cover.png')}
          style={styles.coverImage}
        >
        <Image source={require('../../img/profile/user/profile_martina.png')} style={styles.profileImage}/>
          <TouchableHighlight style={styles.highlightButton}>
            <Image source={require('../../img/buttons/edit_button.png')} style={styles.playlistButtonIcon}/>
          </TouchableHighlight>
          <Text style={styles.trainerName1}>FitMartin87</Text>
          <TouchableHighlight>
            <Text style={styles.location}>Strong</Text>
          </TouchableHighlight>
        </Image>
        <Image source={require('../../img/buttons/triple_red_bar.png')} style={styles.redBar}>
          <View style={styles.parent}>
            <Text style={styles.child}>204</Text>
            <Text style={styles.child}>37</Text>
            <Text style={styles.child}>Athlete</Text>
          </View>
          <View style={styles.parent}>
            <Text style={styles.childLow}>Avg. Minutes</Text>
            <Text style={styles.childLow}>Completed</Text>
            <Text style={styles.childLow}>Status</Text>
          </View>
        </Image>

        <ScrollView
          style={styles.parentBottom}
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.parentBottom}
        >

          {/* need to add calender carousel function here*/}

          <TouchableHighlight
            onPress={() => this.setState({showCompletedRoutines: !showCompletedRoutines})}
          >
            <View style={styles.childBottom}>
              <Text style={styles.childBottomLeft}>Completed</Text>
              {/*this.dropDownArrow(this.state.showCompletedRoutines) show arrow func later */}
            </View>
          </TouchableHighlight>

          {showCompletedRoutines && (
            <View />
            )
          }

          <TouchableHighlight
            onPress={() => this.setState({showMinutes: !showMinutes})}
          >
            <View style={styles.childBottom}>
              <Text style={styles.childBottomLeft}>Stats</Text>
              <Image source={minutesArrow} style={styles.childBottomRightImageTrue}/>
            </View>
          </TouchableHighlight>

          {showMinutes && (
              <View>
                <View style={styles.minutesPopup}>
                  <Text style={styles.childBottomLeftRed}>Done this week:</Text>
                <Text style={styles.childBottomRightRed}>2 routines</Text>
                </View>
                <View style={styles.minutesPopup}>
                  <Text style={styles.childBottomLeftRed}>Minutes this week:</Text>
                  <Text style={styles.childBottomRightRed}>88 minutes</Text>
                </View>
                <View style={styles.minutesPopup}>
                  <Text style={styles.childBottomLeftRed}>Versus last week:</Text>
                  <Text style={styles.childBottomRightRed}>13% Increase</Text>
                </View>
              </View>
            )
          }

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Intensity</Text>
            <Text style={styles.childBottomRight}>8% Increase</Text>
          </View>
          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Email</Text>
            <Text style={styles.childBottomRight}>mjones@gmail.com</Text>
          </View>
        </ScrollView>
      </View>
		)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexWrap: 'wrap'
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
    alignSelf: 'center'
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
  highlightButton: {
    marginLeft: 165,
    position: 'absolute',
    bottom: 69
  },
  playlistButtonIcon: {
    height: 30,
    width: 45
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
  childBottomArrows: {
    flexDirection: 'row',
    borderColor: '#333333',
    borderWidth: .5,
    height: 60,
    justifyContent: 'center'
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
  listView: {
    marginBottom: -50,
    marginTop: -20
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
  childBottomRightImage: {
    height: 10,
    width: 8,
    alignSelf: 'center',
    marginRight: 30
  },
  childBottomRightImageTrue: {
    height: 8,
    width: 10,
    alignSelf: 'center',
    marginRight: 30
  },
  childBottomDate: {
    color: '#ce3c3c',
    fontFamily: 'Raleway',
    alignSelf: 'center',
    fontSize: 14,
    letterSpacing: 1,
  },
  redArrowLeft: {
    width: 9,
    height: 10
  },
  redArrowLeftHighlight: {
    position: 'absolute',
    left: 110,
    top: 25
  },
  redArrowRightHighlight: {
    position: 'absolute',
    right: 110,
    top: 25
  },
  redArrowRight: {
    width: 9,
    height: 10,
    position: 'absolute'
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
  minutesPopup: {
    flexDirection: 'row',
    width: 375,
    height: 50,
    backgroundColor: 'black'
  },
  childBottomLeftRed: {
    flex: 1,
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Raleway',
    color: '#ce3c3c',
    alignSelf: 'center',
    paddingLeft: 30,
    letterSpacing: 1,
    backgroundColor: 'transparent'
  },
  childBottomRightRed: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'Raleway',
    color: '#ce3c3c',
    alignSelf: 'center',
    paddingRight: 30,
    letterSpacing: 1,
    backgroundColor: 'transparent'
  },
});

export default Profile;
