import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import GitpodLogoDark from '../resources/gitpod-logo-dark.svg'
import { colors, sizes, borders } from '../styles/variables'
import DropDown from '../components/DropDown'

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
    background: ${colors.offWhite};

    @media(max-width: ${sizes.breakpoints.lg}) {
        font-size: 110%;
        display: block;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        font-size: 100%;
    }

    @media(max-width: ${sizes.breakpoints.sm}) {
        font-size: 95%;
        display: block;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        padding: .8rem 0;
    }

    img {
        height: 4rem;
    }

    .nav__items {
        display: flex;
        align-items: center;

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            width: 100vw;
            min-height: 95vh;
            justify-content: center;
            align-items: center;
            background: ${colors.offWhite};
            z-index: 1;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            min-height: 97vh;
        }
    }

    .nav__item {
        cursor: pointer;

        @media(min-width: ${sizes.breakpoints.lg}) {

            &:not(:last-child) {
                margin-right: 5rem;
            }
        }

        @media(max-width: ${sizes.breakpoints.lg}) {
            width: 100%;
            padding: 2rem 0;

            &:not(:last-child) {
                border-bottom: ${borders.light1};
            }
        }

        &:last-child {
            margin-left: -1rem;
        }
    }

    .nav__btn {
        cursor: pointer;
        position: relative;
        background: ${colors.offWhite};
        border: none;
        z-index: 10000;
        width: 4rem;
        height: 4rem;
        transition: all .2s;

        &:hover {
            background: ${colors.offWhite};

            svg {
                stroke: ${colors.link};
                fill: ${colors.link};
            }
        }

        &-container {
            position: absolute;
            top: 3.7rem;
            right: 7rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                top: 1.1rem;
                right: 4rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                right: 1rem;
            }
        }

        svg {
            position: absolute;
            height: 3.5rem;
            transition: all .3s cubic-bezier(.25,.75,.5,1.25);
            top: 0;
            left: 0;
            fill: ${colors.text};
            stroke: ${colors.text};

            &#hamburger {

                @media(max-width: ${sizes.breakpoints.md}) {
                    transform: scale(0.55) translateX(-1.3rem);
                }

                @media(min-width: ${sizes.breakpoints.md}) {
                    transform: scale(.8) translateX(-1rem);
                }
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                transform: scale(.7);
            }
        }

        @media(min-width: ${sizes.breakpoints.lg}) {
            display: none;
        }

        &:hover,
        &:focus {
            transform: scale(1.05);
        }
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        .shown {
            opacity: 1;
            transform: scale(1) translateX(0);
            max-width: ${sizes.grid.maxWidth};
        }

        .hiden {
            opacity: .8;
            transform: scale(1.1) translateX(-100vw);
        }

        .container {
            max-width: ${sizes.grid.maxWidth};
            width: 100%;
            margin: 0 auto;

            @media(max-width: ${sizes.breakpoints.sm}) {
                padding: 0 1rem;
            }
        }

        .is-shown {
            opacity: 1;

            &--multiply {
                transform: rotate(-90deg);
            }
        }

        .is-hidden {
            opacity: 0;
        }
    }
`

class Nav extends React.Component {

    state = {
        isNavRendered: false,
    }

    handleResize = () => {
        if (window.innerWidth < 1240) {
            this.setState({ isNavRendered: false })
        } else {
            this.setState({ isNavRendered: true })
        }
    }

    toggleNavigation = () => {
        this.setState({ isNavRendered: !this.state.isNavRendered })
    }

    event = () => {
        if (window.innerWidth <= 1240) {
            this.toggleNavigation()
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
        if (window.innerWidth >= 1240) {
            this.toggleNavigation()
        }
    }

    render() {

        const { isNavRendered } = this.state

        return (
            <div className="grey-container">
                <div className="row">
                    <StyledNav role="navigation" className="nav">
                            <Link to="/"><img alt="Gitpod Logo" src={GitpodLogoDark} /></Link>
                            <div className="nav__btn-container" aria-live="assertive">
                                <button
                                    className="nav__btn"
                                    aria-label={ isNavRendered ? "Hide the Navigation Items" : "Show the Navigation Items"}
                                    onClick={this.toggleNavigation}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.112 31.112"
                                        className={ isNavRendered ? 'is-shown--multiply' : 'is-hidden' }
                                        aria-hidden={ isNavRendered ? false : true }
                                    >
                                        <title>close menu icon</title>
                                        <path d="M31.112 1.414L29.698 0 15.556 14.142 1.414 0 0 1.414l14.142 14.142L0 29.698l1.414 1.414L15.556 16.97l14.142 14.142 1.414-1.414L16.97 15.556z"/>
                                    </svg>
                                    <svg
                                        className={ isNavRendered ? 'is-hidden' : 'is-shown' }
                                        aria-hidden={ isNavRendered ? true : false }
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 26 18"
                                        id="hamburger"
                                    >
                                        <title>hamburger menu icon</title>
                                        <g transform="translate(-647.5 -86.5)" strokeWidth="2"><line x2="24" transform="translate(648.5 87.5)"/><line x2="24" transform="translate(648.5 95.5)"/><line x2="24" transform="translate(648.5 103.5)"/></g>
                                    </svg>
                                </button>
                            </div>

                            { isNavRendered ? (
                                <ul className={ isNavRendered ? 'shown container nav__items' : 'hiden' }>
                                    <li className="nav__item"><Link activeClassName="active" tabIndex={ isNavRendered ? 0 : -1 } to='/features' className="link">Features</Link></li>
                                    <li className="nav__item"><Link activeClassName="active" tabIndex={ isNavRendered ? 0 : -1 } to='/pricing' className="link">Pricing</Link></li>
                                    <li className="nav__item"><Link activeClassName="active" tabIndex={ isNavRendered ? 0 : -1 } to='/enterprise' className="link">Enterprise</Link></li>
                                    <li className="nav__item">
                                        <DropDown
                                            title="Solutions"
                                            links={[
                                                {
                                                    text: 'Education',
                                                    to: '/education'
                                                },
                                                {
                                                    text: 'Recruiting',
                                                    to: '/recruiting'
                                                },
                                                {
                                                    text: 'Vendor',
                                                    to: '/vendor'
                                                }
                                            ]}
                                        />
                                    </li>
                                    <li className="nav__item">
                                        <DropDown
                                            title="Resources"
                                            links={[
                                                {
                                                    text: 'Docs',
                                                    to: '/docs'
                                                },
                                                {
                                                    text: 'Blog',
                                                    to: '/blog'
                                                },
                                                {
                                                    text: 'Community',
                                                    to: 'https://spectrum.chat/gitpod/',
                                                    target: true
                                                }
                                            ]}
                                        />
                                    </li>
                                    <li className="nav__item"><Link activeClassName="active" tabIndex={ isNavRendered ? 0 : -1 } to="/#get-started" className="btn btn--cta">Start for Free</Link></li>
                                </ul>
                            ) : null }
                    </StyledNav>
                </div>
            </div>
        )
    }
}


export default Nav
