import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTipos } from '../../redux/slices/tiposSlice';
import styles from './Tipos.module.css'; // Importa el CSS Module

const Tipos = () => {
  const dispatch = useDispatch();
  const { tipos: list, status, error } = useSelector((state) => state.tipos);

  useEffect(() => {
    dispatch(fetchTipos());
  }, [dispatch]);

  if (status === 'loading') return <div>Cargando...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  console.log(list);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {/* Aquí puedes agregar contenido del menú si es necesario */}
      </div>
      <div className={styles.mainContent}>
        <div className={styles.contain}>
          <h2 className={styles.title}>Tipos de muestras</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Porcentaje IIBB</th>
                <th>Código</th>
              
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{item.descripcion}</td>
                  <td>{item.porcentajeIIBB}</td>
                  <td>{item.codigo}</td>
             
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tipos;
