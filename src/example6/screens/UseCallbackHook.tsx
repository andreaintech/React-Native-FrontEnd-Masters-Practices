import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(current => current + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCount(current => current - 1);
    }, []);

    return (
        <SafeAreaView>
            <Text style={styles.counter}>Counter: {count}</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#1cb814' }]} onPress={handleIncrement}>
                    <Text style={styles.text}>Increment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#e01059' }]} onPress={handleDecrement}>
                    <Text style={styles.text}>Decrement</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default UseCallbackHook

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    counter: {
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    button: {
        padding: 10,
        borderRadius: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
})
