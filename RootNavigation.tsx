import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Example1 } from './src/example1/screens';
import { Example2 } from './src/example2/screens';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
            >
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