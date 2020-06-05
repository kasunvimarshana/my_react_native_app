import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainNavigation from './src/navigations/MainNavigation';

export default function ___Temp_App() {
  return (
    <View style={styles.container}>
      <MainNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
