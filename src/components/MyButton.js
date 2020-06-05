import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const SIZE = 150;

const styles = StyleSheet.create({
    container: {
        width: SIZE,
        height: SIZE,
        borderRadius: (SIZE / 2),
        backgroundColor: '#fff'
    }
});

class MyButton extends Component{
    constructor(props){
        super(props);
        //this.state = {};
        //this.myFunction = this.myFunction.bind(this);
    }
    
    render(){
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

export default MyButton;
