import React from 'react'
import SearchBar from '../searchbar/SearchbBar';
import Nav from '../nav/Nav';
import Filtros from '../filtros/Filtros';
import Menu from '../menu/Menu'
import Provincias from '../provincias/Provincias';
import styles from './principal.module.css';

export default function Principal() {
  return (
    <div className={styles.container}>
      {/* Menú a la izquierda */}
      <div className={styles.menu}>
    
      </div>

      {/* Contenido principal con los filtros */}
      <div className={styles.mainContent}>
      <div className={styles.contentTitle}>

        <h2>Menu principal</h2>
</div>

<div>
  
</div>

        {/* <Filtros /> */}
      </div>
    </div>
  );
}