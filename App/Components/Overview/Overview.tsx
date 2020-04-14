import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import styles from './Overview.styles';
import Badge from '../Badge/Badge';

const Overview = ({ route }: any) => {
  const { userData } = route.params;
  return (
    <View style={styles.container}>
      <Badge
        avatarUrl={userData.avatarUrl}
        name={userData.name}
        login={userData.login}
      />
      <TouchableHighlight
        onPress={() => alert('this button was pressed')}
        underlayColor={'#88D4F5'}
        style={styles.blueButton}
      >
        <Text style={styles.buttonText}>View profile</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => alert('this button was pressed')}
        underlayColor={'#88D4F5'}
        style={styles.pinkButton}
      >
        <Text style={styles.buttonText}>View repos</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => alert('this button was pressed')}
        underlayColor={'#88D4F5'}
        style={styles.purpleButton}
      >
        <Text style={styles.buttonText}>Add notes</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Overview;
