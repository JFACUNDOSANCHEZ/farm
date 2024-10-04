import React from 'react';
import styles from './SearchBar.module.css'; 

function Searchbar() {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Buscar" className={styles.searchInput} />
      <button className={styles.searchButton}>🔍</button>
      <button className={styles.newButton}>Nuevo prospecto</button> 
    </div>
  );
}

export default Searchbar;

