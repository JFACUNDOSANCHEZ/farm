import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatrices } from '../../redux/slices/matricesSlice'; // Asegúrate de que la ruta es correcta
import styles from './MatricesList.module.css'; // Importa los estilos

const Matrices = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.matrices);

  // Llama a la acción fetchMatrices cuando el componente se monta
  useEffect(() => {
    dispatch(fetchMatrices());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Cargando matrices...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Lista de Matrices</h2>
    <div className={styles.cardContainer}>
        {list.map((matriz, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.cardDescription}><strong>
              {matriz.descripcion}
              </strong> 
              </p>
            <p className={styles.cardCode}><strong>Código:</strong> {matriz.codigo.trim()}</p>
            <p className={styles.cardSample}><strong>Muestra:</strong> {matriz.muestra.trim()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matrices;
