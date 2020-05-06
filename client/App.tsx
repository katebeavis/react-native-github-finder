import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BASE_URL } from 'react-native-dotenv';

import Home from './App/Components/Home/Home';
import Overview from './App/Components/Overview/Overview';
import Profile from './App/Components/Profile/Profile';
import RepositoryOverview from './App/Components/RepositoryOverview/RepositoryOverview';
import Browser from './App/Components/Browser/Browser';
import Notes from './App/Components/Notes/Notes';

const client = new ApolloClient({
  uri: `http://${BASE_URL}:4444/graphql`,
});

const App = () => {
  const Stack = createStackNavigator();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name='Overview'
            component={Overview}
            options={{ title: 'Overview' }}
          />
          <Stack.Screen
            name='Profile'
            component={Profile}
            options={{ title: 'Profile' }}
          />
          <Stack.Screen
            name='RepositoryOverview'
            component={RepositoryOverview}
            options={{ title: 'Repositories' }}
          />
          <Stack.Screen
            name='Browser'
            component={Browser}
            options={({ route }: any) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name='Notes'
            component={Notes}
            options={{ title: 'Notes' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
