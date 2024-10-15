import { useDispatch, useSelector } from 'react-redux';
import { fetchProvincias, selectProvincias, selectProvinciasStatus, selectProvinciasError } from '../../redux/slices/provinciaSlice.jsx';
import NavBar from '../nav/Nav.jsx';
import Menu from '../menu/Menu.jsx';
import styles from './Provincias.module.css';
import { useEffect } from 'react';
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
                <Filtros></Filtros>
                <h1>Provincias</h1>
                {status === 'loading' && <div>Cargando...</div>}
                {status === 'succeeded' && (
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
                )}
                {status === 'failed' && <div>Error: {error}</div>}
            </div>
        </div>
    );
};

export default Provincias;