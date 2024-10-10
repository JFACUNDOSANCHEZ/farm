import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSmile } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos necesarios


import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems, selectMenuItems, selectMenuStatus, selectMenuError } from '../../redux/slices/menuSlice.jsx';
import styles from './MenuPage.module.css';

function MenuPage() {
    const dispatch = useDispatch();
    const menuItems = useSelector(selectMenuItems);
    const menuStatus = useSelector(selectMenuStatus);
    const menuError = useSelector(selectMenuError);
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    };

    useEffect(() => {
        if (menuStatus === 'idle') {
            dispatch(fetchMenuItems());
        }
    }, [menuStatus, dispatch]);

    if (menuStatus === 'loading') {
        return <div>Cargando menú...</div>; // Mensaje de carga
    }

    return (
        <div>
          <div className={`${styles.sidebar} ${isActive ? styles.active : styles.hidden}`}>
            <h3 className={styles.menuTitle}>Menu</h3>
            <div className={styles.menuContainer}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <FontAwesomeIcon icon={faSmile} /> {item.descripcion}
                        </li>
                    ))}
                </ul>
                {menuError && <div>Error al cargar el menú: {menuError}</div>}
            </div>
          </div>

          <button className={styles.toggleButton} onClick={toggleMenu}>
              <FontAwesomeIcon icon={isActive ? faArrowLeft : faArrowRight} /> {/* Flecha que cambia según el estado */}
          </button>
        </div>
    );
}

export default MenuPage;