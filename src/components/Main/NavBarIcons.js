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

const styles = StyleSheet.create({
	icon: {
		width: 90,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 5
	}
});
