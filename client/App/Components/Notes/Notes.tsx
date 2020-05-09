import React, { useEffect, useState } from 'react';
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
  UpdateNoteMutation,
} from '../../Mutations/Mutations';
import { useUser } from '../UserContext/UserProvider';
import { Colours } from '../../Styles/index';
import { ActionType } from '../../Types/Types';

const Notes = () => {
  const { user } = useUser();
  if (user === null) return null;
  const { name, avatarUrl, login } = user;
  const [note, setNote] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [action, setAction] = useState<ActionType>(ActionType.CREATE);

  const { error, data } = useQuery(GetNotesQuery, {
    errorPolicy: 'all',
    variables: { username: login },
  });

  const [
    createNoteMutation,
    { loading: createNoteLoading, error: createMutationError },
  ] = useMutation(CreateNoteMutation, {
    refetchQueries: () => [
      {
        query: GetNotesQuery,
        variables: { username: login },
      },
    ],
  });

  const [
    deleteNoteMutation,
    { loading: deleteNoteLoading, error: deleteMutationError },
  ] = useMutation(DeleteNoteMutation, {
    refetchQueries: () => [
      {
        query: GetNotesQuery,
        variables: { username: login },
      },
    ],
  });

  const [
    updateNoteMutation,
    { loading: updateNoteLoading, error: updateMutationError },
  ] = useMutation(UpdateNoteMutation, {
    refetchQueries: () => [
      {
        query: GetNotesQuery,
        variables: { username: login },
      },
    ],
  });

  useEffect(() => {
    resetNote();
  }, [createNoteLoading, deleteNoteLoading, updateNoteLoading]);

  const handleSubmit = () =>
    action === ActionType.CREATE ? createNote() : updateNote();

  const createNote = () =>
    createNoteMutation({
      variables: {
        data: { content: note, username: login },
      },
    });

  const updateNote = () =>
    updateNoteMutation({ variables: { data: { content: note }, id } });

  const resetNote = () => {
    setNote('');
    setAction(ActionType.CREATE);
    setId('');
  };

  const handleDelete = (id: string) =>
    deleteNoteMutation({ variables: { id } });

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

  const handleUpdate = (id: string, content: string) => {
    setNote(content);
    setId(id);
    setAction(ActionType.UPDATE);
  };

  const buttonText = () => (action === ActionType.CREATE ? 'Create' : 'Update');

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
                    type={ActionType.UPDATE}
                    action={() => handleUpdate(item.id, item.content)}
                  />
                  <Button
                    type={ActionType.DELETE}
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
          {(error ||
            createMutationError ||
            deleteMutationError ||
            updateMutationError) && (
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
              disabled={note.length === 0}
              underlayColor={Colours.paleBlue}
              accessibilityLabel={buttonText()}
            >
              <Text style={styles.buttonText}>{buttonText()}</Text>
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
