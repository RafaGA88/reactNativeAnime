import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { View, Text } from 'react-native-web';
import axios from '../../services/axios';
import history from '../../services/history';

export default function CadastroEpisodio() {
  const [nome, setNome] = useState('');
  const [numeroEpisodio, setEpisodio] = useState('');
  const [animeEp, setAnimeEp] = useState('');
  const [video, setVideo] = useState('');
  const [animes, setAnime] = useState([]);

  React.useEffect(() => {
    async function getIdAnime() {
      const response = await axios.get('/listagem');
      setAnime(response.data);
    }
    getIdAnime();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('arquivo', video);
    formData.append('anime_id', animeEp);
    formData.append('numero_episodio', numeroEpisodio);
    formData.append('nome', nome);

    try {
      await axios.post('/cadastrar_episodio', formData);
      const anime = animes.filter(a => a.id === animeEp);
      toast.success(`Episódio de ${anime[0].titulo}`);
      history.push(`/anime/${animeEp}`);
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
