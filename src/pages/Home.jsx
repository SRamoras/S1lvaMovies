import React from 'react';
import Trailer from '../Components/Openning';
import video1 from '../../Public/Assets/video1.mp4';
import './Home.css';
import Carrocel from '../Components/Carrocel';
import moviesData from '../../public/Movies.json';
import seriesData from '../../public/Series.json';
import animesData from '../../public/Animes.json';

const Home = () => {
  return (
    <div>
<Trailer
  title="John Wick"
  description="Keanu Reeves stars as John Wick, a former hitman who comes out of retirement to track down the gangsters that took everything from him."
  videoSrc={video1}
  watchNowUrl="/Movies/61"
  moreInfoUrl="/Movies/61"
/>


      <div className='Carrocel-container-home-page'>
      <Carrocel data={moviesData} titulo="Filmes Populares" />
      <Carrocel data={seriesData} titulo="Séries Populares" />
      <Carrocel data={animesData} titulo="Animes Populares" />
    </div>
    </div>
  );
};

export default Home;
