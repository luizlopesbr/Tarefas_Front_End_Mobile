import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios';

//READ ALL ON MONGODB AND RENDER
const ListarPersonagens = () => {
    const [registros, setRegistros] = useState([]);
  
    useEffect(() => {
      fetchRegistros();
    }, []);
  
    const fetchRegistros = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/registros');
        setRegistros(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const renderItem = ({ item }) => (
      <View>
        <Text>ID: {item._id}</Text>
        <Text>Nome: {item.nome}</Text>
        <Text>Cor do cabelo: {item.corDoCabelo}</Text>
        <Text>Peso: {item.peso}</Text>
      </View>
    );
  
    return (
      <FlatList
        data={registros}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    );
  };
  
  export default ListarPersonagens;