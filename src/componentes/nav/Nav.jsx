import React, { useState, useEffect, useRef } from 'react';
import styles from './Nav.module.css'; // Importando el CSS Module
import { FaHome,FaAd, FaChevronDown, FaSteam  } from 'react-icons/fa';
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
    location.pathname === '/matrices' ? 'Matrices' : 
    location.pathname === '/estadosOT' ? 'Estados OT' : 
    location.pathname === '/Tipos' ? 'Tipos De Muestras' : 
    location.pathname === '/Metodos' ? 'Metodos' : 
    location.pathname === '/usuarios' ? 'Usuarios' : 
    location.pathname === '/condicionDePago' ? 'Condicion De Pago' : 
    location.pathname === '/ensayos' ? 'Ensayos' :  
    location.pathname === '/condicionFiscal' ? 'Condición Fiscal' : 
    location.pathname === '/Clientes' ? 'Clientes' : 
    location.pathname === '/sectores' ? 'Sectores' : 
    '';

  return (
    <nav className={styles.navbar}>
      <div className={styles.breadcrumbs}>
        <span onClick={() => navigate('/menu')}><FaHome className="icon" /> Inicio</span> / <span>{currentPath}</span>
      </div>

{/* <div>
  <button><FaHome/> </button>
  <button><FaAd/></button>
  <button>hola </button>
</div> */}
    <div className={styles.user}>
    
      <div className={styles.userOptions} onClick={toggleMenu} ref={menuRef}>
      
         <FaChevronDown className="icon" />
        {/* <span>US</span> */}
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
