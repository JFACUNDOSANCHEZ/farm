import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.removeItem('token');       
        }
        navigate('/'); 
    }, [navigate]);

    return (
        <div>
            Cerrando sesión...
        </div>
    );
};

export default Logout;
