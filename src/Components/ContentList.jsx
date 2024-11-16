import React from 'react';
import { Link } from 'react-router-dom';
import "./ContentList.css";

const ContentList = ({ items }) => {
  console.log("Itens recebidos:", items); // Isso ajudará a verificar a estrutura dos dados

  return (
    <div className="content-list">
      <div className="content-grid">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => (
<div key={index} className="content-item">
      <a href={`/${item.tipo}/${item.id}`}>
        <img
          className="content-image"
          src={item.imagem}
          alt={item.titulo}
        />
      </a>
      <span className="material-symbols-outlined play-icon">play_circle</span>
      <div className="movie-quality-tag">{item.quality}</div>
      <div className="movie-date-tag1">{item.date}</div>
      <h1 className="title">{item.titulo}</h1>
    </div>
          ))
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
};

export default ContentList;
