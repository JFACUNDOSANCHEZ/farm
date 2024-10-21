import React from 'react';
import styles from './Formulario.module.css'; // Importa los estilos CSS Modules
import Nav from '../nav/Nav.jsx'
import MenuPage from '../menu/Menu.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
const Formulario = () => {

 



  return (
    <div className={styles.container}>
    <div className={styles.menu}>
  
    </div>
    <div className={styles.mainContent}>
   
    <div className={styles.formContainer}>
      <h2>Nuevo elemento - Proveedor</h2>
      <form>
        <div className={styles.formGroup}>
          <label>Nombre</label>
          <input type="text" name="nombre" />
        </div>

        <div className={styles.formGroup}>
          <label>Tipo de tercero</label>
          <select name="tipoTercero">
            <option>----</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Número Administrativo</label>
          <input type="text" name="numeroAdministrativo" />
        </div>

        <div className={styles.formGroup}>
          <label>Teléfono</label>
          <input type="text" name="telefono" />
        </div>

        <div className={styles.formGroup}>
          <label>Correo Electrónico</label>
          <input type="email" name="email" />
        </div>

        <div className={styles.formGroup}>
          <label>Ciudad</label>
          <input type="text" name="ciudad" />
        </div>

        <div className={styles.formGroup}>
          <label>Estado</label>
          <input type="text" name="estado" />
        </div>

        <div className={styles.formGroup}>
          <label>Comentarios</label>
          <textarea name="comentarios" />
        </div>

        <div className={styles.formGroup}>
          <label>Imágenes</label>
          <input type="file" />
        </div>

        <div className={styles.formGroup}>
          <label>Activo</label>
          <select name="activo">
            <option>Sí</option>
            <option>No</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>Añadir</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Formulario;
