import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener el token del localStorage
        const token = localStorage.getItem('token'); // Asegúrate de usar la clave correcta

        // Si el token existe, lo borramos
        if (token) {
            localStorage.removeItem('token'); // Eliminar el token
            // Puedes hacer cualquier otra acción que desees aquí, como una llamada a la API para cerrar sesión
        }

        // Redirigir a la ruta raíz
        navigate('/'); 
    }, [navigate]);

    return (
        <div>
            Cerrando sesión...
        </div>
    );
};

export default Logout;
