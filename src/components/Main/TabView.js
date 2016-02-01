'use strict';

var React = require('react-native');
var {View, Text, StyleSheet} = React;
var Button = require('apsl-react-native-button');
var Actions = require('react-native-router-flux').Actions;


class TabView extends React.Component {
    render(){
      return (
          <View style={styles.container}>
            <Text>Tab {this.props.title}</Text>
            <Button onPress={Actions.tab1}>Switch to tab1</Button>
            <Button onPress={Actions.tab2}>Switch to tab2</Button>
            <Button onPress={Actions.tab3}>Switch to tab3</Button>
            <Button onPress={Actions.tab4}>Switch to tab4</Button>
            <Button onPress={Actions.tab5}>Switch to tab5</Button>
            <Button onPress={Actions.launch}>Logout</Button>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default TabView;
