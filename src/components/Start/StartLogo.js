import React from 'react-native';

const
	{	View
	,	Image
	,	StyleSheet
	} = React;

const StartLogo = () => {
	return (
		<View>
			<Image
        style={styles.icon}
        source={require('../../img/logos/start_logo.png')}
			/>
    </View>
	)
};

const styles = StyleSheet.create(
	{ icon:
		{	width: 110
		, height: 28
		, alignItems: 'center'
		, justifyContent: 'center'
		, marginTop: 130
		}
	}
);

export default StartLogo;
