import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const BASE_PATH = '/S1lvaMovies'; // Base do repositório

  useEffect(() => {
    // Carregamento de categorias dos JSONs com caminhos corretos
    const loadCategories = async () => {
      try {
        const responses = await Promise.all([
          fetch(`${BASE_PATH}/Animes.json`).then(res => res.json()),
          fetch(`${BASE_PATH}/Movies.json`).then(res => res.json()),
          fetch(`${BASE_PATH}/Series.json`).then(res => res.json()),
        ]);
        const allCategories = new Set();
        responses.forEach(data => {
          data.forEach(item => {
            allCategories.add(item.categoria);
          });
        });
        setCategories([...allCategories]);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    };
    loadCategories();
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <h2 className='logo-name'>S1lvaMovies</h2>
            </li>
            <li className='sublinhado'>
              <a href={`${BASE_PATH}/`} className="nav-link">
                <span className="material-symbols-outlined">Home</span>
                <h3 className="sub-li">Home</h3>
              </a>
            </li>
            <li className='sublinhado'>
              <a href={`${BASE_PATH}/series`} className="nav-link">
                <span className="material-symbols-outlined">tv</span>
                <h3 className="sub-li">Series</h3>
              </a>
            </li>
            <li className='sublinhado'>
              <a href={`${BASE_PATH}/movies`} className="nav-link">
                <span className="material-symbols-outlined">movie</span>
                <h3 className="sub-li">Movies</h3>
              </a>
            </li>
            <li
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setTimeout(() => setShowCategories(false), 500)} // Delay adicionado
            >
              <a href="#" className="nav-link">
                <span className="material-symbols-outlined">category</span>
                <h3 className="sub-li">Gender</h3>
              </a>
              {showCategories && (
                <div className="categories-menu">
                  <h3 className="categories-title">Categories</h3>
                  {categories.map((category, index) => (
                    <a href={`${BASE_PATH}/search?category=${category}`} key={index} className="category-item">
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>
          <li className='search-bar-header-button'>
            <a href={`${BASE_PATH}/search`}>
              <span className="material-symbols-outlined lupa">search</span>
            </a>
          </li>
        </nav>
      </header>
    </div>
  );
};

export default Header;
