// componentes/Layout/Layout.jsx
import React from 'react';
import Menu from '../menu/Menu'; // Importas tu menú
import Nav from '../nav/Nav';    // Y tu componente de navegación
import styles from './Layout.module.css'; // Importa los estilos
import Filtros from '../filtros/Filtros';
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Menu className={styles.menu} />   {/* Aplicar clase al menú */}
      <div className={styles.mainContent}> {/* Contenedor para el contenido principal */}
        <Nav />    {/* Renderiza la barra de navegación */}
        <Filtros />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
