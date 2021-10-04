import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';

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

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[
        styles.container,
      ]}>
        <Text style={styles.title}>Here are some boxes of different colours</Text>
        {COLORS.map((item) => {
          return (
            <View style={[styles.row, { backgroundColor: item.hexColor }]}>
              <Text style={[styles.text,]}>{item.colorName} {item.hexColor}</Text>
            </View>
          )
        })}
      </View>
    </SafeAreaView>
  );
};

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
  row: {
    width: '90%',
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default App;