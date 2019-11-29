import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledTrustedBy = styled.section`
    /* ------------------------------------------- */
    /* ----- Section Trusted By ----- */
    /* ------------------------------------------- */

    .logos {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @media(max-width: ${sizes.breakpoints.sm}) {
            flex-direction: column;
            align-items: center;
        }
    }

    img {
        height: 10rem;
        width: 14rem;
    }
`

interface Brand {
    alt: string
    url: string
    svg: string
}

interface TrustedByProps {
    brands: Brand[]
}

const TrustedBy: React.SFC<TrustedByProps> = ({brands}) => (
    <StyledTrustedBy>
        <div className="row">
            <h2>Trusted by</h2>
            <div className="logos">
                {
                    brands.map((b, i) => (
                        <a href={b.url} target="_blank" key={i}>
                            <img src={b.svg} alt={b.alt} />
                        </a>
                    ))
                }
            </div>
        </div>
    </StyledTrustedBy>
)

export default TrustedBy
