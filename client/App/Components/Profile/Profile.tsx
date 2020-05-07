import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './Profile.styles';
import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
import { useUser } from '../UserContext/UserProvider';

const Profile = () => {
  const { user } = useUser();

  if (user === null) return null;

  const { location, email, followers, following, company, repositories } = user;
  return (
    <ScrollView style={styles.container}>
      <Badge avatarUrl={user.avatarUrl} name={user.name} login={user.login} />
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Location</Text>
        <Text style={styles.rowContent}>{location}</Text>
      </View>
      <Separator />
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Email</Text>
        <Text style={styles.rowContent}>{email}</Text>
      </View>
      <Separator />
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Followers</Text>
        <Text style={styles.rowContent}>{followers.totalCount}</Text>
      </View>
      <Separator />
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Following</Text>
        <Text style={styles.rowContent}>{following.totalCount}</Text>
      </View>
      <Separator />
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Location</Text>
        <Text style={styles.rowContent}>{location}</Text>
      </View>
      <Separator />
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Company</Text>
        <Text style={styles.rowContent}>{company}</Text>
      </View>
      <Separator />
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Repositories</Text>
        <Text style={styles.rowContent}>{repositories.totalCount}</Text>
      </View>
      <Separator />
    </ScrollView>
  );
};

export default Profile;
