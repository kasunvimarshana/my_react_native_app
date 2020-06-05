//import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
