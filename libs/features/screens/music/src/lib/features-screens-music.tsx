import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface FeaturesScreensMusicProps {}

export function FeaturesScreensMusic(props: FeaturesScreensMusicProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to features-screens-music!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 10, backgroundColor: '#eee', height: "100%" },
  text: { fontSize: 24, fontWeight: '500', color: 'blue' },
});

export default FeaturesScreensMusic;
