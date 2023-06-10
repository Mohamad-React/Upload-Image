import React from 'react';
import styles from "./styles/Main.module.css";
import ChooseImage from './ChooseImage';

const Main = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Upload Image</h2>
            <ChooseImage/>
        </div>
    );
};

export default Main;