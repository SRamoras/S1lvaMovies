import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentList from '../Components/ContentList';
import './SearchResults.css';
import SearchBar from '../Components/SearchBar';

const SearchResults = () => {
  const [originalContent, setOriginalContent] = useState([]);
  const [displayContent, setDisplayContent] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = new URLSearchParams(location.search).get('query') || '';
  const categoryFilter = new URLSearchParams(location.search).get('category') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('/Movies.json'),
          fetch('/Animes.json'),
          fetch('/Series.json')
        ]);
        const data = await Promise.all(responses.map(res => res.json()));
        const combinedData = data.flat();

        const filteredData = combinedData.filter(item =>
          item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (categoryFilter ? item.categoria === categoryFilter : true)
        );

        setOriginalContent(filteredData);
        setDisplayContent(filteredData);
      } catch (error) {
        console.error("Erro ao buscar dados dos arquivos JSON:", error);
      }
    };

    fetchData();
  }, [searchTerm, categoryFilter]);

  useEffect(() => {
    let sortedData = [...originalContent];
    if (sortOrder === 'asc') {
      sortedData.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (sortOrder === 'desc') {
      sortedData.sort((a, b) => b.titulo.localeCompare(a.titulo));
    }
    setDisplayContent(sortedData);
  }, [sortOrder, originalContent]);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleRandomize = () => {
    setDisplayContent(current => shuffleArray([...current]));
  };

  const clearCategoryFilter = () => {
    navigate(location.pathname + (searchTerm ? `?query=${searchTerm}` : ''));
  };

  return (
    <div className="container-videos">
      <div className="title-and-filter">
      <div className="category-label">
      {categoryFilter && (
          <div className="category-label2">
            {categoryFilter}
            <span onClick={clearCategoryFilter} className="material-icons close-icon">
              close
            </span>
          </div>
        )}  </div>
        <div className="sort-filter">
          <SearchBar onSearch={(query) => console.log("Buscando:", query)} />
          <div>
            <button onClick={handleRandomize} className="random-button">
              Random <span className="material-icons button-icon">shuffle</span>
            </button>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
   <option value="asc">Alphabetical Order</option>
   <option value="desc">Reverse Alphabetical Order</option>
            </select>
          </div>
        </div>
       
        <div className='line'></div>
      </div>

      <ContentList items={displayContent} />
    </div>
  );
};

export default SearchResults;
