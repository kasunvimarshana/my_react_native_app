import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { Value, cond, eq } from 'react-native-reanimated';
import { mix, onGestureEvent, withTransition } from "react-native-redash";

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
    
    const state = new Value( State.UNDETERMINED );
    const gestureHandler = onGestureEvent({ state });
    const progress = withTransition();
    
    constructor(props){
        super(props);
        //this.state = {};
        //this.myFunction = this.myFunction.bind(this);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <TapGestureHandler {...gestureHandler}>
                    <Animated.View>
                        <MyButton/>
                    </Animated.View>
                </TapGestureHandler>
            </View>
        );
    }
}

export default AttendanceScreen;
