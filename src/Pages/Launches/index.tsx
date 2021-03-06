import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-toastify';

import Header from '../../Components/Header';
import LaunchesCard from '../../Components/LaunchesCard';
import api from '../../services/api';

function Launches() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      await api
        .get('/launches')
        .then((response) => {
          setLaunches(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          toast.error('Error ');
        });
    }
    getData();
  }, []);

  return (
    <Container>
      <Header />
      {loading ? (
        <AiOutlineLoading3Quarters className="loading" size={36} />
      ) : (
        <LaunchesCard launches={launches} />
      )}
    </Container>
  );
}

export default Launches;
