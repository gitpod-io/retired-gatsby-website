import React from 'react'

import styled from '@emotion/styled'
import ArrowDown from '../resources/arrow-down.svg'
import { colors, shadows, sizes } from '../styles/variables'
import { Link } from 'gatsby'

const StyledDropDown = styled.div`

    @media(min-width: ${sizes.breakpoints.lg}) {
        position: relative;
    }

    button {
        display: flex;
        align-items: center;
        border: none;
        transition: all .2s;
        max-width: 20rem;

        &:hover,
        &:focus {
            color: ${colors.link};

            &::before {
                right: 0;
                border-color: ${colors.link};
            }
        }
    }

    .arrow {
        height: .8rem;
        transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        margin-left: 1rem;
        @media(max-width: ${sizes.breakpoints.lg}) {
            height: 1rem;
        }

        @media(min-width: ${sizes.breakpoints.lg}) {
            display: none;
        }
    }

    ul {
        display: flex;
        flex-direction: column;

        @media(min-width: ${sizes.breakpoints.lg}) {
            position: absolute;
            top: 2.5rem;
            left: 7%;
            width: 120%;
            left: 50%;
            transform: translateX(-50%);
            min-width: 14rem;
            padding: .5rem 0 1rem;
            background: ${colors.offWhite};
            box-shadow: ${shadows.light};
            transition: all .4s cubic-bezier(0.86, 0, 0.07, 1);
        }
    }

    li {
        @media(min-width: ${sizes.breakpoints.lg}) {
            margin: 1rem 0 0;
            padding: 0 1.5rem;
            font-size: 90%;
            width: 100%;
            border-bottom: none;
        }

        @media(max-width: ${sizes.breakpoints.lg}) {
            opacity: .8;

            &:not(:last-child) {
                margin-top: 1rem;
            }
        }
    }

    .shown {
        opacity: 1;

        @media(min-width: ${sizes.breakpoints.lg}) {
            background: ${colors.white};
            transform: scale(1) translate(-50%, 0);
        }
    }

    .hidden {
        opacity: 0;

        @media(max-width: ${sizes.breakpoints.lg}) {
            display: none;
        }

        @media(min-width: ${sizes.breakpoints.lg}) {
            transform: scale(0) translate(-50%, -20rem);
        }
    }
`

interface Anchor {
    text: string | JSX.Element
    to: string
    target?: boolean
}

interface DropDownProps {
    title: string
    links: Anchor[]
}

class DropDown extends React.Component<DropDownProps, {}> {

    state = {
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

    render () {
        const { title, links } = this.props
        const { isRendered } = this.state

        return (
            <StyledDropDown
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <button
                    onClick={this.handleClick}
                    aria-label={ isRendered ? "Hide Dropdown's Content" : "Show Dropdown's Content"}
                    aria-live="assertive"
                >
                    <div>{title}</div>
                    <img
                        alt="Arrow"
                        className="arrow"
                        src={ArrowDown}
                        style={ isRendered ? {transform: 'rotate(180deg)'}: {} }
                    />
                </button>

                <ul  className={ isRendered ? 'shown' : 'hidden' }>
                    {
                        links.map(({text, to, target}, i) =>
                            target ?
                                (
                                    <li key={i}>
                                        <a
                                            href={to}
                                            tabIndex={ isRendered ? 0 : -1 }
                                            target="_blank"
                                            className="link"
                                        >
                                            {text}
                                        </a>
                                    </li>
                                )
                                    :
                                (
                                    <li key={i}>
                                        <Link
                                            to={to}
                                            className="link"
                                            tabIndex={ isRendered ? 0 : -1 }
                                            activeClassName="active"
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                )
                        )
                    }
                    <span aria-hidden={true}></span>
                </ul>
            </StyledDropDown>
        )
    }
}

export default DropDown
