import React from 'react'
import Home from './pages/Home';
import Basket from './pages/Basket';
import { Route, Routes } from 'react-router-dom';
import './scss/style.scss'
import './scss/media.scss'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cart' element={<Basket />} />        
      </Routes>
    </div>
  );
}

export default App;
