import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems, selectMenuItems, selectMenuStatus, selectMenuError } from '../../redux/slices/menuSlice.jsx';
import { FaHome, FaFlask, FaTable, FaUser, FaTools, FaIndustry, FaRuler, FaCashRegister, FaCity, FaVial } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './MenuPage.module.css';
import logo from '../../../public/logo.jpg.jpeg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function MenuPage() {
    const dispatch = useDispatch();
    const menuItems = useSelector(selectMenuItems);
    const menuStatus = useSelector(selectMenuStatus);
    const menuError = useSelector(selectMenuError);
    const navigate = useNavigate();

    // Estado para manejar la expansión de grupos de menú
    const [openGroups, setOpenGroups] = useState({});

    useEffect(() => {
        if (menuStatus === 'idle') {
            dispatch(fetchMenuItems());
        }
    }, [menuStatus, dispatch]);

    useEffect(() => {
        if (menuStatus === 'succeeded') {
            const initialOpenGroups = {};
            menuItems.forEach(item => {
                if (item.endpoint) {
                    initialOpenGroups[item.endpoint] = false; // Inicialmente, todos cerrados
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
                case 'MNUCOTIMUES':
                return <FaIndustry />;
            default:
                return null;
        }
    };

    // Función para manejar el click en cada ítem del menú
    const handleMenuClick = (codigo) => {
        switch (codigo) {
            case 'PRV': // Redirigir a la ruta '/provincias'
                navigate('/provincias');
                break;
            case 'ENSAYOS':
                navigate('/ensayos');
                break;
            case 'MNICIVA':
                navigate('/condicionFiscal');
                break;
            case 'MNUCPAG':
                navigate('/condicionDePago');
                break;
            case 'RAIZ':
                navigate('/menu');
                break;
            default:
                break;
        }
    };

    // Función para manejar la expansión y colapso de un grupo
    const toggleGroup = (endpoint) => {
        setOpenGroups(prev => ({ ...prev, [endpoint]: !prev[endpoint] }));
    };

    // Agrupar los ítems en las categorías principales primero
    const groupedMenu = {
        Laboratorio: {
            descripcion: '☢ Laboratorio',
            subItems: menuItems.filter(item => item.endpoint === 'MNULAB'),
        },
        Tablas: {
            descripcion: '〽 Tablas',
            subItems: menuItems.filter(item => item.endpoint === 'TABLAS'),
        }
    };

    return (
        <div>
            <div className={styles.sidebar}>
                    <img src={logo} alt="logo" className={styles.logo} />
                <div className={styles.menuContainer}>
                    <ul>
                        {/* Renderiza el ítem principal "Menu Principal" sin flechita */}
                        <li onClick={() => handleMenuClick('RAIZ')}>
                            {getIconForItem('RAIZ')} Menu Principal
                        </li>
                        {/* Renderiza las secciones agrupadas manualmente */}
                        {Object.entries(groupedMenu).map(([key, group], index) => (
                            <li key={index}>
                                <div onClick={() => toggleGroup(key)} style={{ display: 'flex', alignItems: 'start' }}>
                                  
                                  
                                    {getIconForItem(key)}
                                    <span>{group.descripcion}</span>
                                    <span style={{ marginLeft: '5px' }}>
                {openGroups[key] ? <FaChevronUp /> :  <FaChevronDown />}
            </span>
                                </div>
                                {/* Renderiza los sub-items si el grupo está abierto */}
                                {openGroups[key] && group.subItems && (
                                    <ul className={styles.submenu}>
                                        {group.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex} onClick={() => handleMenuClick(subItem.codigo)}>
                                                {getIconForItem(subItem.codigo)} {subItem.descripcion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
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

