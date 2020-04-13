import React from 'react';
import { Text } from 'react-native';

const Overview = ({ route }: any) => {
  const { userData } = route.params;
  console.log(userData);
  return <Text>This is the overview</Text>;
};

export default Overview;
