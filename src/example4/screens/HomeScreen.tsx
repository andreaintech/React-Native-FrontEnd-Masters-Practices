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