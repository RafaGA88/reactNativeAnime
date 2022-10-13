/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import axios from '../../services/axios';
import { AnimesView } from './styled';
import { GlobalContainer } from '../../styles/GlobalStyles';

export default function Home() {
  const [animes, setAnimes] = useState([]);

  React.useEffect(() => {
    async function getAnimes() {
      const response = await axios.get('/listagem');
      setAnimes(response.data);
    }
    getAnimes();
  }, []);

  return (
    <ScrollView>
      <GlobalContainer>
        {animes.map(anime => (
          <TouchableOpacity
            style={{ width: 0, alignItems: 'center' }}
            onPress={() => console.log(anime.titulo)}
          >
            <AnimesView>
              <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {anime.titulo}
              </Text>
              <Text>Categoria: {anime.categoria}</Text>
              <Text>Lançamento: {anime.data_lancamento}</Text>
            </AnimesView>
          </TouchableOpacity>
        ))}
      </GlobalContainer>
    </ScrollView>
  );
}
