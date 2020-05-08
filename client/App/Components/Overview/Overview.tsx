import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import styles from './Overview.styles';
import { useUser } from '../UserContext/UserProvider';
import { NavigationProps } from '../../Types/Types';

const Overview = ({ navigation }: NavigationProps) => {
  const { user } = useUser();

  if (user === null) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatarUrl }} style={styles.image} />
      <TouchableHighlight
        onPress={() => navigation.navigate('Profile')}
        underlayColor={'#88D4F5'}
        style={styles.blueButton}
      >
        <Text style={styles.buttonText}>View profile</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('RepositoryOverview')}
        underlayColor={'#88D4F5'}
        style={styles.pinkButton}
      >
        <Text style={styles.buttonText}>View repositories</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Notes')}
        underlayColor={'#88D4F5'}
        style={styles.purpleButton}
      >
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Overview;
