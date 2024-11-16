import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    // Simulação de carregamento de categorias dos JSONs
    const loadCategories = async () => {
      const responses = await Promise.all([
        fetch('../../public/Animes.json').then(res => res.json()),
        fetch('../../public/Movies.json').then(res => res.json()),
        fetch('../../public/Series.json').then(res => res.json()),
      ]);
      const allCategories = new Set();
      responses.forEach(data => {
        data.forEach(item => {
          allCategories.add(item.categoria);
        });
      });
      setCategories([...allCategories]);
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
            <li className='sublinhado'>   <a href="/" className="nav-link"><span className="material-symbols-outlined">Home</span><h3 className="sub-li">Home</h3></a></li>
            <li className='sublinhado'>   <a href="/series" className="nav-link"><span className="material-symbols-outlined">tv</span><h3 className="sub-li">Series</h3></a></li>
            <li className='sublinhado'>   <a href="/movies" className="nav-link"><span className="material-symbols-outlined">movie</span><h3 className="sub-li">Movies</h3></a></li>
            <li onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setTimeout(() => setShowCategories(false), 500)}> {/* Delay adicionado */}
  <a href="#" className="nav-link">
    <span className="material-symbols-outlined">category</span>
    <h3 className="sub-li">Gender</h3>
  </a>
  {showCategories && (
    <div className="categories-menu">
      <h3 className="categories-title">Categories</h3>
      {categories.map((category, index) => (
        <a href={`/search?category=${category}`} key={index} className="category-item">
          {category}
        </a>
      ))}
    </div>
  )}
</li>

            {/* <li><Link to="/random" className="nav-link"><span className="material-symbols-outlined">shuffle</span><h3 className="sub-li">Random</h3></Link></li> */}
          </ul>
          <li className='search-bar-header-button'><a href="/search"><span className="material-symbols-outlined lupa">search</span></a></li>
        </nav>
      </header>
    </div>
  );
};

export default Header;
