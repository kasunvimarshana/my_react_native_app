import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, Platform, SafeAreaView } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import moment from 'moment';
import { MapView } from 'expo';
import MapView, { Marker } from 'react-native-maps';

class AttendanceScreen extends Component{
    //
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AttendanceScreen;