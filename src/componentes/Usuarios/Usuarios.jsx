import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsuarios} from '../../redux/slices/usuariosSlice.jsx'; 
import styles from './Usuarios.module.css';

const Usuarios = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(fetchUsuarios());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Lista de Usuarios</h1>
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
          {/* Aquí puedes agregar más detalles si lo deseas */}
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Usuarios;
