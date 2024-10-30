import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSectores } from '../../redux/slices/sectoresSlice'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faBuilding } from '@fortawesome/free-solid-svg-icons'; 
import styles from './Sectores.module.css';

const iconMapping = {
  true: faFlask,   // Ícono para sectores de laboratorio
  false: faBuilding // Ícono para otros sectores
};

const Sectores = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.sectores);

  useEffect(() => {
    dispatch(fetchSectores());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  // Agrupar sectores por flagLab
  const sectoresTrue = list.filter(metodo => metodo.flagLab);
  const sectoresFalse = list.filter(metodo => !metodo.flagLab);

  return (
    <>

    <div className={styles.container}>

      <h2 className={styles.subtitle}>Sectores de Laboratorio</h2>
      <div className={styles.cardContainer}>
        {sectoresTrue.map((metodo, index) => (
          <div key={index} className={styles.card}>
            <FontAwesomeIcon 
              icon={iconMapping[metodo.flagLab]} 
              className={styles.cardIcon}
              size="2x" 
              />
            <h3 className={styles.cardTitle}>{metodo.descripcion}</h3>
            <p className={styles.cardCode}>Código: {metodo.codigo.trim()}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.subtitle}>Otros Sectores</h2>
      <div className={styles.cardContainer}>
        {sectoresFalse.map((metodo, index) => (
          <div key={index} className={styles.card}>
            <FontAwesomeIcon 
              icon={iconMapping[metodo.flagLab]} 
              className={styles.cardIcon}
              size="2x" 
              />
            <h3 className={styles.cardTitle}>{metodo.descripcion}</h3>
            <p className={styles.cardCode}>Código: {metodo.codigo.trim()}</p>
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

export default Sectores;
