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

const state = new Value(State.UNDETERMINED);
const gestureHandler = onGestureEvent({ state });
const isActive = eq(state, State.BEGAN);
const duration = cond(isActive, 2000, 250);
const progress = withTransition(isActive, { duration });
const scale = mix(progress, 1, 1.2);

class AttendanceScreen extends Component{
    
    constructor(props){
        super(props);
        //this.state = {};
        //this.myFunction = this.myFunction.bind(this);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <TapGestureHandler {...gestureHandler}>
                    <Animated.View style={{ transform: [{ scale }] }}>
                        <MyButton {...{ progress }} />
                    </Animated.View>
                </TapGestureHandler>
            </View>
        );
    }
}

export default AttendanceScreen;
