import React, { Component } from  'react-native';

const {
  Image,
  StyleSheet
} = React;

export class ProfileTabIcon extends Component {
  render(){
    const icon =  this.props.selected ?
                  require('../../img/tabIcons/profile_icon_b.png') :
                  require('../../img/tabIcons/profile_icon.png');
    return (
      <Image source={icon} style={styles.icon} />
    );
  }
}

export class FavoritesTabIcon extends Component {
  render(){
    const icon =  this.props.selected ?
                  require('../../img/tabIcons/favorites_icon_b.png') :
                  require('../../img/tabIcons/favorites_icon.png');
    return (
      <Image source={icon} style={styles.icon} />
    );
  }
}
export class GoTabIcon extends Component {
  render(){
    return (
      <Image
        source={require('../../img/tabIcons/go_icon.png')}
        style={{  height: 30,
                  width: 30,
                  backgroundColor: "#1c1c1c"
              }}
      />
    );
  }
}
export class PlaylistTabIcon extends Component {
  render(){
    const icon =  this.props.selected ?
                  require('../../img/tabIcons/playlist_icon_b.png') :
                  require('../../img/tabIcons/playlist_icon.png');
    return (
      <Image source={icon} style={styles.icon} />
    );
  }
}
export class SuggestedTabIcon extends Component {
  render(){
    const icon =  this.props.selected ?
                  require('../../img/tabIcons/suggested_icon_b.png') :
                  require('../../img/tabIcons/suggested_icon.png');
    return (
      <Image source={icon} style={styles.icon} />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 28,
    width: 28,
    backgroundColor: "#1c1c1c"
  }
});
