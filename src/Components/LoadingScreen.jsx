import React from 'react';
import './LoadingScreen.css'; // Seu CSS personalizado
import spinner from '../assets/ring.svg'; // Ajuste o caminho conforme necessário

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img src={spinner} alt="Carregando..." className="loading-spinner" />
      <h1 className="loading-title">Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
