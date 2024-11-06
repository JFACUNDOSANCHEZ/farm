import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsuarios } from '../../redux/slices/usuariosSlice.jsx';
import styles from './Usuarios.module.css';

const Usuarios = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.usuarios);
  const [viewMode, setViewMode] = useState('table'); // Estado para alternar entre cards y table

  useEffect(() => {
    dispatch(fetchUsuarios());
  }, [dispatch]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'table' : 'cards'));
  };

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
   <div className={styles.header}>
  <h2 className={styles.title}>Lista de Usuarios</h2>
  <button onClick={toggleViewMode} className={styles.toggleButton}>
    Ver como {viewMode === 'cards' ? 'Tabla' : 'Cards'}
  </button>
</div>

      {viewMode === 'cards' ? (
        <div className={styles.cardContainer}>
          {list.map((metodo, index) => (
            <div key={index} className={styles.card}>
              <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                className={styles.cardImage} 
                alt={`Avatar de ${metodo.descripcion}`} 
              />
              <h3 className={styles.cardTitle}>{metodo.descripcion}</h3>
              <p className={styles.cardCode}>Código: {metodo.codigo.trim()}</p>
              <p className={styles.cardCode}>Nivel: {metodo.nivel}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Código</th>
              <th>Nivel</th>
            </tr>
          </thead>
          <tbody>
            {list.map((metodo, index) => (
              <tr key={index}>
                <td>
                  <img 
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
                    className={styles.tableImage} 
                    alt={`Avatar de ${metodo.descripcion}`} 
                  />
                </td>
                <td>{metodo.descripcion}</td>
                <td>{metodo.codigo.trim()}</td>
                <td>{metodo.nivel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Usuarios;
