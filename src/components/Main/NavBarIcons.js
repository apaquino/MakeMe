import React from 'react-native';
import { Actions } from 'react-native-router-flux';

const
  { View
  , Image
  , StyleSheet
  , TouchableHighlight
  } = React;

export const renderTitle = () => {
  return (
    <View>
      <Image
        style={styles.title}
        source={require('../../img/logos/NavLogo.png')}
      />
    </View>
  )
}

export const renderTitleTryMe = () => {
  return (
    <View>
      <Image
        style={styles.title}
        source={require('../../img/logos/NavLogoTryMe.png')}
      />
    </View>
  )
}

export const renderTitleLikeMe = () => {
  return (
    <View>
      <Image
        style={styles.title}
        source={require('../../img/logos/like_me.png')}
      />
    </View>
  )
}

export const renderRightButtonGear = () => {
  return (
    <TouchableHighlight onPress={() => console.log("Right button Gear pressed")}>
      <Image
        style={styles.icon}
        source={require('../../img/logos/gear.png')}
      />
    </TouchableHighlight>
  )
}

export const renderLeftBackButton = () => {
  return (
    <TouchableHighlight onPress={() => Actions.pop()}>
      <Image
        style={styles.backButtonIcon}
        source={require('../../img/logos/back_button.png')}
      />
    </TouchableHighlight>
  )
}

export const renderLeftFilter = () => {
  return (
    <TouchableHighlight onPress={() => console.log("Filter icon placeholder")}>
      <Image
        style={styles.filterIcon}
        source={require('../../img/logos/custom_prev_filter.png')}
      />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create(
  { title:
      { width: 90
    	, height: 28
    	, alignItems: 'center'
    	, justifyContent: 'center'
    	, marginBottom: 5
      , marginTop: 5
  	  }
  , icon:
      { width: 21
  		, height: 21
  		, alignItems: 'center'
      , marginRight: 10
      , marginTop: 10
  	  }
  , backButtonIcon:
      { width: 13
      , height: 18
      , marginLeft: 10
      , marginTop: 13
      }
  , filterIcon:
      { marginLeft: 10
      , width: 20
      , height: 20
      , marginTop: 10
      }
  }
);
