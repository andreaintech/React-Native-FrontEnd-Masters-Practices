import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

const UseStateHook = () => {
    const [count, setCount] = useState(0);
    return (
        <SafeAreaView>
            <Text style={styles.counter}>Counter: {count}</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#1cb814' }]} onPress={() => setCount(currentValue => currentValue + 1)}>
                    <Text style={styles.text}>Increment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#e01059' }]} onPress={() => setCount(currentValue => currentValue - 1)}>
                    <Text style={styles.text}>Decrement</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default UseStateHook

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
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
    counter: {
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20
    }
})
