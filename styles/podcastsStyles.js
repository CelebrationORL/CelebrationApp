import React, { Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

const PodcastsStyles = React.StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },

  webView: {
    height: height
  }

});

export default PodcastsStyles;
