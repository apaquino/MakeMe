import React from 'react-native';

const {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
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

const styles = StyleSheet.create({
	title: {
		width: 90,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 5
	},
  icon: {
		width: 21,
		height: 21,
		alignItems: 'center',
    marginRight: 10,
    marginTop: 10
	}
});
