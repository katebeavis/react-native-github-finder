import React from 'react';
import { View, Text } from 'react-native';

import styles from './Overview.styles';

const Overview = ({ route }: any) => {
  const { userData } = route.params;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(userData)}</Text>
    </View>
  );
};

export default Overview;
