import React from 'react'
import styles from './Nav.module.css'
export default function Nav() {
  return (
    <nav className={styles.nav}>
    <select className={styles.customSelect}>
      <option value="en">Español</option>
    </select>
    <a className={styles.navLink}>Contacto</a>
    <a className={styles.buttonstar}>Ingresar</a>
  </nav>
  )
}
