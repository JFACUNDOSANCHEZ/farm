import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faQuestionCircle, faInfoCircle, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../searchbar/SearchbBar.jsx';

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={styles.navbar}>
      <p>Inicio /</p>
       
      <div className={styles.profileSection}>
       <div className={styles.DivsearchBar}>

        <SearchBar className={styles.searchBar} />
       </div>
      <div className={styles.profileSection}>
      </div>
        <div className={styles.profileIcon} onClick={toggleDropdown}>
          US
        </div>
        {showDropdown && (
          <div className={styles.dropdownMenu}>
            <p>Usuario</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faLanguage} /> Español (México)
              </li>
              <li>
                <FontAwesomeIcon icon={faQuestionCircle} /> Ayuda
              </li>
              <li>
                <FontAwesomeIcon icon={faInfoCircle} /> Acerca de
              </li>
              <li>
                <FontAwesomeIcon icon={faCog} /> Preferencias
              </li>
              <li>
                <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
