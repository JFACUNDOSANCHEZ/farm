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

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProvincias());
        }
    }, [status, dispatch]);

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
                {status === 'succeeded' && (
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
                )}
                {status === 'failed' && <div>Error: {error}</div>}
            </div>
        </div>
    );
};

export default Provincias;
