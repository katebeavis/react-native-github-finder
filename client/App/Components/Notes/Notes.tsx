import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';

// import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
import styles from './Notes.styles';
import { GetNotesQuery } from '../../Queries/Queries';

const Notes = () => {
  const [note, setNote] = useState<string>('');

  const { loading, error, data } = useQuery(GetNotesQuery, {
    errorPolicy: 'all',
  });

  if (loading) return <Text>'Loading...'</Text>;

  if (error) return <Text>'Error!'</Text>;

  const { notes } = data;

  const handleSubmit = () => {
    console.log('object');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View>
            <View style={styles.rowContainer}>
              <Text>{item.content}</Text>
            </View>
            <Separator />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View>
        <View style={styles.footerContainer}>
          <TextInput
            style={styles.searchInput}
            value={note}
            onChangeText={(input) => setNote(input)}
            placeholder='New Note'
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => handleSubmit}
            underlayColor='#88D4F5'
          >
            <Text style={styles.buttonText}> Submit </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Notes;
