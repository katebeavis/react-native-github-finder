import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import styles from './Home.styles';
import { Colours } from '../../Styles/index';
import { useUser } from '../UserContext/UserProvider';
import { NavigationProps } from '../../Types/Types';

const Home = ({ navigation }: NavigationProps) => {
  const [username, setUsername] = useState<string>('');

  const {
    user,
    getUser,
    userNotFound,
    setUserNotFound,
    loading,
    error,
  } = useUser();

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
      <ActivityIndicator
        animating={loading}
        color={Colours.black}
        size={'large'}
      />
    </View>
  );
};

export default Home;
