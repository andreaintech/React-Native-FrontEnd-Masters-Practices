import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { ColorPalette } from '../components';
import { COLOR_PALETTES } from '../utils';

interface Color {
    index: number,
    colorName: string,
    hexCode: string,
    textColor: string
}

interface ColorPaletteProps {
    paletteName: string,
    colors: Array<Color>,
}


const HomeScreen = ({ navigation }: any) => {
    console.log('typeof navigation: ', typeof navigation)

    const renderItem = ({ item }: any) => {
        return (
            <ColorPalette
                paletteName={item.paletteName}
                colors={item.colors}
            />
        )
    }

    return (
        <FlatList
            style={styles.container}
            data={COLOR_PALETTES}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderItem}
        />
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: 'white'
    },
    contentContainerStyle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
})