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
import { useUser } from '../UserContext/UserProvider';
import { INotes } from '../../Types/Types';

const Notes = () => {
  const { user } = useUser();

  if (user === null) return null;

  const { name, avatarUrl, login } = user;

  const [note, setNote] = useState<string>('');

  const { loading, error, data } = useQuery(GetNotesQuery, {
    errorPolicy: 'all',
    variables: { username: login },
  });

  const [
    createNote,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CreateNoteMutation, {
    refetchQueries: () => [
      { query: GetNotesQuery, variables: { username: login } },
    ],
  });

  if (loading || mutationLoading) return <Text>'Loading...'</Text>;

  if (error || mutationError) return <Text>'Error!'</Text>;

  const { notes }: INotes = data;

  const handleSubmit = () => {
    createNote({ variables: { data: { content: note, username: login } } });
    setNote('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        ListHeaderComponent={
          <Badge avatarUrl={avatarUrl} name={name} login={login} />
        }
        ListEmptyComponent={
          <View>
            <View style={styles.rowContainer}>
              <Text>No notes here yet 😞</Text>
            </View>
          </View>
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
