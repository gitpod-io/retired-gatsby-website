import React from 'react'

import styled from '@emotion/styled'
import { sizes, colors } from '../styles/variables'

const StyledTrustedBy = styled.section<{dontDisplayTheArrow?: boolean}>`
    /* ------------------------------------------- */
    /* ----- Section Trusted By ----- */
    /* ------------------------------------------- */

    padding: 1rem 0;
    margin-top: 2rem;

    @media(max-width: ${sizes.breakpoints.sm}) {
        text-align: center;
    }

    h2 {
        margin-bottom: 2rem;
    }

    .logos {
        display: flex;
        filter: grayscale(1) opacity(0.6);
        -webkit-filter: grayscale(1) opacity(0.6);
        transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);

        &-container {
            display: flex;
            position: relative;
            overflow: hidden;
        }

        a {
            display: block;
            min-width: 130px;
            text-align: center;

            @media(max-width: ${sizes.breakpoints.lg}) {
                min-width: 120px;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                min-width: 100px;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                min-width: 90px;
            }

            &:not(:last-of-type) {
                margin-right: 3rem;
            }
        }
    }

    .fcc {
        transform: scale(1.05);

        @media(max-width: ${sizes.breakpoints.sm}) {
            transform: scale(1.3) translateX(5px);
        }
    }

    .arrow {
        display: block;
        position: absolute;
        top: 50%;
        right: -10px;
        height: 100%;
        width: 40px;
        border: none;
        background: #fff;
        cursor: pointer;
        transform: translateY(-51%);

        @media(min-width: 1040px) {
            display: ${({dontDisplayTheArrow}) => dontDisplayTheArrow ? 'none' : 'initial'};
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            transform: translateY(-53%);
        }
        
        svg {
            display: block;
            height: 1.3rem;
            stroke: ${colors.offWhite3};
            transform: rotate(90deg);
            transition: all .3s;
        }

        &:hover {
            svg {
                stroke: ${colors.lightBlue};
                transform: scale(1.1) rotate(90deg);
            }
        }

        &:active {
            svg {
                stroke: ${colors.lightBlue};
                transform: scale(.9) rotate(90deg);
            }
        }
    }
`

const StyledBrandImage = styled.img<{ transform?: string }>`
    height: 10rem;
    width: 12rem;

    @media(max-width: ${sizes.breakpoints.lg}) {
        height: 9rem;
        width: 11rem;   
    }


    @media(max-width: ${sizes.breakpoints.md}) {
        height: 8rem;
        width: 10rem;
    }

    @media(max-width: ${sizes.breakpoints.sm}) {
        height: 6rem;
        width: 8rem;
    }

    @media(min-width: ${sizes.breakpoints.lg}) {
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
    dontDisplayTheArrow?: boolean
    brands: Brand[],
    slideTotal?: number
}

interface TrustedByState {
    translateX: number
}

class TrustedBy extends React.Component<TrustedByProps, TrustedByState> {

    state = {
        translateX: 250,
    }

    slideTheLogos = () => {
        const logos: any = document.querySelector('.logos')
        logos.style.transform = `translateX(-${this.state.translateX}px)`
        console.log(logos.style.transform)
    }

    handleButtonClick = () => {
        const limit = this.props.slideTotal ? this.props.slideTotal : 1250
        if(this.state.translateX <= limit) {
            this.setState(() => ({
                translateX: this.state.translateX + 250
            }))
        } 
        else {
            this.setState(() => ({
                translateX: 0
            }))
        }  
        this.slideTheLogos()
    }

    render() {
        const { brands } = this.props
        return (
            <StyledTrustedBy dontDisplayTheArrow={this.props.dontDisplayTheArrow}>
                <div className="row">
                    <div className="logos-container">
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
                        <button 
                            className="arrow" 
                            onClick={this.handleButtonClick}
                            tabIndex={-1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.869" height="15.88" viewBox="0 0 32.869 15.88"><path data-name="Pfad 35" d="M7669.29,2749.414l10.769,14.1-10.769,14.066" transform="matrix(0.035, -0.999, 0.999, 0.035, 2.175, 12.722) translate(-7669.29 -2749.414)" fill="none" stroke-linecap="round" stroke-width="3"/></svg>
                        </button>
                    </div>
                </div>
            </StyledTrustedBy>
        )
    }
}

export default TrustedBy
