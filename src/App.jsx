import { useState } from 'react'
import Login from './componentes/login/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import Principal from './componentes/Principal/Principal';


function App() {


  return (
    <>
    <Routes>
<Route path='/' element={<Login /> }></Route>
<Route path='/menu' element={<Principal /> }></Route>
     
    </Routes>
    

    </>

    )
}

export default App
