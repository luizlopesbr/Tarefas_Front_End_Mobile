import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

//Salva no banco um novo registro
const FormComponent = () => {
  const [formData, setFormData] = useState({
    _id: '',
    nome: '',
    corDoCabelo: '',
    peso: ''
  });

  const handleSubmit = () => {
    // Faz a requisição POST para o backend
    axios.post('http://10.0.2.2:3000/pessoas', formData)//equivalente ao localhost
      .then(response => {
        console.log(response.data); // Exibe a resposta do backend
        // Faça o que desejar com a resposta do backend aqui
      })
      .catch(error => {
        console.error(JSON.stringify(error)); // Trata os erros, se houver
      });
  };

  return (
    <View>
      <TextInput
        placeholder="_id"
        value={formData._id}
        onChangeText={text => setFormData({ ...formData, _id: text })}
      />
      <TextInput
        placeholder="Nome"
        value={formData.nome}
        onChangeText={text => setFormData({ ...formData, nome: text })}
      />
      <TextInput
        placeholder="Cor do Cabelo"
        value={formData.corDoCabelo}
        onChangeText={text => setFormData({ ...formData, corDoCabelo: text })}
      />
      <TextInput
        placeholder="Peso"
        value={formData.peso}
        onChangeText={text => setFormData({ ...formData, peso: text })}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default FormComponent;
