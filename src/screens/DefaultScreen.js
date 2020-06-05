import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

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
                <Button
                    title="Click"
                    onPress={() =>
                        this.props.navigation.navigate('WelcomeScreen', {})
                    }
                />
            </View>
        );
    }
}

export default DefaultScreen;
