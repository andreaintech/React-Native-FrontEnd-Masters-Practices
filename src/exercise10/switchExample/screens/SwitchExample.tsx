import React, { useState } from 'react';
import { SafeAreaView, Switch, View, StyleSheet } from 'react-native';

const SwitchExample = () => {
  const [value, setValue] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Switch value={value} onValueChange={setValue} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default SwitchExample;