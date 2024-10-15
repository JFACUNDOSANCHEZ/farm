import { useState } from 'react'
import Login from './componentes/login/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import Principal from './componentes/Principal/Principal';
import Form from './componentes/form/Form';
import Provincias from '../src/componentes/provincias/Provincias.jsx';

function App() {


  return (
    <>
    <Routes>
<Route path='/' element={<Login /> }></Route>
<Route path='/menu' element={<Principal /> }></Route>
<Route path='/ensayos' element={<Form /> }></Route>
<Route path="/provincias" element={<Provincias />} />
     
    </Routes>
    

    </>

    )
}

export default App
