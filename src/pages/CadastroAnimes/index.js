import React, { useState } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { View, Text } from 'react-native';
import axios from '../../services/axios';
import history from '../../services/history';

export default function CadastroAnimes() {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataLancamento, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('/cadastrar_animes', {
        titulo,
        categoria,
        data_lancamento: dataLancamento,
        descricao,
      });

      toast.success('Anime cadastrado com sucesso');
      history.push('/');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map(error => toast.error(error));
    }
  }

  return (
    <View>
      <Text>Olá</Text>
    </View>
  );
}
