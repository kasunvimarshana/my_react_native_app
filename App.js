//import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

//import { DefaultScreen, WelcomeScreen, LoginScreen, AttendanceScreen, MapScreen } from './src/screens';
import MainNavigation from './src/navigations/MainNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function App() {
  return (
      <MainNavigation />
  );
}
      
//console.disableYellowBox = true;
