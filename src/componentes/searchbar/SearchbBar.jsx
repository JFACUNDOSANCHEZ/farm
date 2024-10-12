import React from 'react';
import styles from './SearchBar.module.css'; 

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <button className={styles.searchButton}>🔍</button>
      <input type="text" placeholder="Buscar" className={styles.searchInput} 
      
      />
      {/* <button className={styles.newButton}>Nuevo prospecto</button>  */}
    </div>
  );
}

export default SearchBar;

