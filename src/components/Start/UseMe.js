import React, { Component } from 'react-native';

const {
	View,
	Image,
	StyleSheet
} = React;

class UseMe extends Component {
	render(){
		return (
			<View>
				<Image
	        style={styles.icon}
	        source={require('image!useMe')}
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
		marginTop: 195
	}
});

export default UseMe;
