import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faQuestionCircle, faHeadset, faUserShield, faLanguage, faInfoCircle, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="https://e7.pngegg.com/pngimages/567/329/png-clipart-symbol-logo-science-models-of-scientific-inquiry-korean-good-luck-emblem-logo-typeface.png" alt="Cinco Hispanos" />
      </div>
      <ul className={styles.navLinks}>
      <li>
          <FontAwesomeIcon icon={faTools} /> Herramientas
        </li>
        <li>
          <FontAwesomeIcon icon={faQuestionCircle} /> Ayuda
        </li>
        <li>
          <FontAwesomeIcon icon={faUserShield} /> Administración
        </li>
        <li>
          <FontAwesomeIcon icon={faHeadset} /> Soporte
        </li>
      </ul>
      <div className={styles.profileSection}>
        <div className={styles.profile} onClick={toggleDropdown}>
          <span className={styles.profileName}>Usuario</span>
          <div className={styles.profileIcon}>US</div>
        </div>
        {showDropdown && (
          <div className={styles.dropdownMenu}>
            <p className={styles.dropdownName}>Usuario </p>
            <ul>
            
    
            <li>
        <FontAwesomeIcon icon={faLanguage} /> Español (Mexico)
      </li>
      <br />
      <li>
        <FontAwesomeIcon icon={faQuestionCircle} /> Ayuda
      </li>
      <li>
        <FontAwesomeIcon icon={faInfoCircle} /> Acerca de
      </li>
      <li>
        <FontAwesomeIcon icon={faCog} /> Preferencias
      </li>
      <br />
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
