import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'

const StyledTrustedBy = styled.section`
    padding: 3rem 0;

    .logos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        grid-row-gap: 1.5rem;
        justify-content: center;
        transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);

        @media(max-width: ${sizes.breakpoints.lg}) {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }

        a {
            display: flex;
            border: 2px solid transparent;
            justify-content: center;
            
            @media(min-width: 974px) {
                &:nth-child(n + 9) {
                    transform: translateX(150%);
                }
            }
                        
            @media(min-width: 1241px) {
                &:nth-child(n + 8) {
                    transform: translateX(50%);
                }
            }

            @media(max-width: 1093px) {
                &:nth-child(n + 8) {
                    transform: translateX(50%);
                }
            }               

            @media(max-width: 973px) {
                &:nth-child(n + 8) {
                    transform: none;
                }

                &:last-child {
                    transform: translateX(250%);
                }
            }

            @media(max-width: 853px) {
                &:nth-child(n + 11) {
                    transform: translateX(100%);
                }
            }

            @media(max-width: 800px) {
                &:nth-child(n + 8) {
                    transform: none;
                }

                &:last-child {
                    transform: translateX(250%);
                }
            }

            @media(max-width: 789px) {
                &:last-child {
                    transform: none;
                }

                &:nth-child(n + 11) {
                    transform: translateX(100%);
                }
            }

            @media(max-width: 669px) {
                &:nth-child(n + 11) {
                    transform: none;
                }

                &:last-child {
                    transform: translateX(150%);
                }
            }
            
            @media(max-width: 549px) {
                &:last-child {
                    transform: translateX(100%);
                }
            }

            @media(max-width: 429px) {
                &:last-child {
                    transform: translateX(0);
                }
            }

            @media(max-width: 400px) {
                &:last-child {
                    transform: translateX(100%);
                }
            }

            @media(max-width: 377px) {
                &:last-child {
                    transform: translateX(0);
                }
            }
        }
    }

    .grey-logo {
        filter: grayscale(100%) contrast(0%) brightness(116%);
        -webkit-filter: grayscale(100%) contrast(0%) brightness(116%);
    }

    .fcc {
        filter: grayscale(100%) contrast(0%);
        -webkit-filter: grayscale(100%) contrast(0%);
        width: 13rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            width: 12rem;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            width: 11rem;
        }
    }

    .dwave-logo {
        transform: scale(1.2);
        filter: grayscale(100%) contrast(0%) brightness(112%);
        -webkit-filter: grayscale(100%) contrast(0%) brightness(112%);
    }

    .four-geeks {
        transform: scale(.9);
    }

    .gatsby-logo {
        filter: grayscale(100%) opacity(47%);
        -webkit-filter: grayscale(100%) opacity(47%);
    }

    .vue-logo {
        filter: grayscale(100%) opacity(62%);
        -webkit-filter: grayscale(100%) opacity(62%);
    }
`

const StyledBrandImage = styled.img<{ transform?: string }>`
    width: 9.5rem;

    @media(max-width: ${sizes.breakpoints.lg}) {
        width: 9rem;   
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        width: 7rem;
    }

    @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
        transform: ${ ({ transform }) => transform ? transform : 'none'};
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

const TrustedBy = ({ brands }: TrustedByProps) => (
    <StyledTrustedBy>
        <div className="row">
            <div className="logos">
                {
                    brands.map((b: Brand) => (
                        <a href={b.url} target="_blank" className="trustedBy">
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
