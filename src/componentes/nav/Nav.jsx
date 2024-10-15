import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css';
import { FaHome, FaSearch } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia para el menú

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

  return (
    <nav className={styles.navbar}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <span><FaHome className="icon" /> Inicio</span> / <span>Gestión</span> / <span>Proveedores</span>
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
        <span>GL</span>
        <i className="fas fa-caret-down"></i>
        {isMenuOpen && (
          <div className={styles.dropdown}>
            <button className={styles.dropdownItem}>Cerrar sesión</button>
            <button className={styles.dropdownItem}>Configuración</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
