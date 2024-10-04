import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faTrophy, faUsers, faShoppingCart, faWallet, faChartBar } from '@fortawesome/free-solid-svg-icons';
import styles from './MenuPage.module.css';

function MenuPage() {
  const [isActive, setIsActive] = useState(false); // Estado para manejar la visibilidad del menú

  const toggleMenu = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div>
      <div className={`${styles.sidebar} ${isActive ? 'active' : 'hidden'}`}>
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
      <button onClick={toggleMenu}>
        {isActive ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>
    </div>
  );
}

export default MenuPage;
