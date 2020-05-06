import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
import styles from './Notes.styles';
import { GetNotesQuery } from '../../Queries/Queries';
import { CreateNoteMutation } from '../../Mutations/Mutations';

const Notes = () => {
  const [note, setNote] = useState<string>('');

  const { loading, error, data } = useQuery(GetNotesQuery, {
    errorPolicy: 'all',
  });

  const [
    createNote,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CreateNoteMutation, {
    refetchQueries: () => [{ query: GetNotesQuery }],
  });

  console.log({ mutationLoading, mutationError });

  if (loading || mutationLoading) return <Text>'Loading...'</Text>;

  if (error || mutationError) return <Text>'Error!'</Text>;

  const { notes } = data;

  const handleSubmit = () => {
    createNote({ variables: { data: { content: note } } });
    setNote('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        ListHeaderComponent={
          <Badge
            avatarUrl={
              'https://avatars1.githubusercontent.com/u/10133018?u=0e485d954288b95774808ddb1651849e24b5a3ab&v=4'
            }
            name={'name'}
            login={'login'}
          />
        }
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
            onPress={handleSubmit}
            underlayColor='#88D4F5'
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Notes;
