import React, { useEffect } from 'react';
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

    useEffect(() => {
        if (menuStatus === 'idle') {
            dispatch(fetchMenuItems());
        }
    }, [menuStatus, dispatch]);

    if (menuStatus === 'loading') {
        return <div>Cargando menú...</div>;
    }

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
            case 'RAIZ':
                navigate('/menu');
                break;
            // Agrega más casos para otras rutas
            default:
                break;
        }
    };

    return (
        <div>
            <div className={styles.sidebar}>
                <div className={styles.menuContainer}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} onClick={() => handleMenuClick(item.codigo)}>
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
