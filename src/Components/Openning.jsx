import React, { useEffect, useRef } from 'react';
import './Openning.css';

const Trailer = ({
  title = "Nome do Filme",
  description = "Uma breve descrição do filme, proporcionando uma visão envolvente e emocionante do conteúdo.",
  videoSrc,
  watchNowUrl = "/", // Caminho padrão se nenhum for fornecido
  moreInfoUrl = "/" // Caminho padrão se nenhum for fornecido
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoSrc]);

  return (
    <div className="trailer-container">
      <video
        ref={videoRef}
        src={videoSrc}
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
        className="trailer-video"
      />
      <div className="trailer-overlay">
        <div className="trailer-bottom-info">
          <div className="trailer-title">{title}</div>
          <div className="trailer-description">{description}</div>
          <div className="button-container">
            <a href={watchNowUrl} className="first-button">Watch Now</a>
            <a href={moreInfoUrl} className="second-button">More Info</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
