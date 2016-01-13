import React, { Component } from 'react-native';
import Button from 'apsl-react-native-button';
import UseMe from './UseMe';
import { Actions } from 'react-native-router-flux';

const {
  View,
  StyleSheet,
  Image,
  Text,
} = React;

class About extends Component {
	render(){
	  return (
	    <View style={styles.container}>
	      <Image
	        source={require('../../img/backgrounds/Backdrop_sample.png')}
	  	    style={styles.backgroundImage}
	      >
    		<UseMe />
    		<View style={{paddingLeft: 18, paddingRight: 18}}>
    		<Text style={styles.tagLine}>
    		Make Me brings the very best talent in personal training straight to your mobile device.
    	    	Discover new routines uploaded daily and customize your favorite trainers and work outs plans,
    	    	Our trainers will virtually track your progress and push you to your limits.
    		</Text>
    		</View>
    		<Text style={styles.underTagline}>Make Me an athlete.</Text>
    		<Button
    		  onPress={() => console.log("continue clicked will real functionality later")}
    		  style={styles.continueStyleButton}
    		  textStyle={styles.continueStyleText}
    		>
	    	  CONTINUE
	      </Button>
	      </Image>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  tagLine: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 19,
    fontSize: 12,
    textAlign: 'justify'
   },
    continueStyleButton: {
	  marginTop: 200,
	  backgroundColor: 'transparent',
	  width: 185,
	  alignSelf: 'center',
	  borderRadius: 23,
	  borderColor: '#e6e6e6',
	  borderWidth: .5
  },
   continueStyleText: {
  	color: '#e6e6e6',
  	fontFamily: 'Raleway',
  	fontSize: 14,
  	letterSpacing: 1.2
  },
  underTagline: {
  	color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 19,
    fontSize: 12
  }
});

export default About;
