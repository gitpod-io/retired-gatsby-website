import LightBulb from '../resources/light-bulb.svg'
import Rocket from '../resources/rocket.png'
import MagicCap from '../resources/magic-cap.png'
import Earth from '../resources/earth.svg'

export const plans = [
    {
        title: 'Personal',
        img: LightBulb,
        alt: 'Light Bulb',
        price: '$9',
        duration: '100 hours / month',
        features: ['Private & Public Repos', '4 Parallel Workspaces']
    },
    {
        title: 'Professional',
        img: Rocket,
        alt: 'Rocket',
        price: '$24',
        duration: 'unlimited hours',
        features: ['Private & Public Repos', '8 Parallel Workspaces', 'Team Manageable'],
        transform: 'scale(1.08)',
    },
    {
        title: 'Unlimited',
        img: MagicCap,
        alt: 'Magic Cap',
        price: '$24',
        duration: 'unlimited hours',
        features: ['Private & Public Repos', '16 Parallel Workspaces', 'Team Manageable', 'Extended Workspace Timeout']
    },
    {
        title: 'Enterprise',
        img: Earth,
        alt: 'Earth',
        feature: 'Unleash Developer Productivity',
        background: true
    }
]
