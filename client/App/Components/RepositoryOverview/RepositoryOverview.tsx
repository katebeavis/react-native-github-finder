import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';

import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
import Stars from '../Stars/Stars';

import styles from '../RepositoryOverview/RepositoryOverview.styles';
import { useUser } from '../UserContext/UserProvider';
import { IRepo, NavigationProps } from '../../Types/Types';

const RepositoryOverview = ({ navigation }: NavigationProps) => {
  const { user } = useUser();
  if (user === null) return null;
  const { avatarUrl, name, login, repositories } = user;

  return (
    <ScrollView style={styles.container}>
      <Badge avatarUrl={avatarUrl} name={name} login={login} />
      {repositories.nodes.map((repo: IRepo, index: number) => (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate('Browser', {
                  uri: repo.url,
                  name: repo.name,
                })
              }
              underlayColor={'transparent'}
            >
              <View style={styles.repoContainer}>
                <Text style={styles.name}>{repo.name}</Text>
                <Stars starCount={repo.stargazers.totalCount || 0} />
              </View>
            </TouchableHighlight>
            {repo.description && (
              <Text style={styles.description}>{repo.description}</Text>
            )}
          </View>
          <Separator />
        </View>
      ))}
    </ScrollView>
  );
};

export default RepositoryOverview;
