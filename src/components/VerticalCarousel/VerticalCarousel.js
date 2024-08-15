import React, { useState, useEffect } from 'react';
import InfiniteLooper from '../../shared/utils/InfiniteLoop';
import styles from './styles.module.css';
import image1 from '../../assets/verticalCarousel/1.png';
import image2 from '../../assets/verticalCarousel/2.png';
import image3 from '../../assets/verticalCarousel/3.png';
import image4 from '../../assets/verticalCarousel/4.png';
import image5 from '../../assets/verticalCarousel/5.png';
import image6 from '../../assets/verticalCarousel/6.png';
import image7 from '../../assets/verticalCarousel/7.png';
import image8 from '../../assets/verticalCarousel/8.png';

function VerticalCarousel() {
    const [direction, setDirection] = useState();

    useEffect(() => {
        const updateDirection = () => {
            if (window.innerWidth < 768) {
                setDirection(true);
            } else {
                setDirection(false);
            }
        };

        updateDirection();

        window.addEventListener('resize', updateDirection);

        return () => window.removeEventListener('resize', updateDirection);
    }, []);

    return (
        <div className={styles.container}>
            {
                direction == false ?
                    <>
                        <InfiniteLooper speed={20} direction='bottom'>
                            <div className={styles.InnerContainer}>
                                <img className={styles.imageContainer} src={image4} />
                                <img className={styles.imageContainer} src={image3} />
                                <img className={styles.imageContainer} src={image2} />
                                <img className={styles.imageContainer} src={image1} />
                            </div>
                        </InfiniteLooper>

                        <InfiniteLooper speed={20} direction='top'>
                            <div className={styles.InnerContainer}>
                                <img className={styles.imageContainer} src={image8} />
                                <img className={styles.imageContainer} src={image7} />
                                <img className={styles.imageContainer} src={image6} />
                                <img className={styles.imageContainer} src={image5} />
                            </div>
                        </InfiniteLooper>
                    </>
                    :

                    <InfiniteLooper speed={10} direction='left'>
                        <div className={styles.InnerContainer}>
                            <img className={styles.imageContainer} src={image1} />
                            <img className={styles.imageContainer} src={image2} />
                            <img className={styles.imageContainer} src={image3} />
                            <img className={styles.imageContainer} src={image4} />
                            <img className={styles.imageContainer} src={image5} />
                            <img className={styles.imageContainer} src={image6} />
                            <img className={styles.imageContainer} src={image7} />
                            <img className={styles.imageContainer} src={image8} />
                        </div>
                    </InfiniteLooper>

            }

        </div>
    );
}

export default VerticalCarousel;
