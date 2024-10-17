import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems, selectMenuItems, selectMenuStatus, selectMenuError } from '../../redux/slices/menuSlice.jsx';
import { FaHome, FaTable, FaFlask, FaUser, FaTools, FaIndustry, FaRuler, FaCashRegister, FaCity, FaVial } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import styles from './MenuPage.module.css';
import logo from '../../../public/logo.jpg.jpeg';

function MenuPage() {
    const dispatch = useDispatch();
    const menuItems = useSelector(selectMenuItems);
    const menuStatus = useSelector(selectMenuStatus);
    const menuError = useSelector(selectMenuError);
    const navigate = useNavigate(); // Usa el hook useNavigate

    // Inicializa openGroups para que todos los grupos estén abiertos
    const [openGroups, setOpenGroups] = useState({});

    useEffect(() => {
        if (menuStatus === 'idle') {
            dispatch(fetchMenuItems());
        }
    }, [menuStatus, dispatch]);

    useEffect(() => {
        // Abre todos los grupos inicialmente
        if (menuStatus === 'succeeded') {
            const initialOpenGroups = {};
            menuItems.forEach(item => {
                if (item.endpoint) {
                    initialOpenGroups[item.endpoint] = true; // Establece el grupo como abierto
                }
            });
            setOpenGroups(initialOpenGroups);
        }
    }, [menuStatus, menuItems]);

    // Función para obtener el ícono correcto basado en el código del ítem
    const getIconForItem = (codigo) => {
        switch (codigo) {
            case 'RAIZ':
                return <FaHome />;
            case 'TABLAS':
                return <FaTable />;
            case 'ENSAYOS':
                return <FaFlask />;
            case 'MNUMETODO':
                return <FaTools />;
            case 'MNUPERSONAL':
                return <FaUser />;
            case 'MNUSECTOR':
                return <FaIndustry />;
            case 'MNUUM':
                return <FaRuler />;
            case 'MNICIVA':
                return <FaCashRegister />;
            case 'MNUCPAG':
            case 'PRV':
                return <FaCity />;
            case 'TMUESTRA':
                return <FaVial />;
            case 'MNULAB':
                return <FaFlask />;
            case 'MNURESULTADOS':
                return <FaTable />;
            default:
                return null;
        }
    };

    // Función para manejar el click en cada ítem del menú
    const handleMenuClick = (codigo) => {
        switch (codigo) {
            case 'PRV': // Cuando hacen click en el ítem Provincias
                navigate('/provincias'); // Redirigir a la ruta '/provincias'
                break;
            case 'ENSAYOS':
                navigate('/ensayos');
                break;
            case 'MNICIVA':
                navigate('/condicionFiscal');
                break;
            case 'RAIZ':
                navigate('/menu');
                break;
            // Agrega más casos para otras rutas
            default:
                break;
        }
    };

    const toggleGroup = (endpoint) => {
        setOpenGroups((prev) => ({ ...prev, [endpoint]: !prev[endpoint] }));
    };

    return (
        <div>
            <div className={styles.sidebar}>
                <div className={styles.menuContainer}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <ul>
                        {/* Renderiza el ítem principal "RAIZ" sin flechita */}
                        <li onClick={() => handleMenuClick('RAIZ')}>
                            {getIconForItem('RAIZ')} Menu Principal
                        </li>
                        {/* Agrupa y renderiza ítems por endpoint */}
                        {Array.from(new Set(menuItems.map(item => item.endpoint))) // Obtiene los endpoints únicos
                            .filter(endpoint => endpoint) // Filtra los endpoints que no son nulos
                            .map((endpoint, index) => {
                                const itemsInGroup = menuItems.filter(item => item.endpoint === endpoint);
                                return (
                                    <li key={index}>
                                        <div onClick={() => toggleGroup(endpoint)} style={{ display: 'flex', alignItems: 'center' }}>
                                            {getIconForItem(endpoint)}
                                            <span> {endpoint}</span>
                                            <span style={{ marginLeft: '10px' }}> {openGroups[endpoint] ? '▼' : '▲'}</span>
                                        </div>
                                        {openGroups[endpoint] && (
                                            <ul className={styles.submenu}>
                                                {itemsInGroup.map((item, subIndex) => (
                                                    <li key={subIndex} onClick={() => handleMenuClick(item.codigo)}>
                                                        {getIconForItem(item.codigo)}  {item.descripcion}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                    </ul>
                    {menuError && <div>Error al cargar el menú: {menuError}</div>}
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
