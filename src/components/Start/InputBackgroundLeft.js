import React from 'react-native';

const {
	View,
	Image,
	StyleSheet
} = React;

const InputBackgroundLeft = (props) => {
	return (
		<View>
			<Image
        style={styles.icon}
        source={require('../../img/backgrounds/inputBackgroundLeft.png')}
      >
        {props.children}
      </Image>
    </View>
	)
};

const styles = StyleSheet.create({
	icon: {
		width: 375,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 12
	}
});

export default InputBackgroundLeft;
