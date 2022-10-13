import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { View, Text } from 'react-native';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('/cadastro/', {
        nome,
        password,
        email,
      });
      toast.success('Cadastro Realizado');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map(error => toast.error(error));
    }
  }

  return (
    <View>
      <Text>Cheguei</Text>
    </View>
  );
}
