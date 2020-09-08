import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'

const StyledDescripion = styled.span`
    position: relative;

    button {
        display: inline-block;
        height: 1.4rem;
        width: 1.4rem;
        font-weight: 600;
        font-size: 1rem;
        border: none;
        color: ${colors.white};
        background: ${colors.offWhite1};
        border-radius: 50%;

        @media(max-width: ${sizes.breakpoints.md}) {
            transform: scale(1.3);
            margin-left: 1rem;
        }

        @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
            transform: translateX(1rem);
        }
    }

    .description__text {
        padding: .2rem .5rem;
        font-size: 1.2rem;
        color: ${colors.textDark};
        background: ${colors.offWhite2};
        z-index: 1000 !important;

        @media(max-width: 1080px) {
            position: absolute;
            right: -5rem;
            top: 2.4rem;
            min-width: 18rem;
            z-index: 1999999999;
        }

         @media(min-width: 1081px) {
            position: absolute;
            top: 0;
            left: 3rem;
            min-width: 19rem;
        }
    }

    .bottom {
        font-weight: 400;
        right: -10rem;
        top: 2.4rem;
        min-width: 18rem;
        z-index: 9999999999;
        transform: translateX(-16.5rem);

        @media(max-width: 1081px) {
            transform: translateX(-7.5rem);
        }
    }
`

class Description extends React.Component<{description: string, textPosition?: string}, {}> {

    state={
        isRendered: false
    }

    handleClick = () => {
        this.setState({isRendered: !this.state.isRendered})
    }

    handleMouseEnter = () => {
        this.setState({isRendered: true})
    }

    handleMouseLeave = () => {
        this.setState({isRendered: false})
    }

    render() {
        const { isRendered } = this.state
        const { description } = this.props
        const positionBottom = this.props.textPosition === 'bottom'

        return (
            <StyledDescripion
                className="description"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onFocus={this.handleMouseEnter}
                onBlur={this.handleMouseLeave}
            >
                <button onClick={this.handleClick}>?</button>
                { isRendered ? <div className={`${positionBottom ? 'bottom' : ''} description__text`}>{ description }</div> : null }
            </StyledDescripion>
        )
    }
}

export default Description
