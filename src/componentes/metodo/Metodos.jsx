import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMetodos } from '../../redux/slices/metodoSlice'; 
import styles from './Metodos.module.css';

const Metodos = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.metodos);

  useEffect(() => {
    dispatch(fetchMetodos());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
      
      </div>
      <div className={styles.mainContent}>
        <div className={styles.contain}>
          <h2 className={styles.title}>Lista de Métodos</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Código</th>
              </tr>
            </thead>
            <tbody>
              {list.map((metodo, index) => (
                <tr key={index}>
                  <td>{metodo.descripcion}</td>
                  <td>{metodo.codigo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Metodos;
