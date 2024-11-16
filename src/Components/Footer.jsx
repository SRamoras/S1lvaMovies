import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const basePath = '/S1lvaMovies'; // Ajuste para o nome do repositório
        const responses = await Promise.all([
          fetch(`${basePath}/Animes.json`).then(res => res.json()),
          fetch(`${basePath}/Movies.json`).then(res => res.json()),
          fetch(`${basePath}/Series.json`).then(res => res.json()),
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
          <div className="logo-name1">
            <h1>S1lvaMovies</h1>
          </div>
          <div className="social-links">
            <a
              className="portfolio-link"
              href="https://www.instagram.com/_____s1lva_____/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              className="portfolio-link"
              href="https://www.linkedin.com/in/diogo-silva-94068613b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              className="portfolio-link"
              href="https://github.com/SRamoras"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section categories">
            <h3>Categorias</h3>
            <div className="categories-container">
              {categories.map((category, index) => (
                <a
                  href={`/S1lvaMovies/search?category=${category}`}
                  key={index}
                  className="category-link"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
          <div></div>
          <div className="footer-section header-categorys">
            <h3>Menu</h3>
            <div>
              <a href="/S1lvaMovies/" className="category-link">Home</a>
              <a href="/S1lvaMovies/series" className="category-link">Series</a>
              <a href="/S1lvaMovies/movies" className="category-link">Movies</a>
              <a href="/S1lvaMovies/search" className="category-link">Search</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Descrição</h3>
            <div>
              <p>
                Este site é um projeto sem fins lucrativos criado exclusivamente para{' '}
                <a
                  href="https://sramoras.github.io/portfolio/"
                  className="highlight-link"
                >
                  portfólio
                </a>
                . Ele serve como uma plataforma para demonstrar minhas habilidades e projetos em desenvolvimento web,
                destacando minha capacidade de projetar e implementar aplicações dinâmicas. O conteúdo e as
                funcionalidades apresentadas são apenas para demonstração, sem intenções comerciais.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="center-direitos">
            &copy; {new Date().getFullYear()} S1lva Movies | Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
