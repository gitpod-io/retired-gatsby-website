import React from 'react'

import ImageProvider from '../ImageProvider'

const FullAutomationGraphics = ({ renderedGraphic }: { renderedGraphic: string }
) => {
    const graphics = [
        {
            src: 'automated-setup-default.png',
            alt: 'Gitpod Ready to Code',
            name: ''
        },
        {
            src: 'automated-setup-gitpod.png',
            alt: 'Setup Automated with Gitpod',
            name: 'gitpod'
        },
        {
            src: 'automated-setup-ordinary.png',
            alt: 'Setup Ordinary without Gitpod',
            name: 'usual'
        }
    ]

    return (
        graphics.map((g, i) => (
            <ImageProvider isNotRelativeToGatsbyImgWrapper={true} key={i+g.name}  fileName={g.src} alt={g.alt} wrapperStyles={renderedGraphic !== g.name ? {display: 'none'}: {}} />
        ))
    )
}


export default FullAutomationGraphics
