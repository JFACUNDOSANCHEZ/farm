import { useState } from 'react'
import Landing from './componentes/landing/Landing'
import Login from './componentes/login/Login';
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {


  return (
    
    <Routes>
<Route path='/' element={<Landing /> }></Route>
<Route path='/Login' element={<Login /> }></Route>
     
    </Routes>
    
    )
}

export default App
