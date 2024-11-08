import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems, selectMenuItems, selectMenuStatus, selectMenuError } from '../../redux/slices/menuSlice.jsx';
import { FaAdjust, FaAffiliatetheme , FaHome, FaFlask, FaTable, FaUser, FaTools, FaIndustry, FaRuler, FaCashRegister, FaCity, FaVial, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './MenuPage.module.css';
import logo from '/logo.jpg.jpeg';

function MenuPage() {
    const dispatch = useDispatch();
    const menuItems = useSelector(selectMenuItems);
    const menuStatus = useSelector(selectMenuStatus);
    const menuError = useSelector(selectMenuError);
    const navigate = useNavigate();

    const [openGroups, setOpenGroups] = useState({});
    const subMenuRefs = useRef({});

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
                    initialOpenGroups[item.endpoint] = false;
                }
            });
            setOpenGroups(initialOpenGroups);
        }
    }, [menuStatus, menuItems]);

    const getIconForItem = (codigo) => {
        switch (codigo) {
            case 'RAIZ': return <FaHome />;
            case 'TABLAS': return <FaAdjust />;
            case 'ENSAYOS': return <FaFlask />;
            case 'MNUMETODO': return <FaTools />;
            case 'MNUPERSONAL': return <FaUser />;
            case 'MNUSECTOR': return <FaIndustry />;
            case 'MNUUM': return <FaRuler />;
            case 'MNICIVA': return <FaCashRegister />;
            case 'MNUCPAG':
            case 'PRV': return <FaCity />;
            case 'TMUESTRA': return <FaVial />;
            case 'MNULAB': return <FaFlask />;
            case 'MNURESULTADOS': return <FaTable />;
            case 'MNUCOTIMUES': return <FaIndustry />;
            case 'ESTADOSOT': return <FaAdjust />;
            case 'MNUMATRIZ': return <FaAffiliatetheme />;
            case 'MNUCLI': return <FaAffiliatetheme />;
            case 'MODULOCLI': return <FaVial />;
            default: return null;
        }
    };

    const handleMenuClick = (codigo) => {
        switch (codigo) {
            case 'PRV': navigate('/provincias'); break;
            case 'ENSAYOS': navigate('/ensayos'); break;
            case 'MNICIVA': navigate('/condicionFiscal'); break;
            case 'MNUCPAG': navigate('/condicionDePago'); break;
            case 'RAIZ': navigate('/menu'); break;
            case 'MNUPERSONAL': navigate('/usuarios'); break;
            case 'MNUMATRIZ': navigate('/matrices'); break;
            case 'MNUMETODO': navigate('/Metodos'); break;
            case 'MNUSECTOR': navigate('/sectores'); break;
            case 'ESTADOSOT': navigate('/estadosOT'); break;
            case 'MNUUM': navigate('/Clientes'); break;
            case 'TMUESTRA': navigate('/Tipos'); break;
            default: break;
        }
    };

    const toggleGroup = (endpoint) => {
        setOpenGroups(prev => ({ ...prev, [endpoint]: !prev[endpoint] }));
    };

    const groupedMenu = menuItems
        .filter(item => item.endpoint === 'RAIZ')
        .reduce((acc, mainItem) => {
            const subItems = menuItems.filter(subItem => subItem.endpoint === mainItem.codigo);
            acc[mainItem.codigo] = { ...mainItem, subItems };
            return acc;
        }, {});

    return (
        <div className={styles.sidebar}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.menuContainer}>
                <ul>
                <li className={styles.menuItem} onClick={() => handleMenuClick('RAIZ')}>
    {getIconForItem('RAIZ')}
    <span style={{ marginLeft: '5px' }}>Menu Principal</span>
</li>

                    {Object.entries(groupedMenu).map(([key, group]) => {
                        if (!subMenuRefs.current[key]) {
                            subMenuRefs.current[key] = React.createRef();
                        }
                        return (
                            <li key={key}>
                                <div onClick={() => toggleGroup(key)} style={{ display: 'flex', alignItems: 'start' }}>
                                    {getIconForItem(key)}
                                    <span>{group.descripcion}</span>
                                    <span style={{ marginLeft: '5px' }}>
                                        {openGroups[key] ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </div>
                                <ul
                                    ref={subMenuRefs.current[key]}
                                    style={{
                                        height: openGroups[key] ? `${subMenuRefs.current[key].current.scrollHeight}px` : '0px'
                                    }}
                                    className={styles.submenu}
                                >
                                  {group.subItems.map((subItem, subIndex) => (
    <li key={subIndex} className={styles.menuItem} onClick={() => handleMenuClick(subItem.codigo)}>
        {getIconForItem(subItem.codigo)}
        <span style={{ marginLeft: '5px' }}>{subItem.descripcion}</span>
    </li>
))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
                {menuError && <div className={styles.menuError}>Menu no disponible</div>}
            </div>
        </div>
    );
}

export default MenuPage;
