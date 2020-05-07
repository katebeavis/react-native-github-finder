import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import styles from './Home.styles';
import { useUser } from '../UserContext/UserProvider';

const Home = ({ navigation }: any) => {
  const [username, setUsername] = useState<string>('');
  const [userNotFound, setUserNotFound] = useState<boolean>(false);

  const { user, getUser, loading, error } = useUser();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUsername('');
      setUserNotFound(false);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (user) {
      setUserNotFound(false);
      navigation.navigate('Overview');
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      const notFoundError = error.graphQLErrors.filter((e: any) => {
        return e.type === 'NOT_FOUND';
      });

      if (notFoundError.length > 0) {
        setUserNotFound(true);
      }
    }
  }, [error]);

  const errorMessage = error && userNotFound ? 'User not found!' : 'Error';

  const handleSubmit = () => {
    getUser({ variables: { username: username.toLowerCase().trim() } });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Search for a Github user</Text>
      <TextInput
        style={styles.searchInput}
        value={username}
        onChangeText={(input) => setUsername(input)}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={handleSubmit}
        underlayColor={'white'}
        accessibilityLabel={'Submit'}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
      {error && (
        <View>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
      <ActivityIndicator animating={loading} color={'#111'} size={'large'} />
    </View>
  );
};

export default Home;
