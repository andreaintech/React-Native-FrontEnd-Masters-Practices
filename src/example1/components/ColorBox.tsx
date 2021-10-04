import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    hexCode: string
    colorName: string
}

const ColorBox = ({
    hexCode,
    colorName,
}: Props) => {
    const boxColor = {
        backgroundColor: hexCode,
    }
    return (
        <View style={[styles.box, boxColor]}>
            <Text style={styles.boxText}>{colorName}: {hexCode}</Text>
        </View>
    )
}

export default ColorBox

const styles = StyleSheet.create({
    box: {
        width: '90%',
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    boxText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})
