import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';

import styles from './Home.styles';
import { UserQuery } from '../../Queries/Queries';

const Home = ({ navigation }: any) => {
  const [username, setUsername] = useState<string>('');
  const [userNotFound, setUserNotFound] = useState<boolean>(false);

  const [getSomething, { loading, error, data }] = useLazyQuery(UserQuery, {
    errorPolicy: 'all',
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUsername('');
      setUserNotFound(false);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (data && data.user) {
      setUserNotFound(false);
      navigation.navigate('Overview', { userData: data.user });
    }
  }, [data]);

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

  if (loading) return <Text>Loading....</Text>;
  if (error && !userNotFound)
    return <Text style={styles.errorText}>Error!</Text>;

  const handleSubmit = () => {
    getSomething({ variables: { username: username.toLowerCase().trim() } });
  };

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
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
          {userNotFound && (
            <Text style={styles.errorText}>User not found!</Text>
          )}
        </>
      )}
    </View>
  );
};

export default Home;
