import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Curriculum from './pages/Curriculum';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Curriculum />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
