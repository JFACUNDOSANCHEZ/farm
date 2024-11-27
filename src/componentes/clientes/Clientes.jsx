import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClientes } from '../../redux/slices/clientesSlice.jsx';
import styles from './Clientes.module.css'; 

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector(state => state.clientes.list);
  const loading = useSelector(state => state.clientes.loading);
  const error = useSelector(state => state.clientes.error);

  const [viewMode, setViewMode] = useState('table');

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'cards' ? 'table' : 'cards'));
  };

  useEffect(() => {
    dispatch(fetchClientes());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;
  if (!clientes || clientes.length === 0) return <p className={styles.noData}>No hay clientes disponibles.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Lista de Clientes</h2>
        <button onClick={toggleViewMode} className={styles.toggleButton}>
          Ver {viewMode === 'cards' ? 'Tabla' : 'Cards'}
        </button>
      </div>
      {viewMode === 'cards' ? (
        <div className={styles.cardContainer}>
          {clientes.map((metodo, index) => (
            <div key={index} className={styles.card}>
              <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                className={styles.cardImage} 
                alt={`Avatar de ${metodo.descripcion}`} 
              />
              <h3 className={styles.cardTitle}>{metodo.razonSocial}</h3>
              <p className={styles.cardCode}>Apellido: {metodo.apellido}</p>
              <p className={styles.cardCode}>Legajo: {metodo.legajo}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Razon docial</th>
              <th>Localidad</th>
              <th>direccion</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((metodo, index) => (
              <tr key={index}>
                <td>
                  <img 
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                    className={styles.tableImage} 
                    alt={`Avatar de ${metodo.descripcion}`} 
                  />
                </td>
                <td>{metodo.razonSocial}</td>
                <td>{metodo.localidad}</td>
                <td>{metodo.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clientes;
