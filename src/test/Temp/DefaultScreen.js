import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Component } from 'react';

class DefaultScreen extends Component{
    constructor(props){
        super(props);
        //this.state = {};
        //this.myFunction = this.myFunction.bind(this);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Text>DefaultScreen</Text>
            </View>
        );
    }
}

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
