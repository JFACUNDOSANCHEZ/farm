import React from 'react'
import SearchBar from '../searchbar/SearchbBar';
import Nav from '../nav/Nav';
import Filtros from '../filtros/Filtros';
import Menu from '../menu/Menu'
import principal from './principal.module.css'
export default function Principal() {
  return (
    
         <div >
            <Nav></Nav>
     <div className={principal.container} >

         <Menu></Menu> 
     </div>
      <div className={principal.filtros} >
    <Filtros></Filtros>
      </div>
    </div>
    
  )
}
