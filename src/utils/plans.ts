import HeartLock from '../resources/heart-lock.png'
import LightBulb from '../resources/light-bulb.svg'
import Rocket from '../resources/rocket.png'
import MagicCap from '../resources/magic-cap.png'
import Earth from '../resources/earth.svg'

export const plans = [
    {
        title: 'Open-Source',
        img: HeartLock,
        alt: 'HeartLock Image',
        price: 'Free',
        duration: '100 hours/month',
        features: ['Public Repos', 'Non-Commercial Use']
    },
    {
        title: 'Personal',
        img: LightBulb,
        alt: 'Light Bulb',
        price: '$9',
        duration: '100 hours/month',
        features: ['Private & Public Repos', '< 4 parallel workspaces']
    },
    {
        title: 'Professional',
        img: Rocket,
        alt: 'Rocket',
        price: '$24',
        duration: 'unlimited hours',
        features: ['Private & Public Repos', '< 8 Workspaces', 'Team manageable']
    },
    {
        title: 'Unlimited',
        img: MagicCap,
        alt: 'Magic Cap',
        price: '$24',
        duration: 'unlimited hours',
        features: ['Private & Public Repos', '< 16 Workspaces', 'Team manageable', 'Extended Workspace Duration']
    },
    {
        title: 'Enterprise',
        img: Earth,
        alt: 'Earth',
        feature: 'Unleash Developer Productivity',
    }
]
