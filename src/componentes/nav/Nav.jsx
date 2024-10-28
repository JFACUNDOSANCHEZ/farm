import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css'; // Importando el CSS Module
import { FaHome, FaSearch, FaChevronDown } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); 
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const currentPath = 
    location.pathname === '/provincias' ? 'Provincias' : 
    location.pathname === '/condicionDePago' ? 'Condicion De Pago' : 
    location.pathname === '/ensayos' ? 'Ensayos' :  
    location.pathname === '/condicionFiscal' ? 'Condición Fiscal' : 
    '';

  return (
    <nav className={styles.navbar}>
      <div className={styles.breadcrumbs}>
        <span onClick={() => navigate('/menu')}><FaHome className="icon" /> Inicio</span> / <span>{currentPath}</span>
      </div>


    <div className={styles.user}>
    
      <div className={styles.userOptions} onClick={toggleMenu} ref={menuRef}>
      
        <span>US</span>
        <FaChevronDown className="icon" />
        {isMenuOpen && (
          <div className={styles.dropdown}>
            <button onClick={handleLogout} className={styles.dropdownItem}>Cerrar sesión</button>
            <button className={styles.dropdownItem}>Configuración</button>
          </div>
        )}
      
      </div>
        </div>
    </nav>
  );
};

export default NavBar;
