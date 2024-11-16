// MoviesByCategory.jsx
import React from 'react';
import Carrocel from '../Components/Carrocel';
import moviesData from '../../public/Movies.json';
import Trailer from '../Components/Openning';
import video3 from '../Assets/video3.mp4';
const MoviesByCategory = () => {
  return (
    <div>
<Trailer
  title="Avengers: Endgame"
  description="After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
  videoSrc={video3} 
  watchNowUrl="/Movies/5"
  moreInfoUrl="/Movies/5"
/>




 
      
      <Carrocel data={moviesData} categoria="Ação" titulo="Filmes de Ação" />
      <Carrocel data={moviesData} categoria="Drama" titulo="Filmes de Drama" />
      <Carrocel data={moviesData} categoria="Suspense" titulo="Filmes de Suspense" />
      <Carrocel data={moviesData} categoria="Comédia" titulo="Filmes de Comédia" />
      <Carrocel data={moviesData} categoria="Animação" titulo="Filmes de Animação" />
      {/* Adicione outras categorias aqui */}
    </div>
  );
};

export default MoviesByCategory;
