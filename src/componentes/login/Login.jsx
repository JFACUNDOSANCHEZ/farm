import React from 'react';
import styles from './Login.module.css'; // Importa el CSS Module
import { Link } from 'react-router-dom';

export default function Login() {
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
      
      <section className={styles.loginSection}>
        <h2 className={styles.loginTitle}>Iniciar Sesión</h2>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
            <input type="email" id="email" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input type="password" id="password" className={styles.input} required />
          </div>
          <button type="submit" className={styles.ctaButton}>Ingresar</button>
        </form>
        <p className={styles.footerText}>
          ¿No tienes una cuenta? <Link to="/registro" className={styles.navLink}>Regístrate aquí</Link>
        </p>
      </section>
      </section>


      {/* Call to Action */}
      <section id="cta" className={styles.cta}>
          {/* <h2>¿Listo para empezar?</h2> */}
          <Link to={'/Login'}>
          <br /><br /><br />
          {/* <button className={styles.ctaButton}>Ingresa Ahora</button> */}
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