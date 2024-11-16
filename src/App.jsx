// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './RouterComponent'; // Certifique-se de criar este componente

function App() {
  return (
    <Router basename="/S1lvaMovies">
      <RouterComponent />
    </Router>
  );
}

export default App;
