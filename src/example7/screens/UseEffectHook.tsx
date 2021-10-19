//! Note: I used the Rick and Morty API due to the Cats Fact API did not work for me :(

import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';

const UseEffectHook = () => {
    const [characters, setCharacters] = useState([]);

    const handleFetchCatFacts = useCallback(async () => {
        const result = await fetch('https://rickandmortyapi.com/api/character');

        const characters = await result.json();
        if (characters.info.count > 0) {
            setCharacters(characters.results);
        }
    }, []);

    useEffect(() => {
        handleFetchCatFacts();
    }, []);

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{ marginBottom: 10, marginLeft: 10 }}>
                <Text>{item.name}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                style={styles.list}
                data={characters}
                keyExtractor={(item, index) => String(index)}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

export default UseEffectHook

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