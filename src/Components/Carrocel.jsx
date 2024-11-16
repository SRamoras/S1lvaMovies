import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Galaria.css';

const Carrocel = ({ data, categoria, titulo }) => {
  const filmes = categoria ? data.filter(item => item.categoria === categoria) : data.slice(0, 10);
  const maxPosition = 6; // Limita o carrossel até a posição 5
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollAmount = 322;

  const navigate = useNavigate();

  // Estados para controlar a visibilidade dos botões
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    if (scrollRef.current && !isScrolling && currentIndex > 0) {
      setIsScrolling(true);
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && !isScrolling && currentIndex < maxPosition - 1) {
      setIsScrolling(true);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const newIndex = Math.round(scrollLeft / scrollAmount);
      setCurrentIndex(newIndex);

      setShowLeftArrow(newIndex > 0);
      setShowRightArrow(newIndex < maxPosition - 1);
    }
  };

  useEffect(() => {
    handleScroll();
    scrollRef.current.addEventListener('scroll', handleScroll);
    return () => scrollRef.current.removeEventListener('scroll', handleScroll);
  }, []);

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rate ? "carousel-star filled" : "carousel-star"}>★</span>
      );
    }
    return stars;
  };

  const handleClickMovie = (item) => {
    navigate(`/S1lvaMovies/${item.tipo}/${item.id}`);
  };

  const goToPosition = (index) => {
    if (scrollRef.current && !isScrolling) {
      setIsScrolling(true);
      scrollRef.current.scrollTo({ left: index * scrollAmount, behavior: 'smooth' });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  const totalIndicators = 6;
  const indicators = Array.from({ length: totalIndicators }, (_, i) => i);
  return (
    <div className="movie-carousel-container">
      {showLeftArrow && (
        <button onClick={scrollLeft} className="carousel-arrow-button left-arrow">
          <span className="material-symbols-outlined arrow-icon">arrow_back_ios</span>
        </button>
      )}
      {showRightArrow && (
        <button onClick={scrollRight} className="carousel-arrow-button right-arrow">
          <span className="material-symbols-outlined arrow-icon">arrow_forward_ios</span>
        </button>
      )}
      <div className="container-carousel-arrows">
        <div className="carousel-arrows-name">
          <h1 className="sub-title">{titulo || "Popular Movies"}</h1>
        </div>
        <div className="carousel-indicators">
          {indicators.map((index) => (
            <span
              key={index}
              onClick={() => goToPosition(index)}
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
      <div className="movie-carousel" ref={scrollRef}>
        {filmes.map((item, index) => (
          <a href={`/S1lvaMovies/${item.tipo}/${item.id}`} key={index} className="movie-card">
            <div className="movie-image-container">
              <img src={item.imagem} alt={item.titulo} />
              <div className="movie-quality-tag">{item.quality}</div>
              <div className="movie-date-tag">{item.date}</div>
              <div className="movie-overlay">
                <span className="material-symbols-outlined video-icon">play_circle</span>
              </div>
            </div>
            <div className="movie-info">
              <h3>{item.titulo}</h3>
              <div className="movie-stars">{renderStars(item.rate)}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carrocel;
