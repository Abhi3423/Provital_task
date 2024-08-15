import React from 'react';
import styles from './styles.module.css';

function Card({ imageSrc, overlayIcon, overlayContent, title, description }) {
    return (
        <div className={styles.card}>
            <img src={imageSrc} alt={title} className={styles.cardImage} />
            <div className={styles.cardHeader}>
                <img className={styles.overlayIcon} src={overlayIcon}/>
                <span className={styles.overlayContent}>{overlayContent}</span>
            </div>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
}

export default Card;
