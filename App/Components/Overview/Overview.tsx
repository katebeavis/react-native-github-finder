import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './Overview.styles';
import Badge from '../Badge/Badge';

const Overview = ({ navigation, route }: any) => {
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Badge avatarUrl={user.avatarUrl} name={user.name} login={user.login} />
      <TouchableHighlight
        onPress={() => navigation.navigate('Profile', { user })}
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
