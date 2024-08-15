import React, { useState, useEffect } from 'react';
import Card from '../cards/card';
import styles from './styles.module.css';
import cardsData from '../../shared/utils/CardsData';

function Carousel() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        setTranslateX(-selectedIndex * 10);
    }, [selectedIndex]);

    const handleLeftClick = () => {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cardsData.length - 1));
    };

    const handleRightClick = () => {
        setSelectedIndex((prevIndex) => (prevIndex < cardsData.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.header}>
                <div className={styles.main}>HOW IT WORKS</div>
                <div className={styles.content}>
                    <div>
                        <span className={styles.coloredCon}>Lifestyle as medicine:</span>
                        <span> The six pillars</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.circle}>
                            <button onClick={handleLeftClick} className={styles.arrow}>←</button>
                        </div>
                        <div className={styles.circle}>
                            <button onClick={handleRightClick} className={styles.arrow}>→</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.titleContainer}>
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className={`${styles.titleBox} ${index === selectedIndex ? styles.active : ''}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {card.title}
                    </div>
                ))}
            </div>
            <div
                className={styles.cardsContainer}
                style={{ transform: `translateX(${translateX}%)` }}
            >
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className={`${styles.card} ${index === selectedIndex ? styles.activeCard : ''}`}
                    >
                        <Card
                            imageSrc={card.imageSrc}
                            overlayIcon={card.overlayIcon}
                            overlayContent={card.overlayContent}
                            title={card.title}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
