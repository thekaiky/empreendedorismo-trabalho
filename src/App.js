import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;