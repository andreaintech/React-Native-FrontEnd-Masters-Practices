import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ColorPalettePreview } from '.';

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

    const goToPalette = () => {
        // @ts-ignore
        navigation.navigate('ColorPaletteScreen', { paletteName: paletteName, colors: colors })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToPalette}>
                <Text style={styles.heading}>{paletteName}</Text>
            </TouchableOpacity>

            <ColorPalettePreview
                onPress={goToPalette}
                colors={colors}
            />
        </View>
    )
}

export default ColorPalette

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'space-around'
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    }
})