import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { FoodPage } from './pages/Food';
import { MiscPage } from './pages/Misc';
import { TranspoPage } from './pages/Transpo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/food" element={ <FoodPage /> } />
        <Route path="/transpo" element={ <TranspoPage /> } />
        <Route path="/misc" element={ <MiscPage /> } />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
