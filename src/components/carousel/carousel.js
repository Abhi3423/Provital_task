import React from 'react'
import Card from '../cards/card'
import InfiniteLooper from '../../shared/utils/InfiniteLoop'
import styles from './styles.module.css'
import nutrition from '../../assets/cards/Nutrition.png'
import blueHeart from '../../assets/cards/blueHeart.png'
import orangeHeart from '../../assets/cards/orangeHeart.png'
import PhysicalActivity from '../../assets/cards/PhysicalActivity.png'
import Moon from '../../assets/cards/Moon.png'
import RestorativeSleep from '../../assets/cards/RestorativeSleep.png'
import blueSolidHeart from '../../assets/cards/blueSolidHeart.png'
import StressManagement from '../../assets/cards/StressManagement.png'
import SocialConnection from '../../assets/cards/SocialConnection.png'
import Clock from '../../assets/cards/clock.png'
import SubstanceAbuse from '../../assets/cards/SubstanceAbuse.png'

function carousel() {
    return (
        <div className={styles.container}>
            <InfiniteLooper speed={30} direction='right'>
                <div className={styles.InnerContainer}>
                    <Card imageSrc={nutrition}
                        overlayIcon={blueHeart}
                        overlayContent={'121/81 mmHg'}
                        title={'Nutrition'}
                        description={'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.'}
                    />

                    <Card imageSrc={PhysicalActivity}
                        overlayIcon={orangeHeart}
                        overlayContent={'121/81 mmHg'}
                        title={'Physical Activity'}
                        description={'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.'}
                    />

                    <Card imageSrc={RestorativeSleep}
                        overlayIcon={Moon}
                        overlayContent={'121/81 mmHg'}
                        title={'Restorative sleep'}
                        description={'Consistent, quality sleep is essential for cognitive function and physical health.'}
                    />

                    <Card imageSrc={StressManagement}
                        overlayIcon={blueSolidHeart}
                        overlayContent={'121/81 mmHg'}
                        title={'Stress Management'}
                        description={'Effective stress management techniques are crucial for mental well-being and overall health.'}
                    />

                    <Card imageSrc={SocialConnection}
                        overlayIcon={orangeHeart}
                        overlayContent={'121/81 mmHg'}
                        title={'Social Connection'}
                        description={'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.'}
                    />

                    <Card imageSrc={SubstanceAbuse}
                        overlayIcon={Clock}
                        overlayContent={'121/81 mmHg'}
                        title={'Social Abuse'}
                        description={'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.'}
                    />

                </div>
            </InfiniteLooper>
        </div>
    )
}

export default carousel
