import React, { Component } from 'react-native';

const {
	View,
	Image,
	StyleSheet
} = React;



class StartLogo extends Component {
	render(){
		return (
			<View>
				<Image
	        style={styles.icon}
	        source={require('image!start_logo')}
				/>
      </View>
		)
	}
};

const styles = StyleSheet.create({
	icon: {
		width: 110,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 130
	}
});

module.exports = StartLogo
