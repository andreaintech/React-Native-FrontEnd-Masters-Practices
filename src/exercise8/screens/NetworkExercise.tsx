// Update your application to fetch the color palettes from the following url: https://color-palette-api.kadikraman.now.sh/palettes

// Hint: you should use useEffect, useCallback and useState for this!

import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text } from 'react-native';

const BASE_URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const NetworkExercise = () => {
    const [colors, setColors] = useState([]);

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{ marginBottom: 10, marginLeft: 10 }}>
                <Text>{item.paletteName}</Text>
            </View>
        )
    }

    const handleFetchColorsPalette = useCallback(async () => {
        const result = await fetch(BASE_URL);
        const colorss = await result.json();

        if (colorss?.length > 0) {
            setColors(colorss);
        }
    }, []);

    useEffect(() => {
        handleFetchColorsPalette();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                style={styles.list}
                data={colors}
                keyExtractor={item => String(item.id)}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default NetworkExercise

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
        padding: 10,
        flex: 1,
    },
    text: {
        marginBottom: 20,
        fontSize: 16
    }
})