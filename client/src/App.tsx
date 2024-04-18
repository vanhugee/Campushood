import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { LogInPage } from './pages/LogIn';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LogInPage /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
