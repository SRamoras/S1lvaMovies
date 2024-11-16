import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    navigate(`/search?query=${term}`); // Atualiza a URL com o termo de pesquisa
  };

  return (
    <div className="search-bar-container">
      <span className="search-icon material-symbols-outlined">search</span>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
