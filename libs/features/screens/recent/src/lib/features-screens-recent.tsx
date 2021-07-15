import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface FeaturesScreensRecentProps {}

export function FeaturesScreensRecent(props: FeaturesScreensRecentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to features-screens-recent!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 10, backgroundColor: '#ffffff', height: "100%" },
  text: { fontSize: 24, fontWeight: '500', color: 'blue' },
});

export default FeaturesScreensRecent;
