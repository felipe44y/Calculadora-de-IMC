import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import Title from './src/componentes/Title/Index';
import Form from './src/componentes/Form/Index';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    paddingTop: 80,
  },
});
