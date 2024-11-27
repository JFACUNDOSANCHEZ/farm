import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTipos } from '../../redux/slices/tiposSlice';
import styles from './Tipos.module.css'; // Importa el CSS Module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWind,
  faWater,
  faFlask,
  faLeaf,
  faTools,
  faFolder,
  faMountain,
  faSeedling,
  faTint,
  faSun,
  faFire,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';



const Tipos = () => {
  const dispatch = useDispatch();
  const { tipos: list, status, error } = useSelector((state) => state.tipos);


  
  const [viewMode, setViewMode] = useState('table');


  const iconMapping = {
    AIRE: faWind,
    OTRA: faWater,
    EFLUE: faFlask,
    CROM: faLeaf,
    CMA: faTools,
    ACEIT: faFolder,
    BAGRA: faTools,
    SUELO: faMountain,
    CC: faSeedling,
    TC: faTint,
    SI: faSun,
    SOLSE: faCircle,
    // Agrega más mapeos según tus necesidades
  };


  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'cards' ? 'table' : 'cards'));
  };
  useEffect(() => {
    dispatch(fetchTipos());
  }, [dispatch]);

  if (status === 'loading') return <div>Cargando...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  console.log(list);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Tipo de muestras</h2>
        <button onClick={toggleViewMode} className={styles.toggleButton}>
          Ver {viewMode === 'cards' ? 'Tabla' : 'Cards'}
        </button>
      </div>

     {viewMode === 'cards' ? (
  <div className={styles.cardContainer}>
    {list.map((cliente, index) => (
      <div key={index} className={styles.card}>
        <FontAwesomeIcon
          icon={iconMapping[cliente.codigo.trim()] || faFlask} // Ícono por defecto si no hay mapeo
          className={styles.cardIcon}
        />
        <h3 className={styles.cardTitle}>{cliente.nombre} {cliente.codigo}</h3>
        <p className={styles.cardCode}>{cliente.descripcion}</p>
      </div>
    ))}
  </div>
) : (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Código</th>
        <th>Descripción</th>
      <th>Ícono</th>
      </tr>
    </thead>
    <tbody>
      {list.map((cliente, index) => (
        <tr key={index}>
          <td>{cliente.codigo}</td>
          <td>{cliente.descripcion}</td>
          <td>
            <FontAwesomeIcon
              icon={iconMapping[cliente.codigo.trim()] || faFlask}
              className={styles.tableIcon}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}
    </div>
  );
};

export default Tipos;
