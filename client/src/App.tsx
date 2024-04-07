import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { DashBoard } from './pages/DashBoard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth" element={ <DashBoard /> } />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
