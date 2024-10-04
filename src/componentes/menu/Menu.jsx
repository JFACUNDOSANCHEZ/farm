import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faTrophy, faUsers, faShoppingCart, faWallet, faChartBar } from '@fortawesome/free-solid-svg-icons';
import styles from './MenuPage.module.css'; 

function MenuPage() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faSmile} /> Clientes
        </li>
        <li>
          <FontAwesomeIcon icon={faTrophy} /> Fidelización
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} /> CRM
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingCart} /> Ventas
        </li>
        <li>
          <FontAwesomeIcon icon={faWallet} /> Cuentas
        </li>
        <li>
          <FontAwesomeIcon icon={faChartBar} /> Reportes
        </li>
      </ul>
    </div>
  );
}

export default MenuPage;
