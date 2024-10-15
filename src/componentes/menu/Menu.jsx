import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems, selectMenuItems, selectMenuStatus, selectMenuError } from '../../redux/slices/menuSlice.jsx';
import { FaHome, FaTable, FaFlask, FaUser, FaTools, FaIndustry, FaRuler, FaCashRegister, FaCity, FaVial } from 'react-icons/fa'; // Importar más íconos según lo que necesites
import styles from './MenuPage.module.css';
import logo from '../../../public/logo.jpg.jpeg';

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

    // Función para obtener el ícono correcto basado en el código del ítem
    const getIconForItem = (codigo) => {
        switch(codigo) {
            case 'RAIZ':
                return <FaHome />; // Ícono para el menú principal
            case 'TABLAS':
                return <FaTable />; // Ícono para tablas de elementos
            case 'ENSAYOS':
                return <FaFlask />; // Ícono para ensayos
            case 'MNUMETODO':
                return <FaTools />; // Ícono para métodos
            case 'MNUPERSONAL':
                return <FaUser />; // Ícono para personal
            case 'MNUSECTOR':
                return <FaIndustry />; // Ícono para subsector
            case 'MNUUM':
                return <FaRuler />; // Ícono para unidades de medida
            case 'MNICIVA':
                return <FaCashRegister />; // Ícono para condición de IVA
            case 'MNUCPAG':
                return <FaCity />; // Ícono para provincias
            case 'PRV':
                return <FaCity />; // Ícono para provincias
            case 'TMUESTRA':
                return <FaVial />; // Ícono para tipos de muestras
            case 'MNULAB':
                return <FaFlask />; // Ícono para laboratorio
            case 'MNURESULTADOS':
                return <FaTable />; // Ícono para carga de resultados
            default:
                return null; // Ningún ícono para otros ítems
        }
    };

    return (
        <div>
          <div className={styles.sidebar}>
            <div className={styles.menuContainer}>
             <img src={logo} alt="logo" className={styles.logo} />
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {getIconForItem(item.codigo)} {/* Renderizar el ícono */}
                            {item.descripcion} {/* Renderizar la descripción */}
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
