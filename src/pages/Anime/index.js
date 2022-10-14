/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { get } from 'lodash';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import axios from '../../services/axios';
import {
  AnimeContainer,
  TituloText,
  MyText,
  EpisodioContainer,
  TextEp,
} from './styled';
import { GlobalContainer } from '../../styles/GlobalStyles';

export default function Anime(props) {
  const [anime, setAnime] = useState({});
  const [episodios, setEpisodios] = useState([]);
  // const [rate, setRate] = useState('');
  // const [review, setReview] = useState('');
  // const [comentarios, setComentarios] = useState([]);

  React.useEffect(() => {
    async function getAnime() {
      const ani = await axios.get(`/animes/${props.id}`);
      const epi = await axios.get(`/episodio/byFk/${props.id}`);
      setAnime(ani.data);
      setEpisodios(epi.data);
      // const coment = await axios.get(`/comentario/${id}`);
      // setComentarios(coment.data);
    }
    getAnime();
  }, []);

  /*
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/comentario', {
        rate,
        review,
        anime_id: id,
      });
      toast.success('Comentario realizado!');
      history.push(`/anime/${id}`);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map(error => toast.error(error));
    }
  }
  */

  return (
    <ScrollView>
      <GlobalContainer>
        <AnimeContainer>
          <TituloText>{anime.titulo}</TituloText>
          <MyText>Lançamento: {anime.data_lancamento}</MyText>
          <MyText>Categoria: {anime.categoria}</MyText>
          <MyText>Descrição: {anime.descricao}</MyText>
        </AnimeContainer>
        <EpisodioContainer>
          <TextEp>Episódios</TextEp>
          {episodios.map(episodio => (
            <MyText key={episodio.id}>{episodio.nome}</MyText>
          ))}
        </EpisodioContainer>
      </GlobalContainer>
    </ScrollView>
  );
}
