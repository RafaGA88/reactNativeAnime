import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Anime() {
  const [anime, setAnime] = useState({});
  const [episodios, setEpisodios] = useState([]);
  const [rate, setRate] = useState('');
  const [review, setReview] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    async function getAnime() {
      const ani = await axios.get(`/animes/${id}`);
      const epi = await axios.get(`/episodio/byFk/${id}`);
      setAnime(ani.data);
      setEpisodios(epi.data);
      const coment = await axios.get(`/comentario/${id}`);
      setComentarios(coment.data);
    }
    getAnime();
  }, [id]);

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

  const contStyle = {
    display: 'block',
  };

  return ();
}
