import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LogInPage } from './pages/LogIn';
import { DashBoardPage} from './pages/DashBoard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LogInPage /> } />
        <Route path="/dashboard" element={ <DashBoardPage /> } />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
