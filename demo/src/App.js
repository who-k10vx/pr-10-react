import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Axioss from './pages/Axioss';
import FetchH from './pages/FetchH';

function App() {
  return (
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<FetchH/>}/>
     <Route path='/axios' element={<Axioss/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
