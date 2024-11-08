import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatrices } from '../../redux/slices/matricesSlice'; // Asegúrate de que la ruta es correcta
import styles from './MatricesList.module.css'; // Importa los estilos

const Matrices = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.matrices);
  const [viewMode, setViewMode] = useState('cards'); // Estado para alternar entre 'cards' y 'table'

  useEffect(() => {
    dispatch(fetchMatrices());
  }, [dispatch]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'table' : 'cards'));
  };

  if (loading) return <p className={styles.loading}>Cargando matrices...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

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
          {list.map((matriz, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.cardDescription}><strong>{matriz.descripcion}</strong></p>
              <p className={styles.cardCode}><strong>Código:</strong> {matriz.codigo.trim()}</p>
              <p className={styles.cardSample}><strong>Muestra:</strong> {matriz.muestra.trim()}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Código</th>
              <th>Muestra</th>
            </tr>
          </thead>
          <tbody>
            {list.map((matriz, index) => (
              <tr key={index}>
                <td>{matriz.descripcion}</td>
                <td>{matriz.codigo.trim()}</td>
                <td>{matriz.muestra.trim()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Matrices;
