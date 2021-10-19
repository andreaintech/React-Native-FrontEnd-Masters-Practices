// Update your application to fetch the color palettes from the following url: https://color-palette-api.kadikraman.now.sh/palettes

// Hint: you should use useEffect, useCallback and useState for this!

import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ColorPalette } from '../components';

const BASE_URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const NetworkExercise = () => {
    const [colorPalettes, setColorPalettes] = useState([]);

    const fetchColorsPalette = useCallback(async () => {
        const result = await fetch(BASE_URL);

        if (result.ok) {
            const colors = await result.json();

            if (colors?.length > 0) {
                setColorPalettes(colors);
            }
        }
    }, []);

    useEffect(() => {
        fetchColorsPalette();
    }, []);

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
            data={colorPalettes}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderItem}
        />
    )
}

export default NetworkExercise

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