import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import styles from './Overview.styles';

const Overview = ({ route }: any) => {
  const { userData } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: userData.avatarUrl }} style={styles.image} />
      <TouchableHighlight
        onPress={() => alert('this button was pressed')}
        underlayColor={'#88D4F5'}
      >
        <Text style={styles.buttonText}>View profile</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => alert('this button was pressed')}
        underlayColor={'#88D4F5'}
      >
        <Text style={styles.buttonText}>Go to repos</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => alert('this button was pressed')}
        underlayColor={'#88D4F5'}
      >
        <Text style={styles.buttonText}>Go to notes</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Overview;
