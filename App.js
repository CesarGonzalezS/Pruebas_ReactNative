import React from 'react';
import { StyleSheet, View } from 'react-native';
import InstagramProfile from './InstagramProfile';

export default function App() {
  return (
    <View style={styles.container}>
      <InstagramProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
