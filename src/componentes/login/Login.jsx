import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../public/logo.jpg.jpeg'
const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const credentials = {
      Usuario: username,
      Password: password,
      Modulo: 'ApWeb',
    };
console.log(credentials);

try {
  const resultAction = await dispatch(loginUser(credentials)).unwrap();
  console.log('Login exitoso:', resultAction);
  navigate('/menu'); // Redirigir al menú después del login exitoso// Redirigir al menú después del login exitoso
} catch (error) {
  if (error.response) {
    console.error('Error en la respuesta:', error.response.data);
  } else if (error.request) {
    console.error('Error en la solicitud:', error.request);
  } else {
    console.error('Error desconocido:', error.message);
  }
}

  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Cinco Hispanos" className={styles.logo} />
        {/* <h1>Apolo web</h1> */}
      </div>
        {/* <h3 className={styles.h}>Inicie sesión </h3> */}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <br />
            <label htmlFor="username">Usuario:</label>
            <br /><br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <br />
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña:</label>
            <br /><br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
        
          <button type="submit" className={styles.submitButton}>Ingresar</button>
        </form>
      </div>
      
    </div>
  );
};

export default Login;