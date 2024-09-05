import React from 'react'
import styles from './Nav.module.css'
export default function Nav() {
  
  const handleScrollToFooter = () => {
    const footerElement = document.getElementById('cta');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav}>
      <select className={styles.customSelect}>
        <option value="en">Español</option>
      </select>
      <a href="#contact" className={styles.navLink}>Contacto</a>
      <a onClick={handleScrollToFooter} className={styles.buttonstar}>Ingresar</a>
    </nav>
  );
}
