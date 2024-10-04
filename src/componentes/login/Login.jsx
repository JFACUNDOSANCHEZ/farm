import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el login
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoContainer}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSLotMP7Ejmqw9EyQia_XB5aFyAUBJP9uWw&s" alt="Cinco Hispanos" className={styles.logo} />
        <h1>Apolo web</h1>
      </div>
      <div className={styles.loginBox}>
        <h3 className={styles.h}>Inicie sesión con su cuenta</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.options}>
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Recordar mi ingreso</label>
            </div>
            <a href="#">¿Olvidó su contraseña?</a>
          </div>
          <Link to={'/menu'}>
          <button type="submit" className={styles.submitButton}>Ingresar</button>
          </Link>
        </form>
      </div>
      <p className={styles.footer}>&copy; 2024 MiEmpresa. Todos los derechos reservados.</p>
    </div>
  );
};

export default Login;
