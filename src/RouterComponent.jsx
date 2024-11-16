// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainLayout from './Layout/MainLayout';
// import Home from './Pages/Home';
// import Movies from './Pages/Movies';
// import Series from './Pages/Series';
// import Gender from './Pages/Gender';
// import Random from './Pages/Random';
// import SearchResults from './Pages/SearchResults';
// import Details from './Pages/Details';

// function App() {
//   return (
//     <Router basename="/S1lvaMovies">
//       <Routes>
//         <Route path="/" element={<MainLayout><Home /></MainLayout>} />
//         <Route path="/search" element={<MainLayout><SearchResults /></MainLayout>} />
//         <Route path="/movies" element={<MainLayout><Movies /></MainLayout>} />
//         <Route path="/series" element={<MainLayout><Series /></MainLayout>} />
//         <Route path="/gender" element={<MainLayout><Gender /></MainLayout>} />
//         <Route path="/random" element={<MainLayout><Random /></MainLayout>} />
//         <Route path="/movies/:id" element={<MainLayout><Details /></MainLayout>} />
//         <Route path="/series/:id" element={<MainLayout><Details /></MainLayout>} />
//         <Route path="/animes/:id" element={<MainLayout><Details /></MainLayout>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
