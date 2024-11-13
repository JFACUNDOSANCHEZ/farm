import { useDispatch, useSelector } from 'react-redux';
import { fetchProvincias, selectProvincias, selectProvinciasStatus, selectProvinciasError } from '../../redux/slices/provinciaSlice.jsx';

import styles from './provincias.module.css';
import { useEffect, useState } from 'react';

const iconosProvincias = {
 
  // Añadir el resto de provincias aquí...
  "EXTER": "https://link_a_icono_exterior.png" // Icono de Exterior del país
};

const Provincias = () => {
    const dispatch = useDispatch();
    const provincias = useSelector(selectProvincias);
    const status = useSelector(selectProvinciasStatus);
    const error = useSelector(selectProvinciasError);
    const [viewMode, setViewMode] = useState('table'); // Estado para alternar entre vista de cards o tabla

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProvincias());
        }
    }, [status, dispatch]);

    const toggleViewMode = () => {
      setViewMode(prevMode => (prevMode === 'cards' ? 'table' : 'cards'));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Provincias</h2>
                <button onClick={toggleViewMode} className={styles.toggleButton}>
                    Ver {viewMode === 'cards' ? 'Tabla' : 'Cards'}
                </button>
            </div>

            {viewMode === 'cards' ? (
                <div className={styles.cardContainer}>
                    {provincias.map((metodo, index) => (
                        <div key={index} className={styles.card}>
                            <img 
                                src={iconosProvincias[metodo.codigo.trim()] || "https://static.thenounproject.com/png/674232-200.png"} 
                                className={styles.cardImage} 
                                alt={`Icono de ${metodo.descripcion}`} 
                            />
                            <h3 className={styles.cardTitle}>{metodo.descripcion}</h3>
                            <p className={styles.cardCode}>Código: {metodo.codigo}</p>
                            <p className={styles.cardCode}>Porcentaje IIBB: {metodo.porcentajeIIBB}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Icono</th>
                            <th>Provincia</th>
                            <th>Código</th>
                            <th>Porcentaje IIBB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {provincias.map((metodo, index) => (
                            <tr key={index}>
                                <td>
                                    <img 
                                        src={iconosProvincias[metodo.codigo.trim()] || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} 
                                        className={styles.tableImage} 
                                        alt={`Icono de ${metodo.descripcion}`} 
                                    />
                                </td>
                                <td>{metodo.descripcion}</td>
                                <td>{metodo.codigo}</td>
                                <td>{metodo.porcentajeIIBB}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Provincias;
