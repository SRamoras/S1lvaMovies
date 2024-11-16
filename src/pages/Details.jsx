import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Altera o fundo do <body> quando o componente é montado e reverte ao desmontar
  useEffect(() => {
    document.body.style.backgroundColor = 'black'; // Define o fundo como preto

    return () => {
      document.body.style.backgroundColor = ''; // Limpa a configuração ao desmontar
    };
  }, []);

  useEffect(() => {
    let path;
    if (location.pathname.includes('/Movies/')) {
      path = '/Movies.json';
    } else if (location.pathname.includes('/Series/')) {
      path = '/Series.json';
    } else if (location.pathname.includes('/Animes/')) {
      path = '/Animes.json';
    }

    fetch(path)
      .then(response => response.json())
      .then(data => {
        const foundItem = data.find(item => item.id.toString() === id);
        setDetails(foundItem);
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, [id, location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100; // Altera este valor conforme necessário
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  const renderMovieDetails = () => {
    if (details && details.tipo === "Movies") {
      return (
        <div className="movie-container">
          <img src={details.imagem} alt={details.titulo} className="movie-image" />
          <span className="material-symbols-outlined play-icon1">play_circle</span>
        </div>
      );
    }
    return null;
  };








  const renderEpisodeDetails = () => {
    // Certifique-se de que os detalhes foram carregados corretamente
    if (details && (details.tipo === "Series" || details.tipo === "Animes")) {
      // Usar a imagem fixa definida no nível superior do JSON para todos os episódios
      const imageUrl = details.imagem;
  
      return (
        <div className="episodes-container">
          {details.episodios.map((ep, index) => (
            <div key={index} className="episode-player">
              <div className="episode-image-container">
                <div className="episode-image-placeholder-database">
                  <img src={imageUrl} alt={`Episódio ${index + 1}`} className="episode-image" />
                  <span className="episode-duration">{ep.duracao}</span>
                  <span className="material-symbols-outlined play-icon1">play_circle</span>
                </div>
              </div>
              <div className="episode-info">
                <h4 className="episode-title"><span className="episode-number">{index + 1}. </span>{ep.nome}</h4>
                <p className="episode-description">{ep.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };
  
  

  if (!details) {
    return <p>Detalhe não encontrado</p>;
  }

  return (
    <div className="details-container">
      <div className={`details-background ${isScrolled ? 'blurred' : ''}`}
           style={{ backgroundImage: `url(${details.imagem})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="left-gradient"></div>
        <div className="bottom-gradient"></div>
      </div>

      <div className="details-content">
        <h1 className="details-title">{details.titulo}</h1>
        <div className='container-info-movie'>
          <p className="details-desc details-dec-cover">{details.quality}</p>
          <p className="details-desc details-dec-cover">{details.date}</p>
          <p className="details-desc details-dec-cover">{details.categoria}</p>
        </div>
        <p className="details-desc">{details.descricaoGeral ? details.descricaoGeral : details.descricao}</p>
        {renderEpisodeDetails()}
        {renderMovieDetails()}
      </div>
    </div>
  );
};

export default Details;
