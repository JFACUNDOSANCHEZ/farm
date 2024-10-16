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

    const [isGridView, setIsGridView] = useState(false);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProvincias());
        }
    }, [status, dispatch]);

    const toggleView = () => {
        setIsGridView((prev) => !prev);
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

                <button onClick={toggleView} className={styles.toggleViewButton}>
                    {isGridView ? 'Ver como Cards' : 'Ver como Grilla'}
                </button>

                {status === 'succeeded' && (
                    isGridView ? (
                        <ul className={styles.gridContainer}>
                            {provincias.map((provincia) => (
                                <li key={provincia.codigo} className={styles.gridItem}>
                                    <h2>{provincia.descripcion}</h2>
                                    <p>Código: {provincia.codigo}</p>
                                    <p>Porcentaje IIBB: {provincia.porcentajeIIBB}%</p>
                                    <p>Importe IIBB: ${provincia.importeIIBB}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
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
                    )
                )}
                {status === 'failed' && <div>Error: {error}</div>}
            </div>
        </div>
    );
};

export default Provincias;
