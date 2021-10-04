import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import ColorBox from '../components/ColorBox';

const COLORS = [
    {
        index: 0,
        colorName: 'Cyan',
        hexColor: '#2aa198'
    },
    {
        index: 1,
        colorName: 'Blue',
        hexColor: '#268bd2'
    },
    {
        index: 2,
        colorName: 'Magenta',
        hexColor: '#d33682'
    },
    {
        index: 3,
        colorName: 'Orange',
        hexColor: '#cb4b16'
    },
]

const Example1 = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[
                styles.container,
            ]}>
                <Text style={styles.title}>Here are some boxes of different colours</Text>
                {COLORS.map((item, index) => {
                    return (
                        <ColorBox key={index} hexCode={item.hexColor} colorName={item.colorName} />
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

export default Example1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    safeArea: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})