import React from 'react'

import styled from '@emotion/styled'
import { shadows, colors } from '../styles/variables'
import Arrow from './Arrow'

const StyledScrollToTopButton = styled.a`
    position: fixed;
    right: 4%;
    bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${shadows.light1};
    border-radius: 50%;
    z-index: 100;
    transition: transform .3s, opacity .2s, background-color .2s  ease-in-out;
    background: ${colors.white};
`


class ScrollToTopButton extends React.Component {

    state = {
        shouldBeRendered: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if ( window.scrollY > 800) {
                this.setState({shouldBeRendered: true})
            }
            else {
                this.setState({shouldBeRendered: false})
            }
        })
    }

    render() {
       return (
            <StyledScrollToTopButton
                href="#top"
                className="back-to-top"
                style={ this.state.shouldBeRendered ? {opacity: 1, transform: 'scale(1)'} : {opacity: 0, transform: 'scale(0)'}  }
            >
                <Arrow styles={{ transform: 'rotate(-90deg)'}}/>
            </StyledScrollToTopButton>
       )
    }
}

export default ScrollToTopButton
