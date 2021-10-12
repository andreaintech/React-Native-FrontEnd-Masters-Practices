import React from 'react'
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'
import ColorBox from '../components/ColorBox';

interface ColorProps {
    index: number
    colorName: string,
    hexCode: string,
    textColor: string
}

const COLORS = [
    { index: 0, colorName: 'Base03', hexCode: '#002b36', textColor: 'white' },
    { index: 1, colorName: 'Base02', hexCode: '#073642', textColor: 'white' },
    { index: 2, colorName: 'Base01', hexCode: '#586e75', textColor: 'white' },
    { index: 3, colorName: 'Base00', hexCode: '#657b83', textColor: 'white' },
    { index: 4, colorName: 'Base0', hexCode: '#839496', textColor: 'white' },
    { index: 5, colorName: 'Base1', hexCode: '#93a1a1', textColor: 'white' },
    { index: 6, colorName: 'Base2', hexCode: '#eee8d5', textColor: 'black' },
    { index: 7, colorName: 'Base3', hexCode: '#fdf6e3', textColor: 'black' },
    { index: 8, colorName: 'Yellow', hexCode: '#b58900', textColor: 'white' },
    { index: 9, colorName: 'Orange', hexCode: '#cb4b16', textColor: 'white' },
    { index: 10, colorName: 'Red', hexCode: '#dc322f', textColor: 'white' },
    { index: 11, colorName: 'Magenta', hexCode: '#d33682', textColor: 'white' },
    { index: 12, colorName: 'Violet', hexCode: '#6c71c4', textColor: 'white' },
    { index: 13, colorName: 'Blue', hexCode: '#268bd2', textColor: 'white' },
    { index: 14, colorName: 'Cyan', hexCode: '#2aa198', textColor: 'white' },
    { index: 15, colorName: 'Green', hexCode: '#859900', textColor: 'white' },
];
const Example2 = () => {
    const renderItem = ({ item }: { item: ColorProps }) => {
        return (
            <ColorBox
                colorName={item.colorName}
                hexCode={item.hexCode}
                textColor={item.textColor}
            />
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                style={styles.container}
                data={COLORS}
                keyExtractor={item => String(item.index)}
                contentContainerStyle={styles.contentContainerStyle}
                renderItem={renderItem}
                ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
            />
        </SafeAreaView>
    )
}

export default Example2

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    contentContainerStyle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    }
})