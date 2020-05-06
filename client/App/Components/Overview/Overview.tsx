import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import styles from './Overview.styles';

const Overview = ({ navigation, route }: any) => {
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatarUrl }} style={styles.image} />
      <TouchableHighlight
        onPress={() => navigation.navigate('Profile', { user })}
        underlayColor={'#88D4F5'}
        style={styles.blueButton}
      >
        <Text style={styles.buttonText}>View profile</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('RepositoryOverview', { user })}
        underlayColor={'#88D4F5'}
        style={styles.pinkButton}
      >
        <Text style={styles.buttonText}>View repositories</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Notes', { user })}
        underlayColor={'#88D4F5'}
        style={styles.purpleButton}
      >
        <Text style={styles.buttonText}>Add notes</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Overview;
