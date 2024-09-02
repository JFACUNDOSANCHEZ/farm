import React from 'react'
import styles from './Card.module.css'
export default function Card() {
    return (
        <div className={styles.feature}>

            <img src="https://static.vecteezy.com/system/resources/previews/014/932/882/non_2x/document-check-icon-outline-form-paper-vector.jpg" alt="Característica 1" />
            <div className={styles.text}>
                <h3>Registrar muestras farmacéuticas fácilmente.</h3>
                {/* <p>Registrar nuevas muestras farmacéuticas fácilmente..</p> */}
            </div>
        </div>
    )
}
