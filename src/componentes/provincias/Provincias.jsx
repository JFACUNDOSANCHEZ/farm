import { useDispatch, useSelector } from 'react-redux';
import { fetchProvincias, selectProvincias, selectProvinciasStatus, selectProvinciasError } from '../../redux/slices/provinciaSlice.jsx';
import NavBar from '../nav/Nav.jsx';
import Menu from '../menu/Menu.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons'; // Importamos los iconos
import styles from './provincias.module.css';
import { useEffect, useState } from 'react';
import Filtros from '../filtros/Filtros.jsx';

const Provincias = () => {
    const dispatch = useDispatch();
    const provincias = useSelector(selectProvincias);
    const status = useSelector(selectProvinciasStatus);
    const error = useSelector(selectProvinciasError);
    const [view, setView] = useState('table'); // Estado para alternar entre vista de cards o tabla

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProvincias());
        }
    }, [status, dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
              
            </div>
            <div className={styles.mainContent}>
            
           
          <h2 className={styles.title}>Provincias</h2>
               

            


                {/* Renderizado condicional según la vista */}
                {status === 'succeeded' && (
                    view === 'cards' ? (
                        <div className={styles.cardContainer}>
                            {provincias.map((provincia) => (
                                <div key={provincia.codigo} className={styles.card}>
                                    <h2>{provincia.descripcion}</h2>
                                    {status === 'loading' && <div><img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="" /></div>}
                                    <p>Código: {provincia.codigo}</p>
                                    <p>Porcentaje IIBB: {provincia.porcentajeIIBB}%</p>
                                    <p>Importe IIBB: ${provincia.importeIIBB}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Código</th>
                                    <th>Porcentaje IIBB</th>
                                    <th>Importe IIBB</th>
                                </tr>
                            </thead>
                            <tbody>
                                {provincias.map((provincia) => (
                                    <tr key={provincia.codigo}>
                                        <td>{provincia.descripcion}</td>
                                        <td>{provincia.codigo}</td>
                                        <td>{provincia.porcentajeIIBB}%</td>
                                        <td>${provincia.importeIIBB}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                )}
                {status === 'failed' && <div>Error: {error}</div>}
            </div>
        </div>
    );
};

export default Provincias;
