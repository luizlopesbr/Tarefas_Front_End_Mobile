import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


//import FormComponent from './FormComponent';
//import ListarPersonagens from './ListarPersonagens';
//import Form from './Form';
import Buscarumregistro from './buscarumregistro'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Lista com os personagens</Text> */}
      {/* <ListarPersonagens /> */}
      {/* <Form /> */}
      <Buscarumregistro/>
      <StatusBar style="auto" />
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
