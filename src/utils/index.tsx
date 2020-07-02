import React from 'react'

import { FeatureCardProps } from '../components/FeatureCard'

import StayInFlow from '../resources/stay-in-flow.svg'
import IPad from '../resources/ipad.png'
import FullAutomationGraphics from '../components/features/FullAutomationGraphics'
import FullAutomationButtons from '../components/features/FullAutomationButtons'
import { Link } from 'gatsby'

export const features: FeatureCardProps[] = [
    {
        id: 'automation',
        Graphic: FullAutomationGraphics,
        title: <>No more Waiting with<br /><strong>Full Automation</strong></>,
        text: (<>
            <p>Avoid all the friction and get beamed into a fully set up, compiled, and tested dev environment with one click.</p>
            <p>More about <Link to="/">Continuous Dev Environments.</Link></p>
        </>),
        Buttons: FullAutomationButtons
    },
    {
        src: StayInFlow,
        alt: 'GitHub, GitLab, and Bitbucket',
        title: <>Stay in the Flow<br /><strong>Integrated with GitLab, GitHub, and Bitbucket</strong></>,
        text: (<>
            <p>Start your workflow from your Git hosting platform and let Gitpod beam you in a ready-to-code dev environment.</p>
            <p>Whether you want to fix a bug, add a feature, or do a code review, Gitpod gets you started immediately in a self-contained browser tab.</p>
            <p>More about <a href="/docs/context-urls/">Context URLs</a>.</p>
        </>)
    },
    {
        src: IPad,
        alt: 'Gitpod on an iPad',
        title: <>Code Anywhere<br /><strong>Use your Chromebook or Tablet</strong></>,
        text: (<>
            <p>You no longer need an over-powered laptop to work, Gitpod works just as smoothly on a Chromebook.</p>
            <p>You can even code on the go with a tablet.</p>
        </>)
    },
]
