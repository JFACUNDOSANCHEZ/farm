import React from 'react';
import styles from './Landing.module.css'; // Importa el CSS Module
import { Link } from 'react-router-dom';
import videoSrc from '../../assets/vdl.mp4'; // Asegúrate de que esta ruta sea correcta
import Nav from '../nav/Nav';
import Carousel from '../carrusel/Carrusel';
import Footer from '../footer/Footer'

export default function Landing2() {
  return (
    <div>
      <header className={styles.header}>
        
     <Nav></Nav>
     <section className={styles.infoSection}>
  <div className={styles.imageContainer}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GxyH9NJk_Erkcg21NdSXaqPLRbUx0AXUb5imIlP1exZFiqBGTHGKQ_2hk5yW6KnjFgE&usqp=CAU" alt="Imagen representativa" />
  </div>
  <div className={styles.linksContainer}>
    <a className={styles.navLink}>Nosotros</a>
    <a className={styles.navLink}>Sucursales</a>
    <a className={styles.navLink}>Servicio</a>
  </div>
</section>

        <div className={styles.videoBackgroundContainer}>
          <video className={styles.videoBackground} autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
<Carousel></Carousel>
          

        </div>

      </header>
   <section id="cta" className={styles.cta}>
                    <h2>¿Listo para empezar?</h2>
                    <Link to={'/Login'}>
                        <button className={styles.ctaButton}>Ingresa Ahora</button>
                    </Link>
                </section>
     

    </div>
  );
}