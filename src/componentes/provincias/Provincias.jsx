import { useDispatch, useSelector } from 'react-redux';
import { fetchProvincias, selectProvincias, selectProvinciasStatus, selectProvinciasError } from '../../redux/slices/provinciaSlice.jsx';
import NavBar from '../nav/Nav.jsx';
import Menu from '../menu/Menu.jsx';
import styles from './provincias.module.css';
import { useEffect, useState } from 'react';
import Filtros from '../filtros/Filtros.jsx';

const Provincias = () => {
    const dispatch = useDispatch();
    const provincias = useSelector(selectProvincias);
    const status = useSelector(selectProvinciasStatus);
    const error = useSelector(selectProvinciasError);
    const [view, setView] = useState('cards'); // Estado para alternar entre vista de cards o tabla

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProvincias());
        }
    }, [status, dispatch]);

    // Función para alternar entre vista de cards y tabla
    const toggleView = () => {
        setView((prevView) => (prevView === 'cards' ? 'table' : 'cards'));
    };

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Menu />
            </div>
            <div className={styles.mainContent}>
                <NavBar />
                <Filtros />
                {status === 'loading' && <div>Cargando...</div>}
                <h1>Provincias</h1>

                {/* Botón para alternar la vista */}
                <div className={styles.viewToggle}>
                    <button onClick={toggleView}>
                        Cambiar a {view === 'cards' ? 'Vista de Tabla' : 'Vista de Cards'}
                    </button>
                </div>

                {/* Renderizado condicional según la vista */}
                {status === 'succeeded' && (
                    view === 'cards' ? (
                        <div className={styles.cardContainer}>
                            {provincias.map((provincia) => (
                                <div key={provincia.codigo} className={styles.card}>
                                    <h2>{provincia.descripcion}</h2>
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
