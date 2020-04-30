import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './Badge.styles';

interface IBadge {
  avatarUrl: string;
  name: string;
  login: string;
}

const Badge = ({ avatarUrl, name, login }: IBadge) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.handle}>{login}</Text>
    </View>
  );
};

export default Badge;
