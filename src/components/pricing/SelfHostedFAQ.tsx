import React from 'react'

export interface FAQ {
    title: string,
    paragraphs: (string | JSX.Element)[]
}

const SelfHostedFAQ = ({ title , paragraphs}: FAQ) => (
    <div>
        <h3>{title}</h3>
        {
            paragraphs.map((p: string | JSX.Element, i ) => (
                <p key={`${i}${title}`}>
                    {p}
                </p>
            ) )
        }
    </div>
)

export default SelfHostedFAQ
