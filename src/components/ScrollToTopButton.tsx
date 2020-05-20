import React from 'react'

import styled from '@emotion/styled'
import { borders, colors, shadows } from '../styles/variables'

import IconArrow from '../resources/icon-arrow.svg'

const StyledScrollToTopButton = styled.a`
    position: fixed;
    right: 4%;
    bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
    width: 5.5rem;
    background: var(--link);
    border: ${borders.light};
    box-shadow: ${shadows.light1};
    border-radius: 50%;
    z-index: 100;
    transition: transform .3s, opacity .2s, background-color .2s  ease-in-out;

    &:hover,
    &:focus {
        background: var(--lightBlue);
    }

    img {
        height: 1.5rem;
    }
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
                <img alt="Up Arrow" src={IconArrow} />
            </StyledScrollToTopButton>
       )
    }
}

export default ScrollToTopButton
