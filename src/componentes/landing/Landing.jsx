import React from 'react';
import styles from './Landing.module.css'; // Importa el CSS Module
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.logo} src="https://static.vecteezy.com/system/resources/previews/005/366/461/non_2x/pharmacy-logo-drug-store-logo-vector.jpg" width={'100px'} alt="" />
            </div>
          <nav className={styles.nav}>
            <a href="#features" className={styles.navLink}>Contacto</a>
            <a href="#cta" className={styles.navLink}>Empieza Ahora</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
        
         {/* <h1 className={styles.heroPa}>Bienvenido </h1> */}
          {/* <p className={styles.heroPa}>Registra y gestiona tus muestras farmacéuticas con facilidad y exactitud.</p>  */}
        
        </section>
        <section className={styles.cara}>
      <div className={styles.feature}>
        <img src="https://static.vecteezy.com/system/resources/previews/014/932/882/non_2x/document-check-icon-outline-form-paper-vector.jpg" alt="Característica 1" />
        <div className={styles.text}>
          <h3>Registrar muestras farmacéuticas fácilmente.</h3>
          {/* <p>Registrar nuevas muestras farmacéuticas fácilmente..</p> */}
        </div>
      </div>
      <div className={styles.feature}>
        <img src="https://www.kindpng.com/picc/m/178-1786850_maps-icono-mapa-hd-png-download.png" alt="Característica 2" />
        <div className={styles.text}>
          <h3>Seguimiento del estado y ubicación de las muestras</h3>
       
        </div>
      </div>
      <div className={styles.feature}>
        <img src="https://static.vecteezy.com/system/resources/previews/015/605/322/non_2x/graph-chart-report-icon-outline-style-vector.jpg" alt="Característica 3" />
        <div className={styles.text}>
          <h3> Informes detallados sobre el manejo de las muestras</h3>
         
        </div>
      </div>
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