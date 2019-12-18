import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledTrustedBy = styled.section`
    /* ------------------------------------------- */
    /* ----- Section Trusted By ----- */
    /* ------------------------------------------- */

    padding: 4rem 0;
    margin-top: 4rem;

    h2 {
        margin-bottom: 2rem;
    }

    .logos {
        display: grid;
        grid-template-columns: 1.4fr repeat(5, 0.9fr);

        @media(max-width: ${sizes.breakpoints.lg}) {
            grid-template-columns: repeat(3, 1fr);

            a {
                text-align: center;
            }
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            grid-template-columns: repeat(1, 1fr);
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
    transform?: string
}

interface TrustedByProps {
    brands: Brand[]
}

const TrustedBy: React.SFC<TrustedByProps> = ({brands}) => (
    <div className="grey-container">
        <StyledTrustedBy>
                <div className="row">
                    <h2>Trusted by</h2>
                    <div className="logos">
                        {
                            brands.map((b, i) => (
                                <a href={b.url} target="_blank" key={i}>
                                    <img src={b.svg} alt={b.alt} style={{ transform: b.transform ? b.transform : "none" }}/>
                                </a>
                            ))
                        }
                    </div>
                </div>
        </StyledTrustedBy>
    </div>
)

export default TrustedBy
