import React from 'react';
import "./ContentList.css";

const ContentList = ({ items }) => {
  const basePath = "/S1lvaMovies"; // Prefixo para produção

  console.log("Itens recebidos:", items); // Verificar os dados

  return (
    <div className="content-list">
      <div className="content-grid">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="content-item">
              <a href={`${basePath}/${item.tipo}/${item.id}`}>
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
