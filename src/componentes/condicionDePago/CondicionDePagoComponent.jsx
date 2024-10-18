import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCondicionPago } from '../../redux/slices/condicionDePago.jsx';
import styles from './CondicionPago.module.css'; // Importa los estilos
import Nav from '../nav/Nav.jsx'; // El componente de navegación
import MenuPage from '../menu/Menu.jsx'; // El menú
import Filtros from '../filtros/Filtros.jsx';
const CondicionPagoComponent = () => {
  const dispatch = useDispatch();
  const condicionPagoList = useSelector(state => state.condicionPago.list);
  const loading = useSelector(state => state.condicionPago.loading);
  const error = useSelector(state => state.condicionPago.error);

  useEffect(() => {
    dispatch(fetchCondicionPago());
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <MenuPage />
      </div>
      <div className={styles.mainContent}>
        <Nav />
        <Filtros></Filtros>
        <div className={styles.contain}>
          <h2 className={styles.title}>Lista de Condiciones de Pago</h2>
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
    </div>
  );
};

export default CondicionPagoComponent;
