import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCondicionFiscal } from '../../redux/slices/condicionFiscalSlice.jsx';
import styles from './CondicionFiscalComponent.module.css'; // Importa el CSS Module
import MenuPage from '../menu/Menu.jsx';
import NavBar from '../nav/Nav.jsx';
import Filtros from '../filtros/Filtros.jsx'
const CondicionFiscalComponent = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.condicionFiscal);

  useEffect(() => {
    dispatch(fetchCondicionFiscal());
  }, [dispatch]);



  if (loading) return <p className={styles.loading}>Cargando datos...</p>;
  if (error) return <p className={styles.error}>Error al cargar los datos: {error}</p>;
  if (!list || list.length === 0) return <p className={styles.noData}>No hay condiciones de pago disponibles.</p>;

  return (
    <div className={styles.container}>
     
    
        <div className={styles.header}>
          <h2 className={styles.title}>Condición Fiscal</h2>
        
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Abreviada</th>
                <th>Código</th>
                <th>Tipo Iva</th>
                <th>Tasa</th>
                <th>Tasa Iva</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{item.descripcion}</td>
                  <td>{item.abreviada || 'Sin abreviatura'}</td>
                  <td>{item.codigo}</td>
                  <td>{item.tipoIva}</td>
                  <td>{item.tasaIva.descripcionTasa}</td>
                  <td>{item.tasaIva.porcentajeTasa}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
    
    </div>
  );
};

export default CondicionFiscalComponent;
