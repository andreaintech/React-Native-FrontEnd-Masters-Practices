import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ColorSquare } from '.';

interface Color {
    index: number,
    colorName: string,
    hexCode: string,
    textColor: string
}

interface ColorPalettePreviewProps {
    colors: Array<Color>
}

const ColorsPreview = ({ colors }: ColorPalettePreviewProps) => {

    const renderItem = ({ item }: any) => {
        return (
            <ColorSquare
                color={item.hexCode}
            />
        )
    }

    return (
        <FlatList
            horizontal
            style={styles.container}
            data={colors.slice(0, 5)}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderItem}
        />
    )
}

export default ColorsPreview

const styles = StyleSheet.create({
    container: {},
    contentContainerStyle: {}
})