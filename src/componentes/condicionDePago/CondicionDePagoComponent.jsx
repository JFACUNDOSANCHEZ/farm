import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCondicionPago } from '../../redux/slices/condicionDePago.jsx';
import styles from './CondicionPago.module.css'; // Importa los estilos

const CondicionPagoComponent = () => {
  const dispatch = useDispatch();
  const condicionPagoList = useSelector(state => state.condicionPago.list);
  const loading = useSelector(state => state.condicionPago.loading);
  const error = useSelector(state => state.condicionPago.error);

  useEffect(() => {
    dispatch(fetchCondicionPago());
  }, [dispatch]);

  // Manejo de estados directamente en el componente
  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error al cargar los datos: {error}</p>;
  if (!condicionPagoList || condicionPagoList.length === 0) return <p className={styles.noData}>No hay condiciones de pago disponibles.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Condiciones de Pago</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Anticipo</th>
              <th>Cliente/Proveedor</th>
              <th>Código</th>
              <th>Descripción</th>
              <th>Días</th>
              <th>Cuotas</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {condicionPagoList.map((item, index) => (
              <tr key={index}>
                <td>{item.anticipo}</td>
                <td>{item.clienteProveedor}</td>
                <td>{item.codigo}</td>
                <td>{item.descripcion}</td>
                <td>{item.dias}</td>
                <td>{item.cuotas}</td>
                <td>{item.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CondicionPagoComponent;
