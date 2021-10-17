import React from 'react';
import { Text, FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ColorPalette } from '../components';

// interface Color {
//     index: number,
//     colorName: string,
//     hexCode: string,
//     textColor: string
// }

// interface ColorPalette {
//     index: number
//     paletteName: string,
//     colorPalette: Array<Color>,
// }

const SOLORIZED = [
    { index: 0, colorName: 'Base03', hexCode: '#002b36', textColor: 'white' },
    { index: 1, colorName: 'Base02', hexCode: '#073642', textColor: 'white' },
    { index: 2, colorName: 'Base01', hexCode: '#586e75', textColor: 'white' },
    { index: 3, colorName: 'Base00', hexCode: '#657b83', textColor: 'white' },
    { index: 4, colorName: 'Base0', hexCode: '#839496', textColor: 'white' },
    { index: 5, colorName: 'Base1', hexCode: '#93a1a1', textColor: 'white' },
    { index: 6, colorName: 'Base2', hexCode: '#eee8d5', textColor: 'black' },
    { index: 7, colorName: 'Base3', hexCode: '#fdf6e3', textColor: 'black' },
    { index: 8, colorName: 'Yellow', hexCode: '#b58900', textColor: 'white' },
    { index: 9, colorName: 'Orange', hexCode: '#cb4b16', textColor: 'white' },
    { index: 10, colorName: 'Red', hexCode: '#dc322f', textColor: 'white' },
    { index: 11, colorName: 'Magenta', hexCode: '#d33682', textColor: 'white' },
    { index: 12, colorName: 'Violet', hexCode: '#6c71c4', textColor: 'white' },
    { index: 13, colorName: 'Blue', hexCode: '#268bd2', textColor: 'white' },
    { index: 14, colorName: 'Cyan', hexCode: '#2aa198', textColor: 'white' },
    { index: 15, colorName: 'Green', hexCode: '#859900', textColor: 'white' },
];

const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
    {
        paletteName: 'Solorized',
        colors: SOLORIZED
    },
    {
        paletteName: 'Rainbow',
        colors: RAINBOW
    },
    {
        paletteName: 'Frontend Masters',
        colors: FRONTEND_MASTERS
    },
];

const HomeScreen = ({ navigation }: any) => {
    console.log('typeof navigation: ', typeof navigation)

    const renderItem = ({ item }: any) => {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ColorPaletteScreen', { paletteName: item.paletteName, colors: item.colors })}>
                    <Text>{item.paletteName}</Text>
                </TouchableOpacity>
            </View>
            // <ColorPalette
            //     paletteName={item.paletteName}
            //     colors={item.colors}
            // />
        )
    }

    return (
        <FlatList
            style={styles.container}
            data={COLOR_PALETTES}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderItem}
            ListHeaderComponent={(item) => (<Text style={styles.heading}>{item.paletteName}</Text>)}
        />
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    contentContainerStyle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    }
})