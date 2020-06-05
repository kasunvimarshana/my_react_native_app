import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class SplashScreen  extends Component{
    
    static navigationOptions = ({ navigation, screenProps }) => ({});
    
    constructor(props){
        super(props);
        //this.state = {};
        //this.myFunction = this.myFunction.bind(this);
    }
    
    render(){
        if (this.state.isLoading) {
            //return (<View style={styles.container}></View>);
        }
        
        return (
            <View style={styles.container}>
                <Text>SplashScreen</Text>
            </View>
        );
    }
}

export default SplashScreen;
