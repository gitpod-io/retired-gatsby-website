import React from 'react'

import ReadyToCodeImg from '../../resources/automated-setup-default.png'
import AutomatedSetupGraphicGitpod from '../../resources/automated-setup-gitpod.png'
import AutomatedSetupGraphicOrdinary from '../../resources/automated-setup-ordinary.png'

const FullAutomationGraphics = ({ renderedGraphic }: { renderedGraphic: string }
) => {
    const graphics = [
        {
            src: ReadyToCodeImg,
            alt: 'Gitpod Ready to Code',
            name: ''
        },
        {
            src: AutomatedSetupGraphicGitpod,
            alt: 'Setup Automated with Gitpod',
            name: 'gitpod'
        },
        {
            src: AutomatedSetupGraphicOrdinary,
            alt: 'Setup Ordinary without Gitpod',
            name: 'usual'
        }
    ]

    return (
        graphics.map((g, i) => (
            <img
                key={i}
                src={g.src}
                alt={g.alt}
                style={ renderedGraphic !== g.name ? {display: 'none'}: {}}
            />
        ))
    )
}


export default FullAutomationGraphics
