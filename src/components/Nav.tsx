import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import GitpodLogoDark from '../resources/gitpod-logo-dark.svg'
import { colors, sizes, borders } from '../styles/variables'
import DropDown from '../components/DropDown'
import Hamburger from '../resources/hamburger.svg'
import Multiply from '../resources/multiply.svg'

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
    background: ${colors.offWhite};

    @media (max-width: ${sizes.breakpoints.lg}) {
        display: block;
        font-size: 120%;
    }

    img {
        height: 4rem;
    }

    ul {
        display: flex;
        align-items: center;
        transition: all .8s cubic-bezier(0.86, 0, 0.07, 1);

        @media(max-width: ${sizes.breakpoints.lg}) {
            position: absolute;
            top: 16%;
            left: 0;
            flex-direction: column;
            width: 100vw;
            height: 88vh;
            justify-content: center;
            align-items: center;
            background: ${colors.offWhite};
            z-index: 1;
        }
    }

    li {

        &:not(:last-child) {
            margin-right: 5rem;
        }

        @media(max-width: ${sizes.breakpoints.lg}) {
            width: 100%;

            &:not(:last-child) {
                margin: 0;
                margin-bottom: 3rem;
                border-bottom: ${borders.light1};
            }


        }

        &:last-child {
            margin-left: -1rem;
        }
    }

    .link {
        position: relative;
        color: ${colors.text};
        padding-bottom: .8rem;
        font-weight: 400;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 100%;
            border-bottom: 2px solid ${colors.white};
            transition: all .4s cubic-bezier(0,.5,0, 1);
        }

        &:hover,
        &:focus {
            color: ${colors.link};

            &::after {
                right: 0;
                border-color: ${colors.link};
            }
        }
    }

    .nav__btn {
        position: relative;
        background: ${colors.offWhite};
        border: none;
        z-index: 10000;
        width: 4rem;
        height: 4rem;
        transition: all .2s;

        &:hover {
            background: ${colors.offWhite};
        }

        &-container {
            position: absolute;
            top: 3.8rem;
            right: 7rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                right: 4rem;
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                right: 1rem;
            }
        }

        img {
            position: absolute;
            height: 4rem;
            transition: all .3s cubic-bezier(.25,.75,.5,1.25);
            top: 0;
            left: 0
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
            opacity: 0;
            transform: scale(1.5) translateX(-100vw);
        }

        .container {
            max-width: ${sizes.grid.maxWidth};
            width: 100%;
            margin: 0 auto;

            @media(max-width: ${sizes.breakpoints.lg}) {
                padding: 0 7rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 0 4rem;
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
                                    <img
                                        src={Multiply}
                                        alt="close menu icon"
                                        className={ isNavRendered ? 'is-shown--multiply' : 'is-hidden' }
                                        aria-hidden={ isNavRendered ? false : true }
                                    />
                                    <img
                                        src={Hamburger}
                                        alt="hamburger menu icon"
                                        className={ isNavRendered ? 'is-hidden' : 'is-shown' }
                                        aria-hidden={ isNavRendered ? true : false }
                                    />
                                </button>
                            </div>

                            <ul className={ isNavRendered ? 'shown container' : 'hiden' }>
                                    <li><Link tabIndex={ isNavRendered ? 0 : -1 } to='/features' className="link">Features</Link></li>
                                    <li><Link tabIndex={ isNavRendered ? 0 : -1 } to='/pricing' className="link">Pricing</Link></li>
                                    <li><Link tabIndex={ isNavRendered ? 0 : -1 } to='/enterprise' className="link">Enterprise</Link></li>
                                    <li>
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
                                    <li>
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
                                    <li><Link tabIndex={ isNavRendered ? 0 : -1 } to="/#get-started" className="btn btn--cta">Start for Free</Link></li>
                                </ul>
                    </StyledNav>
                </div>
            </div>
        )
    }
}


export default Nav
