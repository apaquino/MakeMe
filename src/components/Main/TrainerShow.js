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
  ScrollView
} = React;

class TrainerShow extends Component {
  constructor(props) {
    super(props);
    const { trainerId } = this.props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(AppStore.getTrainerRoutines(trainerId)),
      trainer: AppStore.getTrainerDetails(trainerId),
      showRoutines: false,
      showBio: false,
      isFavorite: AppStore.isTrainerFavorite(trainerId)
    };
  }

  componentWillMount() {
    AppStore.startListening(EVENTS.TRAINER_FAVORITE_TOGGLED, this._fluxCb_FavToggled);
  }

  componentWillUnmount() {
    AppStore.stopListening(EVENTS.TRAINER_FAVORITE_TOGGLED, this._fluxCb_FavToggled);
  }

  renderRoutine(routine) {
    return (
      <View>
        <Image source={routine.categoryPic} style={styles.backgroundImage}>
          <TouchableHighlight
            onPress={() => Actions.routineshow({routineId: routine.id, trainerId: routine.trainerId})}
          >
            <Text style={styles.routineName}>{routine.name}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.trainershow({trainerId: routine.trainerId})}>
            <Text style={styles.trainerName}>{routine.trainer}</Text>
          </TouchableHighlight>
          <Text style={styles.routineLevel}>Level {routine.level}</Text>
          <Button
            style={styles.playlistButton}
            textStyle={styles.playlistButtonText}
            onPress={() => AppActions.addRoutineToPlaylist(routine.id)}
          >
          +
          </Button>
        </Image>
      </View>
    )
  }

  _fluxCb_FavToggled = () => {
    this.setState({
      isFavorite: AppStore.isTrainerFavorite(this.props.trainerId)
    });
  };

  render() {
    const { trainer, isFavorite, showBio, showRoutines, dataSource } = this.state;
    const favIcon = isFavorite ?
                    require('../../img/buttons/star_fav_true.png') :
                    require('../../img/buttons/star_fav_false.png');

    // TODO: Make into a function to be DRY
    const bioArrow =  showBio ?
                      require('../../img/buttons/drop_arrow_true.png') :
                      require('../../img/buttons/drop_arrow_false.png');
    const routineArrow =  showRoutines ?
                          require('../../img/buttons/drop_arrow_true.png') :
                          require('../../img/buttons/drop_arrow_false.png');
    return (
			<View style={styles.container}>
        <Image source={trainer.coverPic} style={styles.coverImage}>
          <TouchableHighlight
            onPress={() => AppActions.toggleTrainerFavorite(trainer.id)}
            style={styles.TouchableHighlight}
            underlayColor={"transparent"}
          >
            <Image source={favIcon} style={styles.favStar}/>
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
        <ScrollView
          style={styles.parentBottom}
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.parentBottom}
        >
          <TouchableHighlight onPress={() => this.setState({showRoutines: !showRoutines})}>
            <View style={styles.childBottom}>
              <Text style={styles.childBottomLeft}>Routines</Text>
              <Image
                source={routineArrow}
                style={styles.childBottomRightImage}
              />
            </View>
          </TouchableHighlight>

          {showRoutines && (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRoutine}
            />
          )}

          <TouchableHighlight onPress={() => this.setState({showBio: !showBio})}>
            <View style={styles.childBottom}>
              <Text style={styles.childBottomLeft}>Bio</Text>
              <Image
                source={bioArrow}
                style={styles.childBottomRightImage}
              />
            </View>
          </TouchableHighlight>

          {showBio && (<Text style={styles.childBottomBio}>{trainer.bio}</Text>)}

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Active Since</Text>
            <Text style={styles.childBottomRight}>{trainer.activeSince}</Text>
          </View>
          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Specialties</Text>
            <Text style={styles.childBottomRight}>{trainer.specialties}</Text>
          </View>
          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Contact</Text>
            <Text style={styles.childBottomRight}>{trainer.contact}</Text>
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
    flexWrap: 'wrap',
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
    backgroundColor: 'black',
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
