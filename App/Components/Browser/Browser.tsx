import React from 'react';
import { View } from 'react-native';

import { WebView } from 'react-native-webview';

import styles from './Browser.styles';

const Browser = ({ route }: any) => {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{ uri }} />
    </View>
  );
};

export default Browser;
