/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/axios';

export default function Episodio() {
  const [episodio, setEpisodio] = useState({});
  const { id } = useParams();

  React.useEffect(() => {
    async function getEpByPk() {
      const response = await axios.get(`/episodio/${id}`);
      setEpisodio(response.data);
    }
    getEpByPk();
  }, [id]);

  const contStyle = {
    display: 'block',
  };

  return ();
}
