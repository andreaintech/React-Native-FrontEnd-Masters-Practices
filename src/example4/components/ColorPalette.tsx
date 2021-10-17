import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Color {
    index: number,
    colorName: string,
    hexCode: string,
    textColor: string
}

interface ColorPalette {
    paletteName: string,
    colors: Array<Color>,
}

const ColorPalette = ({ paletteName, colors }: ColorPalette) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() =>
                // @ts-ignore
                navigation.navigate('ColorPaletteScreen', { paletteName: paletteName, colors: colors })
            }>
                <Text>{paletteName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ColorPalette