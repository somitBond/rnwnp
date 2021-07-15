import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { UiHeading } from '@acme/ui-heading';

export function App() {
  return (
    <PaperProvider>
      <React.Fragment>
        {Platform.OS === 'web' ? (
          <style type="text/css">{`
            @font-face {
              font-family: 'MaterialCommunityIcons';
              src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
            }
          `}</style>
        ) : null}
          <View style={styles.box}>
            <UiHeading text="Hey! React Native Web." />
            <Text style={styles.text}>This is a demo page.</Text>
          </View>
        </React.Fragment>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
});

export default App;