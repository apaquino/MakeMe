import React from 'react-native';

const {
  View,
  Image,
  StyleSheet
} = React;

export const renderTitle = () => {
  return (
    <View>
      <Image
        style={styles.icon}
        source={require('../../img/logos/NavLogo.png')}
      />
    </View>
  )
}

export const renderTitleTryMe = () => {
  return (
    <View>
      <Image
        style={styles.icon}
        source={require('../../img/logos/NavLogoTryMe.png')}
      />
    </View>
  )
}

export const renderTitleLikeMe = () => {
  return (
    <View>
      <Image
        style={styles.icon}
        source={require('../../img/logos/like_me.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
	icon: {
		width: 90,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 5
	},
  filter: {
		width: 21,
		height: 21,
		alignItems: 'flex-start',
		marginTop: 31,
		marginLeft: 15
	}
});
