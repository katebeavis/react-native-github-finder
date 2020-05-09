import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
import Button from '../Button/Button';

import styles from './Notes.styles';
import sharedStyles from '../../Styles/shared';
import { GetNotesQuery } from '../../Queries/Queries';
import {
  CreateNoteMutation,
  DeleteNoteMutation,
} from '../../Mutations/Mutations';
import { useUser } from '../UserContext/UserProvider';
import { Colours } from '../../Styles/index';
import { ButtonType } from '../Button/Types';

const Notes = () => {
  const { user } = useUser();
  if (user === null) return null;
  const { name, avatarUrl, login } = user;
  const [note, setNote] = useState<string>('');

  const { error, data } = useQuery(GetNotesQuery, {
    errorPolicy: 'all',
    variables: { username: login },
  });

  const [createNote, { error: createMutationError }] = useMutation(
    CreateNoteMutation,
    {
      refetchQueries: () => [
        {
          query: GetNotesQuery,
          variables: { username: login },
        },
      ],
    }
  );

  const [deleteNote, { error: deleteMutationError }] = useMutation(
    DeleteNoteMutation,
    {
      refetchQueries: () => [
        {
          query: GetNotesQuery,
          variables: { username: login },
        },
      ],
    }
  );

  const handleSubmit = () => {
    createNote({
      variables: {
        data: { content: note, username: login },
      },
    });
    setNote('');
  };

  const handleDelete = (id: string) => {
    deleteNote({ variables: { id } });
  };

  const deleteAlert = (id: string) =>
    Alert.alert(
      'Delete note',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Delete', onPress: () => handleDelete(id) },
      ],
      { cancelable: false }
    );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={'padding'}
      enabled={true}
    >
      <View style={styles.container}>
        <FlatList
          data={data?.notes}
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
                <Text style={styles.rowText}>{item.content}</Text>
                <View style={styles.buttonContainer}>
                  <Button
                    type={ButtonType.EDIT}
                    action={() => deleteAlert(item.id)}
                  />
                  <Button
                    type={ButtonType.DELETE}
                    action={() => deleteAlert(item.id)}
                  />
                </View>
              </View>
              <Separator />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View>
          {(error || createMutationError || deleteMutationError) && (
            <View style={sharedStyles.errorContainer}>
              <Text style={sharedStyles.errorText}>Error!</Text>
            </View>
          )}
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
      <View
        style={{
          backgroundColor: Colours.blue,
          height: 80,
        }}
      ></View>
    </KeyboardAvoidingView>
  );
};

export default Notes;
