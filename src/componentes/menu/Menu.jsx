import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuPage.module.css';
import Nav from './../nav/Nav.jsx'
const MenuPage = () => {
  return (
    <div className={styles.pageContainer}>
      
<Nav></Nav>
      
      <div className={styles.menuContainer}>
        <h1 className={styles.title}>Menú Principal</h1>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="/muestra">Muestra</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/configuracion">Configuración</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/informacion">Información</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuPage;

