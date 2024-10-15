import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css';
import { FaHome, FaSearch, FaChevronDown } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import Logout from './logout';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // 
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const currentPath = 
  location.pathname === '/provincias' ? 'Provincias' : 
  location.pathname === '/ensayos' ? 'Ensayos' : 
  ''; // Ruta predeterminada



  return (
    <nav className={styles.navbar}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <span onClick={() => navigate('/menu')}><FaHome className="icon" /> Inicio</span> / <span>{currentPath}</span>
      </div>

      {/* Botones de Acciones */}
      <div className={styles.actions}>
        <button className={styles.actionButton}>+</button>
        <button className={styles.actionButton}><FaHome className="icon" /></button>
        <button className={styles.actionButton}><FaSearch className="icon" /></button>
      </div>

      {/* Searchbar */}
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Buscar..." className={styles.searchbar} />
        <button className={styles.actionButton}>
          <FaSearch className="icon" />
        </button>
      </div>

      {/* Opciones de Usuario */}
      <div className={styles.userOptions} onClick={toggleMenu} ref={menuRef}>
        <span>US</span>
        <FaChevronDown className="icon" />
        {isMenuOpen && (
          <div className={styles.dropdown}>
             
            <button onClick={() => <Logout />} className={styles.dropdownItem}>Cerrar sesión</button>
            <button className={styles.dropdownItem}>Configuración</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
