import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEstadosOT } from '../../redux/slices/estadosOTSlice';
import styles from './Estados.module.css';
import { FaClipboardList, FaCheckCircle, FaHourglassHalf, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

const EstadosOT = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.estadosOT);

  useEffect(() => {
    dispatch(fetchEstadosOT());
  }, [dispatch]);

  // Función para asignar un ícono y color en función de la descripción
  const getIconByDescription = (descripcion) => {
    switch (descripcion) {
      case 'Abierta':
        return <FaExclamationTriangle className={styles.cardImage} style={{ color: '#666' }} />; // Naranja
      case 'Completada':
        return <FaCheckCircle className={styles.cardImage} style={{ color: '#666' }} />; // Verde
      case 'Informada':
        return <FaInfoCircle className={styles.cardImage} style={{ color: '#666' }} />; // Azul
      case 'Parcial':
        return <FaHourglassHalf className={styles.cardImage} style={{ color: '#666' }} />; // Gris
      default:
        return <FaClipboardList className={styles.cardImage} style={{ color: '#666' }} />; // Color por defecto
    }
  };

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div>

    <div className={styles.container}>
      <h2 className={styles.title}>EstadosOT</h2>
      <div className={styles.cardContainer}>
        {list.map((metodo, index) => (
          <div key={index} className={styles.card}>
            {getIconByDescription(metodo.descripcion)}
            <h2 className={styles.cardTitle}>{metodo.descripcion}</h2>
            <p className={styles.cardCode}>Código: {metodo.codigo}</p>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default EstadosOT;
