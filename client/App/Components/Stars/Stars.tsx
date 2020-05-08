import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './Stars.styles';

interface IStar {
  starCount: number;
}

const Stars = ({ starCount }: IStar) => {
  return (
    <View style={styles.starsContainer}>
      <View style={styles.stars}>
        <Text>
          <FontAwesomeIcon icon={faStar} style={{ marginRight: 8 }} />
          Star
        </Text>
      </View>
      <View style={styles.starsCount}>
        <Text>{starCount}</Text>
      </View>
    </View>
  );
};

export default Stars;
