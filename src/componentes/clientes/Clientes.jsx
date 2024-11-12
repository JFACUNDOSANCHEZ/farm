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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(clientes);
  

  return (
    <div className={styles.container}>
    <div className={styles.header}>
   <h2 className={styles.title}>Lista de Clientes</h2>
   <button onClick={toggleViewMode} className={styles.toggleButton}>
     Ver  {viewMode === 'cards' ? 'Tabla' : 'Cards'}
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
               <h3 className={styles.cardTitle}>{metodo.nombre}</h3>
               <p className={styles.cardCode}>Apellido: {metodo.apellido}</p>
               <p className={styles.cardCode}>Legajo: {metodo.legajo}</p>
             </div>
           ))}
         </div>
       ) : (
         <table className={styles.table}>
           <thead>
             <tr>
              
               <th>Avatar</th>
               <th>Nombre</th>
               <th>Apellido</th>
               <th>Legajo</th>
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
                 <td>{metodo.nombre}</td>
               
                 <td>{metodo.apellido}</td>
                 <td>{metodo.legajo}</td>
               </tr>
             ))}
           </tbody>
         </table>
       )}
     </div>
  );
};

export default Clientes;
