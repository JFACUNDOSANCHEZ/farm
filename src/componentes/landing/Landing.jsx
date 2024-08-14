import React from 'react';
import styles from './Landing.module.css'; // Importa el CSS Module
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.logo} src="https://seeklogo.com/images/L/laboratorio-della-farmacia-logo-72F5D5832A-seeklogo.com.gif" width={'50px'} alt="" />
            </div>
          <nav className={styles.nav}>
            <a href="#features" className={styles.navLink}>Contacto</a>
            <a href="#cta" className={styles.navLink}>Empieza Ahora</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
        
          {/* <h1 className={styles.heroPa}>Bienvenido </h1>
          <p className={styles.heroPa}>Registra y gestiona tus muestras farmacéuticas con facilidad y exactitud.</p> 
          */}
        </section>


        {/* Call to Action */}
        <section id="cta" className={styles.cta}>
          <h2>¿Listo para empezar?</h2>
          <Link to={'/Login'}>
          <button className={styles.ctaButton}>Ingresa Ahora</button>
          </Link>
        </section>
      </div>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 MiEmpresa. Todos los derechos reservados.</p>
          <div className={styles.socials}>
            <a href="#facebook" className={styles.footerLink}>Facebook</a>
            <a href="#twitter" className={styles.footerLink}>Twitter</a>
            <a href="#instagram" className={styles.footerLink}>Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}