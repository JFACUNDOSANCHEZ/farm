import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2024 MiEmpresa. Todos los derechos reservados.</p>
        <div className={styles.socials}>
          <a href="#facebook" className={styles.footerLink}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#twitter" className={styles.footerLink}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#instagram" className={styles.footerLink}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}
