import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems, selectMenuItems, selectMenuStatus, selectMenuError } from '../../redux/slices/menuSlice.jsx';
import styles from './MenuPage.module.css';

function MenuPage() {
    const dispatch = useDispatch();
    const menuItems = useSelector(selectMenuItems);
    const menuStatus = useSelector(selectMenuStatus);
    const menuError = useSelector(selectMenuError);

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
          <div className={styles.sidebar}>
            <div className={styles.menuContainer}>
              <h3 className={styles.menuTitle}>LOGO</h3>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                           {item.descripcion}
                        </li>
                    ))}
                </ul>
                {menuError && <div>Error al cargar el menú: {menuError}</div>}
            </div>
          </div>
        </div>
    );
}

export default MenuPage;
