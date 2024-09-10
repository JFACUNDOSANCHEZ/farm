import { useState } from 'react'
import Login from './componentes/login/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing2 from './componentes/landing2/Landing2';
import Footer from './componentes/footer/Footer';
import Menu from './componentes/menu/Menu';


function App() {


  return (
    <>
    <Routes>
<Route path='/' element={<Landing2 /> }></Route>
<Route path='/Login' element={<Login /> }></Route>
<Route path='/menu' element={<Menu /> }></Route>
     
    </Routes>
    
{/* <Footer></Footer> */}
    </>

    )
}

export default App
