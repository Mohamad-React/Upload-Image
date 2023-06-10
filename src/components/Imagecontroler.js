import React from 'react';
import styles from "./styles/Imagecontroler.module.css";
const Imagecontroler = ({ images }) => {
    return (
        <div className={styles.container}>
            {images && images.map((item, index) => (
                <img src={`http://localhost:8000/back/images/${item.image}`} key={index} alt='img'  />
            ))}
        </div>
    );
};

export default Imagecontroler;
