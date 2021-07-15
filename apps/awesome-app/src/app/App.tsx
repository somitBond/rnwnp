import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Button, BottomNavigation, Text } from 'react-native-paper';
import { UiHeading } from '@acme/ui-heading';
import { FeaturesScreensMusic } from '@acme/features/screens/music'
import { FeaturesScreensAlbum } from '@acme/features/screens/album'
import { FeaturesScreensRecent } from '@acme/features/screens/recent'

import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome"
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};


const App = () => {

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#456990" translucent = {true}/>
      <SafeAreaView style={styles.box}>
        <UiHeading text="Ui Header"/>
      </SafeAreaView>
      
      <NavigationContainer>  
        <Tab.Navigator
          initialRouteName="Music"
          activeColor="#FFFFFF"
          inactiveColor="#114B5F"
          barStyle={{ paddingBottom: 0, backgroundColor: "#456990" }}
        >
          <Tab.Screen name="Music" component={FeaturesScreensMusic} options={{
            tabBarLabel: 'Music',
            tabBarIcon: ({ color }) => (
              <Icon name="music" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Album" component={FeaturesScreensAlbum} options={{
            tabBarLabel: 'Album',
            tabBarIcon: ({ color }) => (
              <Icon name="folder" color={color} size={26} />
            ),
          }} />
          <Tab.Screen name="Recent" component={FeaturesScreensRecent} options={{
            tabBarLabel: 'Recent',
            tabBarIcon: ({ color }) => (
              <Icon name="history" color={color} size={26} />
            ),
          }} />
        </Tab.Navigator>
      </NavigationContainer>

    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  box: { marginTop: 24 },
  text: { fontSize: 18 },
});

export default App;