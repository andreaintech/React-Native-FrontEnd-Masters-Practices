import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Exercise1 } from '../exercise1/screens';
import { Exercise2 } from '../exercise2/screens';
import { Home, ColorPalette, } from '../exercise3/screens';
import { HomeScreen, ColorPaletteScreen } from '../exercise4/screens';
import { UseStateHook } from '../exercise5/screens';
import { UseCallbackHook } from '../exercise6/screens';
import { UseEffectHook } from '../exercise7/screens';
import { NetworkExercise } from '../exercise8/screens';
import { RefreshControlExercise } from '../exercise9/screens';
import { TextInputsExample } from '../exercise10/textInputExample/screens';
import { PickerExample } from '../exercise10/pickerExample/screens';
import { SwitchExample } from '../exercise10/switchExample/screens';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SwitchExample"
                    component={SwitchExample}
                    options={{
                        title: 'Switch Example',
                    }}
                />
                <Stack.Screen
                    name="PickerExample"
                    component={PickerExample}
                    options={{
                        title: 'Picker Example',
                    }}
                />
                <Stack.Screen
                    name="TextInputsExample"
                    component={TextInputsExample}
                    options={{
                        title: 'Texts Inputs Example',
                    }}
                />
                <Stack.Screen
                    name="RefreshControlExercise"
                    component={RefreshControlExercise}
                    options={{
                        title: 'Colors Palette - Refresh Control Exercise',
                    }}
                />
                <Stack.Screen
                    name="NetworkExercise"
                    component={NetworkExercise}
                    options={{
                        title: 'Colors Palette - Network Exercise',
                    }}
                />
                <Stack.Screen
                    name="UseEffectHook"
                    component={UseEffectHook}
                    options={{
                        title: 'Example of useEffect hook',
                    }}
                />
                <Stack.Screen
                    name="UseCallbackHook"
                    component={UseCallbackHook}
                    options={{
                        title: 'Example of useCallback hook',
                    }}
                />
                <Stack.Screen
                    name="UseStateHook"
                    component={UseStateHook}
                    options={{
                        title: 'Example of useState hook',
                    }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: 'Color Palettes',
                    }}
                />
                <Stack.Screen
                    name="ColorPaletteScreen"
                    component={ColorPaletteScreen}
                    // @ts-ignore
                    options={({ route }) => ({ title: route?.params?.paletteName })}
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
                    name="Exercise2"
                    component={Exercise2}
                />
                <Stack.Screen
                    name="Exercise1"
                    component={Exercise1}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;