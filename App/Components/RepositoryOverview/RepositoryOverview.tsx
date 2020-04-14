import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';

import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
import styles from '../RepositoryOverview/RepositoryOverview.styles';

const RepositoryOverview = ({ route }: any) => {
  const { user } = route.params;
  const { repositories } = user;

  return (
    <ScrollView style={styles.container}>
      <Badge avatarUrl={user.avatarUrl} name={user.name} login={user.login} />
      {repositories.nodes.map((repo: any, index: number) => (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={() => alert('hi')}
              underlayColor={'transparent'}
            >
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            {repo.description && (
              <Text style={styles.description}>{repo.description}</Text>
            )}
            <Text style={styles.stars}>
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
