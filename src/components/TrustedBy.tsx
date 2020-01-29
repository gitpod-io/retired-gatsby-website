import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledTrustedBy = styled.section`
    /* ------------------------------------------- */
    /* ----- Section Trusted By ----- */
    /* ------------------------------------------- */

    padding: 4rem 0;
    margin-top: 2rem;

    @media(max-width: ${sizes.breakpoints.sm}) {
        text-align: center;
    }

    h2 {
        margin-bottom: 2rem;
    }

    .logos {
        display: grid;
        grid-template-columns: repeat(6, 1fr);

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

    .fcc {
        transform: scale(1.05);

        @media(max-width: ${sizes.breakpoints.sm}) {
            transform: scale(1.3);
        }
    }
`

const StyledBrandImage = styled.img<{transform?: string}>`
    height: 10rem;
    width: 14rem;

    @media(min-width: ${sizes.breakpoints.lg}) {
        transform: ${ ({transform}) => transform ? transform : 'none' };
    }
`

interface Brand {
    alt: string
    url: string
    svg: string
    transform?: string,
    className?: string 
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
                                <StyledBrandImage 
                                    src={b.svg} 
                                    alt={b.alt} 
                                    transform={b.transform}
                                    className={b.className}
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
    </StyledTrustedBy>
)

export default TrustedBy
