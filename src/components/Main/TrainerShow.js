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

class TrainerShow extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: [],
      trainer: AppStore.getTrainerDetails(this.props.trainerId),
      showRoutines: false,
      showBio: false,
      isFavorite: false
    };
  }

  render() {
    const { trainer, isFavorite } = this.state;
    const favIcon = isFavorite ?
                    require('../../img/buttons/star_fav_true.png') :
                    require('../../img/buttons/star_fav_false.png');
    return (
			<View style={styles.container}>
        <Image source={trainer.coverPic} style={styles.coverImage}>
          <TouchableHighlight
            onPress={() => this.setState({ isFavorite: !isFavorite })}
            style={styles.TouchableHighlight}
            underlayColor={"transparent"}
          >
            <Image source={favIcon} style={styles.childBottomRightImage}/>
          </TouchableHighlight>
          <Image source={trainer.profilePic} style={styles.profileImage}/>
          <Text style={styles.trainerName1}>{trainer.name} </Text>
          <Text style={styles.location}>{trainer.location}</Text>
        </Image>
        <Image
          source={require('../../img/buttons/triple_red_bar.png')}
          style={styles.redBar}
        >
          <View style={styles.parent}>
            <Text style={styles.child}>{trainer.numFavorites} k</Text>
            <Text style={styles.child}>{trainer.numRoutines}</Text>
            <Text style={styles.child}>{trainer.numComments}</Text>
          </View>
          <View style={styles.parent}>
            <Text style={styles.childLow}>Favorited</Text>
            <Text style={styles.childLow}>Routines</Text>
            <Text style={styles.childLow}>Comments</Text>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tester: {
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
  redBar: {
    width: 375,
    height: 55
  },
  barTopLeft: {
    color: '#ffffff',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
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
  childBottomBio: {
    borderColor: 'transparent',
    borderWidth: .5,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    color: '#ce3c3c',
    letterSpacing: 1,
    lineHeight: 20,
    backgroundColor: 'transparent',
    height: 110,
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 20
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
  listView: {
    marginBottom: -50,
    marginTop: -20
  },
  spacer: {
    height: 15,
    width: 375,
    borderColor: 'red'
  },
  favStar: {
    height: 30,
    width: 47,
    alignSelf: 'center',
    marginBottom: 10
  }
});

export default TrainerShow;
