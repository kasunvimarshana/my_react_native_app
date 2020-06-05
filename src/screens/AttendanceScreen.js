import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8edff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class AttendanceScreen extends Component{
    constructor(props){
        super(props);
        //this.state = {};
        //this.myFunction = this.myFunction.bind(this);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <MyButton/>
            </View>
        );
    }
}

export default AttendanceScreen;
