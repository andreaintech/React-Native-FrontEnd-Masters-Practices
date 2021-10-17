import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Example1 } from '../example1/screens';
import { Example2 } from '../example2/screens';
import { Home, ColorPalette, } from '../example3/screens';
import { HomeScreen, ColorPaletteScreen } from '../example4/screens';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // headerShown: false,
                    // headerBackTitleVisible: false,
                }}
            >
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="ColorPaletteScreen"
                    component={ColorPaletteScreen}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="ColorPalette"
                    component={ColorPalette}
                />
                <Stack.Screen
                    name="Example2"
                    component={Example2}
                />
                <Stack.Screen
                    name="Example1"
                    component={Example1}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;