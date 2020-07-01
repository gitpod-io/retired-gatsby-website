import React from 'react'

const FullAutomationButtons = ({ setRenderedGraphic }: {setRenderedGraphic: (value: string) => void}) => (
    <div className="buttons btn-wrapper">
        <button
            className="btn btn--cta"
            onClick={() => setRenderedGraphic('gitpod')}
            onMouseEnter={() => setRenderedGraphic('gitpod')}
            onMouseLeave={() => setRenderedGraphic('')}
        >
            With Gitpod
        </button>
        <button
            onClick={() => setRenderedGraphic('usual')}
            onMouseEnter={() => setRenderedGraphic('usual')}
            onMouseLeave={() => setRenderedGraphic('')}
            className="btn"
        >
            Usual Way
        </button>
    </div>
)

export default FullAutomationButtons
