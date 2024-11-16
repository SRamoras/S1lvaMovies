import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const responses = await Promise.all([
          fetch('/Animes.json').then(res => res.json()),
          fetch('/Movies.json').then(res => res.json()),
          fetch('/Series.json').then(res => res.json()),
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
    <>

      <footer className="footer">     
      
         <div className="pre-footer">
        <div className="logo-name1"><h1>S1lvaMovies</h1></div>
        <div className="social-links">
  <a className='portfolio-link' href="https://www.instagram.com/_____s1lva_____/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i> Instagram
  </a>
  <a className='portfolio-link' href="https://www.linkedin.com/in/diogo-silva-94068613b/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i> LinkedIn
  </a>
  <a className='portfolio-link' href="https://github.com/SRamoras" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i> GitHub
  </a>
</div>

      </div>



        <div className="footer-content">
         
          <div className="footer-section categories">
            <h3>Categorias</h3>
            <div className="categories-container">
              {categories.map((category, index) => (
                <a href={`/search?category=${category}`} key={index} className="category-link">
                  {category}
                </a>
              ))}
            </div>
          </div>
         <div>
        
         </div>
          <div className="footer-section header-categorys">
            <h3>Menu</h3>
            <div >
              <a href="/" className="category-link">Home</a>
              <a href="/series" className="category-link">Series</a>
              <a href="/movies" className="category-link">Movies</a>
              <a href="/search" className="category-link">Search</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Descriptiopn</h3>
            <div >
            <p>This website is a non-profit project created solely for <a href="https://sramoras.github.io/portfolio/" className="highlight-link">portfolio</a> purposes. It serves as a platform to showcase my skills and projects in web development, highlighting my abilities to design and implement dynamic web applications. The content and features presented here are intended for demonstration and do not represent commercial intentions. Please consider this as an example of my work in the field of software development.</p>
            </div>
          </div>




        </div>
        <div className="footer-bottom">
          <p className='center-direitos'>&copy; {new Date().getFullYear()} S1lva Movies | Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
