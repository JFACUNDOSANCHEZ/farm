import React from 'react';
import Menu from '../menu/Menu'; // Importas tu menú
import Nav from '../nav/Nav';    // Y tu componente de navegación
import styles from './Layout.module.css'; // Importa los estilos
import Filtros from '../filtros/Filtros';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation(); // Mueve useLocation dentro del componente

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}> {/* Contenedor para el contenido principal */}
        <Menu className={styles.menu} />   {/* Aplicar clase al menú */}
        <Nav /> {/* Renderiza la barra de navegación */}
        
        <div className={styles.filtro}>
        { location.pathname === '/ensayos' ? null : 
        <Filtros />
        }

          
          
          
               
        </div>
        
        <main className={styles.contenido}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
