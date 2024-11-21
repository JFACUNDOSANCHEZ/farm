import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUnidades, selectUnidades, selectUnidadesStatus, selectUnidadesError } from '../../redux/slices/unidadesSlice';
import styles from './Unidades.module.css';

const Unidades = () => {
  const dispatch = useDispatch();
  const unidades = useSelector(selectUnidades);
  const status = useSelector(selectUnidadesStatus);
  const error = useSelector(selectUnidadesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUnidades());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p className={styles.loading}>Cargando datos...</p>;
  if (status === 'failed') return <p className={styles.error}>Error al cargar los datos: {error}</p>;
  if (!unidades || unidades.length === 0) return <p className={styles.noData}>No hay unidades disponibles.</p>;
console.log(unidades);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Lista de Unidades</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Código</th>
            </tr>
          </thead>
          <tbody>
            {unidades.map((unidad, index) => (
              <tr key={index}>
                <td>{unidad.descripcion}</td>
                <td>{unidad.codigo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Unidades;
