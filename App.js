import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements'

 
export default function App() {
  icon = <Icon type="material-community" name="arrow-right" size={15} color="white"></Icon>
  return (
    <View style={styles.container}>
      <Text>5 Tenedores</Text>
      <Button title="Click Me" icon={icon}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
