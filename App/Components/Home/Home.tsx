import React from 'react';
import { Text, View } from 'react-native';

import styles from './Home.styles';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Hello world</Text>
    </View>
  );
};

export default Home;
