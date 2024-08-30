import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Importa los estilos de slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Importa los estilos de tema de slick-carousel
import styles from './Carousel.module.css'; // Asegúrate de que el archivo CSS esté correctamente importado

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                <div className={styles.feature}>
                    {/* <img src="https://static.vecteezy.com/system/resources/previews/014/932/882/non_2x/document-check-icon-outline-form-paper-vector.jpg" alt="Característica 1" /> */}
                    <div className={styles.text}>
                        <h3>Registrar muestras farmacéuticas fácilmente.</h3>
                    <p  className={styles.t}> Gestión de Muestras: Permite agregar, editar y eliminar muestras.</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    {/* <img src="https://www.kindpng.com/picc/m/178-1786850_maps-icono-mapa-hd-png-download.png" alt="Característica 2" /> */}
                    <div className={styles.text}>
                        <h3>Seguimiento del estado y ubicación de las muestras</h3>
                    <p  className={styles.t}>Genera informes detallados y realiza un seguimiento exhaustivo</p>
                    </div>
                </div>
                <div className={styles.feature}>
                    {/* <img src="https://static.vecteezy.com/system/resources/previews/015/605/322/non_2x/graph-chart-report-icon-outline-style-vector.jpg" alt="Característica 3" /> */}
                    <div className={styles.text}>
                        <h3>Informes detallados sobre el manejo de las muestras</h3>
                     <p  className={styles.t}>Sigue el estado y la ubicación de tus muestras en tiempo real.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;