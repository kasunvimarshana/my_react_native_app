import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Component } from 'react';
import { useKeepAwake, activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import { Dimensions, Alert, Platform, SafeAreaView } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import moment from 'moment';

class MapScreen extends Component{
    
    constructor(props){
        super(props);
        //this.state = {};
        //this.myFunction = this.myFunction.bind(this);
        
        this.state = {
            location: {
                latitude: LATITUDE,
                longitude: LONGITUDE
            },
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            })
        };
    }
    
    /*
    getCurrentPosition = () => {
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                
                this.setState({
                    location: {latitude, longitude}
                });
            },
            error => console.log(error),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 30,
            }
        );
        //navigator.geolocation.clearWatch(this.watchID);
    };
    */
    
    /*
    getCurrentPosition = () => {
        navigator.getlocation.getCurrentPosition(
            position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);

                this.setState({
                    location: {latitude, longitude}
                });
            },
            { 
                enableHighAccuracy: true, 
                timeout: 20000, 
                maximumAge: 1000
            }
        );
    };
    */
    
    getCurrentPositionAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if( status != 'granted' ){
            this.setState({
                errorMessage: "Permission Not Granted"
            });
        }
        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest});
        const {latitude, longitude} = location.coords;
        this.getGeocodeAsync({ latitude, longitude });
        this.setState({ 
            location: {latitude, longitude}
        });
    };

    getGeocodeAsync = async (location) => {
        let geocode = Location.reverseGeocodeAsync(location);
        this.setState({geocode});
    };

    getMapRegion = () => ({
        latitude: this.state.location.latitude,
        longitude: this.state.location.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    goToInitialRegion = async () => {
        await this.getCurrentPositionAsync();
        const duration = 2000;
        const map_duration = 2000;
        const marker_duration = 500;
        
        const mapView = this.mapView;
        //const initialRegion = Object.assign({}, this.getMapRegion());
        const initialRegion = this.getMapRegion();
        
        if( mapView ){
            mapView.animateToRegion(initialRegion, map_duration);
        }
        
        const marker = this.marker;

        let newCoordinate = { 
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude
        };
        
        if (Platform.OS === 'android') {
            if ( marker ) {
                //marker._component.animateMarkerToCoordinate(newCoordinate, marker_duration); //duration to animate the marker
            }
        } else {
            //this.state.coordinate.timing(newCoordinate).start();
        }
        this.state.coordinate.timing({...newCoordinate, marker_duration}).start();
    };

    async onPressSubmitButton(){
        await this.getCurrentPositionAsync();
        await this.goToInitialRegion();
        
        //var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a');
        var date = moment().format('YYYY-MM-DD hh:mm:ss');
        
        Alert.alert(
            '[lat: '
            +this.state.location.latitude
            +', lon: '
            +this.state.location.longitude+'] '
            +' ['+date+']'
        );
    }
    
    /*
    componentWillMount(){
        this.getCurrentPositionAsync();
    };
    */

    componentDidMount(){
        this.getCurrentPositionAsync();
    }

    /*
    componentWillUnmount() {
        //navigator.geolocation.clearWatch(this.watchID);
    }
    */

    componentDidUpdate(prevProps, prevState, snapshot){
        //
    }
    
    render(){
        return (
            <View style={styles.container}>

                <MapView
                    style={styles.map}
                    showUserLocation={true}
                    followUserLocation={true}
                    loadingEnabled={true}
                    zoomEnabled={true}
                    cacheEnabled={true}
                    showsCompass={true}
                    zoomControlEnabled={true}
                    rotateEnabled={true}
                    scrollEnabled={true}
                    pitchEnabled={false}
                    loadingEnabled={true}
                    moveOnMarkerPress={false}
                    provider={null}
                    mapType={"none"}
                    region={this.getMapRegion()}
                    ref={
                        mapView => {this.mapView = mapView;}
                    }
                    onMapReady={this.goToInitialRegion.bind(this)}
                    initialRegion={this.getMapRegion()}
                >
                    
                    <Marker.Animated
                        ref={
                            marker => {this.marker = marker;}
                        }
                        coordinate={this.state.coordinate}
                        title={"location"}
                        description={"my location"}
                    />
                    
                </MapView>
                
                <View style={styles.button}>
                    <Button title="Note Me" type="outline" onPress={this.onPressSubmitButton.bind(this)}/>
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    map: {
        width: '100%',
        height: 250
    },
    button: {
        margin: 8
    }
});

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = (width / height);
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = (LATITUDE_DELTA * ASPECT_RATIO);

export default MapScreen;