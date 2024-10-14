import React from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    return (
        <form className={styles.form}>
            <div className={styles.column}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" />
            </div>
            <div className={styles.column}>
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" />

                <label htmlFor="ciudad">Ciudad:</label>
                <input type="text" id="ciudad" name="ciudad" />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
