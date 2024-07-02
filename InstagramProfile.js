import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const InstagramProfile = () => {
  const posts = [
    
  ];

  const renderPost = ({ item }) => (
    <Image source={{ uri: item }} style={styles.postImage} />
  );

  const renderHeader = () => (
    <>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>123</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>456</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>789</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio */}
      <View style={styles.bio}>
        <Text style={styles.username}>Username</Text>
        <Text>Biography text goes here. This is where the user can write a short description about themselves.</Text>
      </View>
    </>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.postsGrid}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  bio: {
    padding: 20,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postsGrid: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  postImage: {
    width: '33%',
    height: 150,
  },
});

export default InstagramProfile;
