import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
}

interface Props {
    color: string
    onPress: () => void
}

const ColorSquare = ({ color, onPress }: Props) => {
    const propStyles = {
        backgroundColor: color
    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.square, styles.shadow, propStyles]} />
    )
}

export default ColorSquare

const styles = StyleSheet.create({
    square: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 10,
        marginTop: 3
    },
    shadow: {
        ...shadow
    }
})