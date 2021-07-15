import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface UiHeadingProps {
  text: string;
}

export const UiHeading = (props: UiHeadingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 40, backgroundColor: '#456990', padding: 5 },
  text: { fontSize: 24, fontWeight: '500', color: 'white', textAlign: 'center' },
});

export default UiHeading;