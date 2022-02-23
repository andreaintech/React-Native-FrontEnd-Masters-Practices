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
import { ModalExercise, AddNewPaletteModal } from '../exercise11/screens';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      {/* <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      /> */}
      <MainStack.Screen
        name="ModalExercise"
        component={ModalExercise}
        options={{
            title: 'Colors Palette - Modal Exercise',
        }}
    />
    <MainStack.Screen
        name="SwitchExample"
        component={SwitchExample}
        options={{
            title: 'Switch Example',
        }}
    />
    <MainStack.Screen
        name="PickerExample"
        component={PickerExample}
        options={{
            title: 'Picker Example',
        }}
    />
    <MainStack.Screen
        name="TextInputsExample"
        component={TextInputsExample}
        options={{
            title: 'Texts Inputs Example',
        }}
    />
    <MainStack.Screen
        name="RefreshControlExercise"
        component={RefreshControlExercise}
        options={{
            title: 'Colors Palette - Refresh Control Exercise',
        }}
    />
    <MainStack.Screen
        name="NetworkExercise"
        component={NetworkExercise}
        options={{
            title: 'Colors Palette - Network Exercise',
        }}
    />
    <MainStack.Screen
        name="UseEffectHook"
        component={UseEffectHook}
        options={{
            title: 'Example of useEffect hook',
        }}
    />
    <MainStack.Screen
        name="UseCallbackHook"
        component={UseCallbackHook}
        options={{
            title: 'Example of useCallback hook',
        }}
    />
    <MainStack.Screen
        name="UseStateHook"
        component={UseStateHook}
        options={{
            title: 'Example of useState hook',
        }}
    />
    <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
            title: 'Color Palettes',
        }}
    />
    <MainStack.Screen
        name="ColorPaletteScreen"
        component={ColorPaletteScreen}
        // @ts-ignore
        options={({ route }) => ({ title: route?.params?.paletteName })}
    />
    <MainStack.Screen
        name="Home"
        component={Home}
    />
    <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
    />
    <MainStack.Screen
        name="Exercise2"
        component={Exercise2}
    />
    <MainStack.Screen
        name="Exercise1"
        component={Exercise1}
    />
    </MainStack.Navigator>
  );
};

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                name="AddNewPaletteModal"
                component={AddNewPaletteModal}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;