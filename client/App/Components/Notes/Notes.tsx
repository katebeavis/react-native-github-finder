import React, { useState } from 'react';
import {
  Text,
  View,
  // ListView,
  // TouchableHighlight,
  // TextInput,
  // StyleSheet,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';

// import Badge from '../Badge/Badge';
// import Separator from '../Helpers/Separator';
import styles from './Notes.styles';
import { GetNotesQuery } from '../../Queries/Queries';

const Notes = () => {
  const [state, setState] = useState();

  console.log({ state, setState });

  const { loading, error, data } = useQuery(GetNotesQuery, {
    errorPolicy: 'all',
  });

  console.log({ loading, error, data });

  return (
    <View style={styles.container}>
      <Text>Search for a Github user</Text>
    </View>
  );
};

export default Notes;
