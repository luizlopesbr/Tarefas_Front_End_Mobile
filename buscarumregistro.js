import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

import axios from 'axios';

//Busca no banco um registro específico
const Buscarumregistro = () => {
  const [dados, setDados] = useState({
    _id: '',
    nome: '',
    corDoCabelo: '',
    peso: ''
  });

  const clearInputs = () => {
    setDados({ _id: '', nome: '', corDoCabelo: '', peso: '' });
  }

  //CREATE

  const cadastrarPersonagem = () => {
    // Faz a requisição POST para o backend
    axios.post('http://10.0.2.2:3000/pessoas', dados)//equivalente ao localhost
    
      .then(response => {
        
        console.log(response.data); // Exibe a resposta do backend
        // Faça o que desejar com a resposta do backend aqui
      })
      .catch(error => {
        console.error(JSON.stringify(error)); // Trata os erros, se houver
      });

      clearInputs()
  };

  //READ ONE

  const buscarDados = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:3000/registros/${dados._id}`);
      const { _id, nome, corDoCabelo, peso } = response.data;
      setDados({ _id, nome, corDoCabelo, peso });
    } catch (error) {
      console.error(error);
    }
  };


  //UPDATE
  const atualizarRegistro = async () => {
    try {
      await axios.put(`http://10.0.2.2:3000/atualizar/${dados._id}`, {
        nome: dados.nome,
        corDoCabelo: dados.corDoCabelo,
        peso: dados.peso
      });
      console.log('Registro atualizado com sucesso');
    } catch (error) {
      console.error(error);
    }
  };


  //DELETE
  const excluirRegistro = async () => {
    try {
      await axios.delete(`http://10.0.2.2:3000/deletar/${dados._id}`);
      setDados({ _id: '', nome: '', corDoCabelo: '', peso: '' });
      console.log('Registro excluído com sucesso');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        value={dados._id}
        onChangeText={(_id) => setDados({ ...dados, _id })}
        placeholder="ID"
      />
      <TextInput
        value={dados.nome}
        onChangeText={(nome) => setDados({ ...dados, nome })}
        placeholder="Nome"
      />
      <TextInput
        value={dados.corDoCabelo}
        onChangeText={(corDoCabelo) => setDados({ ...dados, corDoCabelo })}
        placeholder="Cor do Cabelo"
      />
      <TextInput
        value={dados.peso.toString()}
        onChangeText={(peso) => setDados({ ...dados, peso })}
        placeholder="Peso"
      />
      <Button title="Enviar" onPress={cadastrarPersonagem} />
      <Button title="Buscar" onPress={buscarDados} />
      <Button title="Atualizar" onPress={atualizarRegistro} />
      <Button title="Excluir" onPress={excluirRegistro} />
      
    </View>
  );
};

export default Buscarumregistro;
