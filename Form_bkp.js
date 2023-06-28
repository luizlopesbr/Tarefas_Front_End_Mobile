import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

//Buscar e Excluir Registro

const Form = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [corDoCabelo, setCorDoCabelo] = useState('');
  const [peso, setPeso] = useState('');

  const buscarRegistro = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:3000/registros/${id}`);
      const { data } = response;
      setNome(data.nome);
      setCorDoCabelo(data.corDoCabelo);
      setPeso(data.peso);
    } catch (error) {
      console.error(error);
    }
  };

  // const buscarRegistro = async () => {
  //   try {
  //     const response = await axios.get(`http://10.0.2.2:3000/registros/${id}`);
  //     const { data } = response;
  //     setNome(data.nome);
  //     setCorDoCabelo(data.corDoCabelo);
  //     setPeso(data.peso);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const excluirRegistro = async () => {
    try {
      await axios.delete(`http://10.0.2.2:3000/pessoas/${id}`);
      // Faça algo após excluir o registro
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="ID"
        value={id}
        onChangeText={setId}
        
      />
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Cor do cabelo"
        value={corDoCabelo}
        onChangeText={setCorDoCabelo}
      />
      <TextInput
        placeholder="Peso"
        value={peso}
        onChangeText={setPeso}
      />
      <Button
        title="Buscar registro"
        onPress={buscarRegistro}
      />
      <Button
        title="Excluir registro"
        onPress={excluirRegistro}
      />
    </View>
  );
};

export default Form;
