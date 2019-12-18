import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows, borders, sizes } from '../styles/variables'

const StyledDescripion = styled.span`
    position: relative;

    button {
        height: 2rem;
        width: 2rem;
        font-weight: 600;
        border: none;
        color: ${colors.white};
        background: ${colors.offWhite1};
        border-radius: 50%;
    }

    .description__text {
        display: block;
        padding: .2rem .5rem;
        font-size: 1.2rem;
        color: ${colors.textDark};
        background: ${colors.offWhite1};
        box-shadow: ${shadows.light};
        border: ${borders.light};
        z-index: 1000 !important;

        @media(min-width: ${sizes.breakpoints.lg}) {
            position: absolute;
            top: 0;
            left: 3rem;
            min-width: 19rem;
        }
    }
`

class Description extends React.Component<{description: string}, {}> {

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

        return (
            <StyledDescripion
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <button onClick={this.handleClick}>?</button>
                { isRendered ? <div className="description__text">{ description }</div> : null }
            </StyledDescripion>
        )
    }
}

export default Description
