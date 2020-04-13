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

const Home = () => {
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<any>(null);

  const [getSomething, { loading, error, data }] = useLazyQuery(UserQuery);

  useEffect(() => {
    if (data && data.user) {
      setUserData(data.user);
    }
  }, [data]);

  if (loading) return <Text>Loading....</Text>;
  if (error) return <Text style={styles.errorText}>Error!</Text>;

  const handleSubmit = () => {
    getSomething({ variables: { username } });
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
          {userData && <Text>{userData.name}</Text>}
        </>
      )}
    </View>
  );
};

export default Home;
