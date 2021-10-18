import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
    color: string
}

const ColorSquare = ({ color }: Props) => {
    const propStyles = {
        backgroundColor: color
    }

    return (
        <View style={[styles.square, propStyles]} />
    )
}

export default ColorSquare

const styles = StyleSheet.create({
    square: {
        width: 50,
        height: 50,
    }
})