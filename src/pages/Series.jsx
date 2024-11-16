// SeriesByCategory.jsx
import React from 'react';
import Carrocel from '../Components/Carrocel';
import seriesData from '../../public/Series.json';
import animeData from '../../public/Animes.json';
import Trailer from '../Components/Openning';
import video2 from '../Assets/video2.mp4';
const SeriesByCategory = () => {
  // Extraia categorias únicas do JSON
  const categoriasUnicas = [...new Set(seriesData.map(serie => serie.categoria))];

  return (
    <div>
    <Trailer
      title="Breaking Bad"
      description="Follow the transformation of Walter White, an underappreciated chemistry teacher turned powerful drug lord in the intense drama 'Breaking Bad'."
      videoSrc={video2}
        watchNowUrl="/Series/3"
    moreInfoUrl="/Series/3"
    />
<Carrocel data={seriesData} categoria="Ação" titulo="Series de Ação" />
      <Carrocel data={seriesData} categoria="Drama" titulo="Series de Drama" />
      <Carrocel data={seriesData} categoria="Terror" titulo="Series de Suspense" />
      <Carrocel data={seriesData} categoria="Comédia" titulo="Series de Comédia" />
      <Carrocel data={animeData}  titulo="Series de Animação" />
   


      {/* <h1 style={{ textAlign: 'center', color: 'white', margin: '150px 0' }}>Séries por Categoria</h1> */}
      
      {/* Renderiza um Carrocel para cada categoria única */}
      {/* {categoriasUnicas.map((categoria) => (
        <Carrocel key={categoria} data={seriesData} categoria={categoria} titulo={`Séries de ${categoria}`} />
      ))} */}
    </div>
  );
};

export default SeriesByCategory;
