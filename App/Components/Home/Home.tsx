import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import styles from './Home.styles';

const Home = () => {
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    alert(username);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
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
        </>
      )}
    </View>
  );
};

export default Home;
