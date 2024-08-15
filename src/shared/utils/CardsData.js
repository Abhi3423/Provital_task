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


const cardsData = [
    {
        title: 'Nutrition',
        imageSrc: nutrition,
        overlayIcon: blueHeart,
        overlayContent: '121/81 mmHg',
        description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
    },
    {
        title: 'Physical Activity',
        imageSrc: PhysicalActivity,
        overlayIcon: orangeHeart,
        overlayContent: '121/81 mmHg',
        description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
    },
    {
        title: 'Restorative Sleep',
        imageSrc: RestorativeSleep,
        overlayIcon: Moon,
        overlayContent: '121/81 mmHg',
        description: 'Consistent, quality sleep is essential for cognitive function and physical health.',
    },
    {
        title: 'Stress Management',
        imageSrc: StressManagement,
        overlayIcon: blueSolidHeart,
        overlayContent: '121/81 mmHg',
        description: 'Effective stress management techniques are crucial for mental well-being and overall health.',
    },
    {
        title: 'Social Connection',
        imageSrc: SocialConnection,
        overlayIcon: orangeHeart,
        overlayContent: '121/81 mmHg',
        description: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
    },
    {
        title: 'Substance Abuse',
        imageSrc: SubstanceAbuse,
        overlayIcon: Clock,
        overlayContent: '121/81 mmHg',
        description: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.',
    },
];


export default cardsData