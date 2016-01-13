import React, { Component } from 'react-native';

const {
	View,
	Image,
	StyleSheet
} = React;

class InputBackground extends Component {
	render(){
		return (
			<View>
				<Image
	        style={styles.icon}
          source={require('image!inputBackground')}
        >
	        {this.props.children}
	      </Image>
      </View>
		)
	}
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

export default InputBackground;
