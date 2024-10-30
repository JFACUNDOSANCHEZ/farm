import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEstadosOT } from '../../redux/slices/estadosOTSlice';
import styles from './Estados.module.css';

const EstadosOT = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.estadosOT);

  useEffect(() => {
    dispatch(fetchEstadosOT());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de EstadosPT</h1>
      <ul className={styles.list}>
        {list.map((metodo, index) => (
          <li key={index} className={styles.item}>Descripcion: {metodo.descripcion}  codigo: {metodo.codigo}</li>
        ))}
      </ul>
    </div>
  );
};

export default EstadosOT;
