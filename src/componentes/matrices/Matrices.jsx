import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatrices } from '../../redux/slices/matricesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faTree, faFlask, faWind, faFire, faMountain } from '@fortawesome/free-solid-svg-icons';
import styles from './MatricesList.module.css';

const Matrices = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.matrices);
  const [viewMode, setViewMode] = useState('table');

  useEffect(() => {
    dispatch(fetchMatrices());
  }, [dispatch]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'table' : 'cards'));
  };

  const getIconByDescription = (descripcion) => {
    if (descripcion.includes('AGUA')) return faWater;
    if (descripcion.includes('HYS')) return faTree;
    if (descripcion.includes('MEDIO AMBIENTE')) return faFlask;
    if (descripcion.includes('AIRE')) return faWind;
    if (descripcion.includes('FREATICO')) return faMountain;
    if (descripcion.includes('BARRO') || descripcion.includes('SUELO')) return faFire;
    return faFlask; // Ícono predeterminado
  };

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error al cargar los datos: {error}</p>;
  if (!list || list.length === 0) return <p className={styles.noData}>No hay condiciones de pago disponibles.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Matrices</h2>
        <button onClick={toggleViewMode} className={styles.toggleButton}>
          Ver {viewMode === 'cards' ? 'Tabla' : 'Cards'}
        </button>
      </div>

      {viewMode === 'cards' ? (
        <div className={styles.cardContainer}>
          {list.map((metodo, index) => (
            <div key={index} className={styles.card}>
              <FontAwesomeIcon
                icon={getIconByDescription(metodo.descripcion)}
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>{metodo.descripcion}</h3>
              <p className={styles.cardCode}>Nivel: {metodo.muestra.trim()}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Ícono</th>
              <th>Nombre</th>
              <th>Código</th>
              <th>Nivel</th>
            </tr>
          </thead>
          <tbody>
            {list.map((metodo, index) => (
              <tr key={index}>
                <td>
                  <FontAwesomeIcon
                    icon={getIconByDescription(metodo.descripcion)}
                    className={styles.tableIcon}
                  />
                </td>
                <td>{metodo.descripcion}</td>
                <td>{metodo.codigo.trim()}</td>
                <td>{metodo.muestra.trim()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Matrices;
