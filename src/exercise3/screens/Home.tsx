import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({ navigation }: any) => {
    console.log('typeof navigation: ', typeof navigation)

    return (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ColorPalette')
            }}>
                <Text>Solorized</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home