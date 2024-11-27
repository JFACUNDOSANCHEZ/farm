import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonal } from '../../redux/slices/personalSlice.jsx';
import styles from './Personal.module.css';

const Personal = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.personal); // Cambiar a personal
  const [viewMode, setViewMode] = useState('table'); // Estado para alternar entre cards y table

  useEffect(() => {
    dispatch(fetchPersonal()); // Cambiar a fetchPersonal
  }, [dispatch]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'table' : 'cards'));
  };

  if (loading === 'loading') return <p className={styles.loading}>Cargando datos...</p>;
  if (error === 'failed') return <p className={styles.error}>Error al cargar los datos: {error}</p>;
  if (!list || list.length === 0) return <p className={styles.noData}>No hay personal disponible.</p>; // Cambiar mensaje

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.contentTitle}>

        <h2 className={styles.title}> Personal</h2> 
        </div>
        <button onClick={toggleViewMode} className={styles.toggleButton}>
          Ver {viewMode === 'cards' ? 'Tabla' : 'Cards'}
        </button>
      </div>

      {viewMode === 'cards' ? (
        <div className={styles.cardContainer}>
          {list.map((persona, index) => (
            <div key={index} className={styles.card}>
             
              <h3 className={styles.cardTitle}>{persona.nombre}</h3>
             
              <p className={styles.cardCode}>Nivel: {persona.apellido}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Puesto</th>

              <th>Legajo</th>
              
            </tr>
          </thead>
          <tbody>
            {list.map((persona, index) => (
              <tr key={index}>
                <td>{persona.nombre}</td>
      
                <td>{persona.apellido}</td>
                <td>{persona.notas}</td>
                <td>
                {persona.legajo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Personal;
