import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledFeatures  = styled.section`
    .features {
        display: flex;
        flex-wrap: wrap;

        @media(min-width: ${sizes.breakpoints.md}) {
            justify-content: space-between;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
            align-items: center;
        }
    }
`

interface FeaturesProps {
    title?: string
}

const Features: React.SFC<FeaturesProps> = ({ title, children }) => (
    <div className="row">
        <StyledFeatures>
            { title ? <h2>{title}</h2> : null }
            <div className="features">
                {children}
            </div>
        </StyledFeatures>
    </div>
)

export default Features
