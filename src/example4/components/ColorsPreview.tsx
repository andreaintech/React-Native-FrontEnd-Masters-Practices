import React from 'react';
import { FlatList } from 'react-native';
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
            data={colors.slice(0, 5)}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
        />
    )
}

export default ColorsPreview