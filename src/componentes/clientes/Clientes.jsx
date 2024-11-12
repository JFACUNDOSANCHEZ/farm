import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClientes } from '../../redux/slices/clientesSlice.jsx';
import styles from './Clientes.module.css'; 

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector(state => state.clientes.list);
  const loading = useSelector(state => state.clientes.loading);
  const error = useSelector(state => state.clientes.error);

  useEffect(() => {
    dispatch(fetchClientes());
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(clientes);
  

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
      </div>
      <div className={styles.mainContent}>     
        <div className={styles.contain}>
          <h2 className={styles.title}>Clientes</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Legajo</th>
                <th>Nombre</th>
                <th>Apellido</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((item, index) => (
                <tr key={index}>
                  <td>{item.legajo}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
