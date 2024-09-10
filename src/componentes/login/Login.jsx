import React from 'react';
import styles from './Login.module.css'; // Importa el CSS Module
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
export default function Login() {
  return (
    <div className={styles.loginContainer}>
    <div className={styles.content}>
  <Nav></Nav>

      
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
    
    </div>
    
  
  </div>
  );
}