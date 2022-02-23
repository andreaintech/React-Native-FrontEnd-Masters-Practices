/* eslint-disable prettier/prettier */
// Update your application to fetch the color palettes from the following url: https://color-palette-api.kadikraman.now.sh/palettes

// Hint: you should use useEffect, useCallback and useState for this!

import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, Text, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ColorPalette } from '../components';

const BASE_URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const ModalExercise = ({navigation}: any) => {
    const [colorPalettes, setColorPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchColorsPalette = useCallback(async () => {
        const result = await fetch(BASE_URL);

        if (result.ok) {
            const colors = await result.json();

            if (colors?.length > 0) {
                setColorPalettes(colors);
            }
        }
    }, []);

    const handleRefresh = useCallback(async () => {
        // setIsRefreshing(true);
        // await fetchColorsPalette();
        // setIsRefreshing(false);

        // But when you have a network request so quick, we dont really see the refresh the way you would normally see it on the web.So just emulate a bit of a timeout. This is for UX purposes
        setIsRefreshing(true);
        await fetchColorsPalette();
        setTimeout(() => {

            setIsRefreshing(false);
        }, 1000);

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
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
            ListHeaderComponent={
                <TouchableOpacity onPress={() => navigation.navigate('AddNewPaletteModal')}>
                    <Text style={styles.modalText}>Launch modal</Text>
                </TouchableOpacity>
            }
        />
    )
}

export default ModalExercise

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
    modalText: {
        color: 'black'
    }
})