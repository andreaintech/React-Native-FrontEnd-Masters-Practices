import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ColorsPreview } from '.';

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
        <View style={{ height: 100, justifyContent: 'space-around' }}>

            <TouchableOpacity onPress={() =>
                // @ts-ignore
                navigation.navigate('ColorPaletteScreen', { paletteName: paletteName, colors: colors })
            }>
                <Text style={styles.heading}>{paletteName}</Text>
            </TouchableOpacity>

            <ColorsPreview
                colors={colors}
            />
        </View>
    )
}

export default ColorPalette

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    }
})