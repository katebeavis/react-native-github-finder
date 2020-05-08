import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
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

                <View style={styles.starsContainer}>
                  <View style={styles.stars}>
                    <Text>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: 8 }}
                      />
                      Star
                    </Text>
                  </View>
                  <View style={styles.starsCount}>
                    <Text>{repo.stargazers.totalCount || 0}</Text>
                  </View>
                </View>
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
