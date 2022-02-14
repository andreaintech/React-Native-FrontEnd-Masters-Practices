import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const FOODS = [
  'apples',
  'doughnits',
  'Yorkshire pie',
  'pizza',
  'jellied eels'
]

const PickerExample = () => {
  const [value, setValue] = useState("pizza");
  return (
    <View style={styles.container}>
     <Text>Selected: {value} </Text>
    <Picker
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
    >
      {FOODS.map(food => (
        <Picker.Item label={food} value={food} />
      ))}
    </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default PickerExample;