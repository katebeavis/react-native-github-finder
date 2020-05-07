import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';

import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
import styles from '../RepositoryOverview/RepositoryOverview.styles';
import { useUser } from '../UserContext/UserProvider';

const RepositoryOverview = ({ navigation }: any) => {
  const { user } = useUser();
  const { repositories } = user;

  return (
    <ScrollView style={styles.container}>
      <Badge avatarUrl={user.avatarUrl} name={user.name} login={user.login} />
      {repositories.nodes.map((repo: any, index: number) => (
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
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            {repo.description && (
              <Text style={styles.description}>{repo.description}</Text>
            )}
            <Text style={styles.stars}>
              url: {repo.url}
              Stars: {repo.stargazers.totalCount || 0}
            </Text>
          </View>
          <Separator />
        </View>
      ))}
    </ScrollView>
  );
};

export default RepositoryOverview;
