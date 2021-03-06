//import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { 
    createStackNavigator, 
    TransitionPresets, 
    CardStyleInterpolators,
    TransitionSpecs, 
    HeaderStyleInterpolators
} from '@react-navigation/stack';

import { DefaultScreen, WelcomeScreen, LoginScreen, AttendanceScreen, MapScreen } from '../screens';

const Stack = createStackNavigator();

const myTransitionSpecConfig = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01
    }
};

const myTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade
};

function MainNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {
                    ({ route, navigation }) => ({
                        gestureEnabled: false,
                        gestureDirection: 'horizontal',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#00ff00'
                        },
                        headerTitleStyle: { 
                            color: '#ff0000' 
                        },
                        headerTintColor: '#0000ff',
                        //transitionSpec: {
                        //    open: myTransitionSpecConfig,
                        //    close: myTransitionSpecConfig
                        //},
        
                        //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        
                        ...TransitionPresets.SlideFromRightIOS
                    })
                }
                mode = 'card'
                headerMode = 'float'
                initialRouteName = 'AttendanceScreen'
            >
                <Stack.Screen 
                    name = 'DefaultScreen' 
                    component = {DefaultScreen}
                    initialParams = {{}}
                    options={
                        ({ navigation, route }) => ({ 
                            title: route.params.name,
                            animationTypeForReplace: 'pop',
                            headerShown: false,
                            headerTransparent: true,
                            transitionSpec: {
                                open: myTransitionSpecConfig,
                                close: myTransitionSpecConfig
                            }
                        })
                    }
                />
                <Stack.Screen 
                    name = 'WelcomeScreen' 
                    component = {WelcomeScreen}
                    initialParams = {{}}
                    options = {
                        { 
                            title: 'WelcomeScreen', 
                            animationTypeForReplace: 'push',
                            headerShown: false,
                            headerTransparent: true,
                            ...myTransition
                        }
                    }
                />
                <Stack.Screen 
                    name = 'AttendanceScreen' 
                    component = {AttendanceScreen}
                    initialParams = {{}}
                    options = {
                        { 
                            title: 'AttendanceScreen', 
                            animationTypeForReplace: 'push',
                            headerShown: false,
                            headerTransparent: true,
                            ...myTransition
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;