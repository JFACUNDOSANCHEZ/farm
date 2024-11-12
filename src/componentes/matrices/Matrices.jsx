import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatrices } from '../../redux/slices/matricesSlice'; // Asegúrate de que la ruta es correcta
import styles from './MatricesList.module.css'; // Importa los estilos

const Matrices = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.matrices);
  const [viewMode, setViewMode] = useState('cards'); // Estado para alternar entre 'cards' y 'table'

  useEffect(() => {
    dispatch(fetchMatrices());
  }, [dispatch]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'table' : 'cards'));
  };

  if (loading) return <p className={styles.loading}>Cargando matrices...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
    <div className={styles.header}>
   <h2 className={styles.title}>Matrices</h2>
   <button onClick={toggleViewMode} className={styles.toggleButton}>
     Ver  {viewMode === 'cards' ? 'Tabla' : 'Cards'}
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
               
               <th>Nombre</th>
               <th>Código</th>
               <th>Nivel</th>
             </tr>
           </thead>
           <tbody>
             {list.map((metodo, index) => (
               <tr key={index}>
                
                 <td>{metodo.descripcion}</td>
                 <td>{metodo.codigo.trim()}</td>
                 <td>{metodo.muestra.trim()}</td>
               </tr>
             ))}
           </tbody>
         </table>
       )}
     </div>
  );
};

export default Matrices;

{/* <p className={styles.cardDescription}><strong>{matriz.descripcion}</strong></p>
<p className={styles.cardCode}><strong>Código:</strong> {matriz.codigo.trim()}</p>
<p className={styles.cardSample}><strong>Muestra:</strong> {matriz.muestra.trim()}</p> */}