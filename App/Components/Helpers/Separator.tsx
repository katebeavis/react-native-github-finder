import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colours } from '../../Styles';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    backgroundColor: Colours.grey,
    height: 1,
    marginLeft: 15,
  },
});

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;
