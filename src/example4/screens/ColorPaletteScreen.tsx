import React from 'react';
import { StyleSheet, Text, FlatList, } from 'react-native';
import ColorBox from '../components/ColorBox';

interface ColorProps {
    index: number
    colorName: string,
    hexCode: string,
}

const ColorPaletteScreen = (props: any) => {
    const { colors, paletteName } = props.route.params;

    const renderItem = ({ item }: { item: ColorProps }) => {
        return (
            <ColorBox
                colorName={item.colorName}
                hexCode={item.hexCode}
            />
        )
    }

    return (
        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderItem}
            ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
        />
    )
}

export default ColorPaletteScreen

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
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    }
})