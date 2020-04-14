import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

import styles from './Profile.styles';
import Badge from '../Badge/Badge';

const Profile = ({ route }: any) => {
  const { user } = route.params;
  const { location, email, followers, following, company, repositories } = user;
  return (
    <ScrollView style={styles.container}>
      <Badge avatarUrl={user.avatarUrl} name={user.name} login={user.login} />
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Location</Text>
        <Text style={styles.rowContent}>{location}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Email</Text>
        <Text style={styles.rowContent}>{email}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Followers</Text>
        <Text style={styles.rowContent}>{followers.totalCount}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Following</Text>
        <Text style={styles.rowContent}>{following.totalCount}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Location</Text>
        <Text style={styles.rowContent}>{location}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Company</Text>
        <Text style={styles.rowContent}>{company}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.rowTitle}>Repositories</Text>
        <Text style={styles.rowContent}>{repositories.totalCount}</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
