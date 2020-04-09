import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'
import IconArrow from '../resources/icon-arrow-grey.svg'

const StyledTrustedBy = styled.section`
    /* ------------------------------------------- */
    /* ----- Section Trusted By ----- */
    /* ------------------------------------------- */

    padding: 4rem 0;
    margin-top: 2rem;

    @media(max-width: ${sizes.breakpoints.sm}) {
        text-align: center;

        h2::after {
            margin-left: auto;
            margin-right: auto;
        }
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

        @media(max-width: ${sizes.breakpoints.sm}) {
            transform: translateY(-53%);
        }
        
        img {
            display: block;
            height: 1.3rem;
            transform: rotate(90deg);
            transition: all .5s;
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
    brands: Brand[]
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
        if(this.state.translateX <= 1250) {
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
            <StyledTrustedBy>
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
                            <img alt="Arrow" src={IconArrow} />
                        </button>
                    </div>
                </div>
            </StyledTrustedBy>
        )
    }
}

export default TrustedBy
