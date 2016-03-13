import React from 'react-native';

const
  { View
  , Text
  , StyleSheet
  } = React;

const EmptyMessage = () => {
  return (
    <View style={styles.aboutText}>
      <Text style={styles.tagLine}>
        No workouts currently in playlist.
        Stop slacking and go find some sissy.
      </Text>
    </View>
  )
};

const styles = StyleSheet.create(
  { tagLine:
    { color: 'white'
    , letterSpacing: 1
    , fontFamily: 'Raleway'
    , marginTop: 110
    , fontSize: 12
    , textAlign: 'center'
    }
  , aboutText:
    { paddingLeft: 65
    , paddingRight: 65
    }
  }
)

export default EmptyMessage;
