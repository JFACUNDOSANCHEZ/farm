import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSectores } from '../../redux/slices/sectoresSlice'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faBuilding, faShieldAlt, faLeaf, faBacteria, faTools, faFire } from '@fortawesome/free-solid-svg-icons'; 
import styles from './Sectores.module.css';

// Mapeo de íconos específicos en función de la descripción
const iconMapping = {
  LABORATORIO: { icon: faFlask, color: '#6c757d' },           // Gris
  'HIGIENE Y SEGURIDAD': { icon: faShieldAlt, color: '#007bff' }, // Azul
  MICROBIOLOGIA: { icon: faBacteria, color: '#28a745' },        // Verde
  CROMATOGRAFIA: { icon: faFlask, color: '#ff6347' },           // Tomate
  ADMINISTRACION: { icon: faBuilding, color: '#333' },          // Gris oscuro
  'MEDIO AMBIENTE': { icon: faLeaf, color: '#3cb371' },         // Verde medio
  'SERVICIOS DE INGENIERIA': { icon: faTools, color: '#ffd700' }, // Dorado
  'CLARKE FIRE': { icon: faFire, color: '#dc143c' },            // Carmesí
};

// Función para obtener el ícono y color según la descripción
const getIcon = (descripcion) => iconMapping[descripcion] || { icon: faBuilding, color: '#333' }; // Predeterminado

const Sectores = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.sectores);

  useEffect(() => {
    dispatch(fetchSectores());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  const sectoresTrue = list.filter(metodo => metodo.flagLab);
  const sectoresFalse = list.filter(metodo => !metodo.flagLab);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sectores de Laboratorio</h2>
      <div className={styles.cardContainer}>
        {sectoresTrue.map((metodo, index) => {
          const { icon, color } = getIcon(metodo.descripcion);
          return (
            <div key={index} className={styles.card}>
              <FontAwesomeIcon 
                icon={icon} 
                style={{ color }} 
                className={styles.cardIcon}
                size="2x" 
              />
              <h3 className={styles.cardTitle}>{metodo.descripcion}</h3>
              <p className={styles.cardCode}>Código: {metodo.codigo.trim()}</p>
            </div>
          );
        })}
      </div>

      <h2 className={styles.subtitle}>Otros Sectores</h2>
      <div className={styles.cardContainer}>
        {sectoresFalse.map((metodo, index) => {
          const { icon, color } = getIcon(metodo.descripcion);
          return (
            <div key={index} className={styles.card}>
              <FontAwesomeIcon 
                icon={icon} 
                style={{ color }} 
                className={styles.cardIcon}
                size="2x" 
              />
              <h3 className={styles.cardTitle}>{metodo.descripcion}</h3>
              <p className={styles.cardCode}>Código: {metodo.codigo.trim()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sectores;
