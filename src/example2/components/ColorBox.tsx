import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    hexCode: string
    colorName: string
    textColor: string
}

const ColorBox = ({
    hexCode,
    colorName,
}: Props) => {
    const textColorStyle = {
        color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
    }

    const colorStyle = {
        backgroundColor: hexCode,
    };

    return (
        <View style={[styles.box, colorStyle]}>
            <Text style={[styles.text, textColorStyle]}>
                {colorName} {hexCode}
            </Text>
        </View>
    )
}

export default ColorBox

const styles = StyleSheet.create({
    box: {
        minWidth: '100%',
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
})