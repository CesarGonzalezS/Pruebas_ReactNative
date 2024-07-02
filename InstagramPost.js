import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const InstagramPost = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Fpez-dibujos-animados&psig=AOvVaw0BZhUxzn6X7sX7UctlwTbX&ust=1719438490793000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjNo9Xd94YDFQAAAAAdAAAAABAE' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Username</Text>
      </View>

      {/* Post Image */}
      <Image
        source={{ url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fishipedia.es%2Fpez%2Fcarassius-auratus&psig=AOvVaw0BZhUxzn6X7sX7UctlwTbX&ust=1719438490793000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjNo9Xd94YDFQAAAAAdAAAAABAI' }}
        style={styles.postImage}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.icons}>
          <Icon name="heart-o" type="font-awesome" size={25} style={styles.icon} />
          <Icon name="comment-o" type="font-awesome" size={25} style={styles.icon} />
          <Icon name="paper-plane-o" type="font-awesome" size={25} style={styles.icon} />
        </View>
        <Text style={styles.likes}>100 likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>Username </Text>
          Here is the caption of the post.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  footer: {
    padding: 10,
  },
  icons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    marginRight: 15,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    lineHeight: 18,
  },
});

export default InstagramPost;
