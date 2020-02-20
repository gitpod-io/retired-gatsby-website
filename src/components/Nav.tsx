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
    position: relative;
    z-index: 1000;

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
        padding: 1rem;
    }

    img {
        height: 4rem;
    }

    .nav__items {
        display: flex;
        align-items: center;

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            width: 100%;
            padding-top: 8rem;
            min-height: 95vh;
            align-items: center;
            background: ${colors.offWhite};
            z-index: 1;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            min-height: 97vh;
        }
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        .navIsRendered {
            display: flex;
        }

        .navIsNotRendered {
            display: none;
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

    .btns {
        display: flex;
        align-items: center;

        @media(min-width: ${sizes.breakpoints.lg}) {
            display: none;
        }

        a {
            margin-right: 1rem;

            @media(min-width: ${sizes.breakpoints.md}) {
                margin-right: 2rem;
            }
        }
    }

    .nav__burger-container {
       display: flex;
       justify-content: space-between;
    }

    .nav__btn {
        position: relative;
        cursor: pointer;
        background: ${colors.offWhite};
        border: none;
        z-index: 10000;
        width: 4rem;
        height: 4rem;
        transition: all .2s;

        &:hover {
            background: ${colors.offWhite};

            svg {
                stroke: ${colors.lightBlue};
                fill: ${colors.lightBlue};
            }
        }

        svg {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            transition: all .3s cubic-bezier(.25,.75,.5,1.25);
            fill: ${colors.text};
            stroke: ${colors.text};

            &#hamburger {

                @media(max-width: ${sizes.breakpoints.md}) {
                    transform: scale(.7);
                }

                @media(min-width: ${sizes.breakpoints.md}) {
                    transform: scale(.8);
                }
            }

            &#multiply {
                transform: scale(.7);

                @media(max-width: ${sizes.breakpoints.md}) {
                    transform: scale(.65);
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

    toggleNavigation = () => {
        this.setState({ isNavRendered: !this.state.isNavRendered })
    }


    render() {

        const { isNavRendered } = this.state

        return (
            <div className="grey-container">
                <div className="row">
                    <StyledNav role="navigation" className="nav">
                            <div className="nav__burger-container">
                                <Link to="/"><img alt="Gitpod Logo" src={GitpodLogoDark} /></Link>
                                <div className="btns">
                                    <a href="https://gitpod.io/login/" rel="noopener" style={{display: isNavRendered ? 'none': ''}}>Log In</a>
                                    <div className="nav__btn-container" aria-live="assertive">
                                        <button
                                            className="nav__btn"
                                            aria-label={ isNavRendered ? "Hide the Navigation Items" : "Show the Navigation Items"}
                                            onClick={this.toggleNavigation}
                                            onFocus={this.toggleNavigation}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.112 31.112"
                                                className={ isNavRendered ? 'is-shown--multiply' : 'is-hidden' }
                                                aria-hidden={ isNavRendered ? false : true }
                                                id="multiply"
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
                                </div>
                            </div>

                        
                            <ul className={`nav__items ${isNavRendered ? 'navIsRendered' : 'navIsNotRendered'}`} >
                                <li className="nav__item"><Link activeClassName="active" to='/features/' className="link">Features</Link></li>
                                <li className="nav__item"><Link activeClassName="active" to='/pricing/' className="link">Pricing</Link></li>
                                <li className="nav__item"><Link activeClassName="active" to='/enterprise/' className="link">Enterprise</Link></li>
                                <li className="nav__item">
                                    <DropDown
                                        title="Solutions"
                                        links={[
                                            {
                                                text: 'Education',
                                                to: '/education/'
                                            },
                                            {
                                                text: 'Recruiting',
                                                to: '/recruiting/'
                                            },
                                            {
                                                text: 'Vendor',
                                                to: '/vendor/'
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
                                                to: '/docs/'
                                            },
                                            {
                                                text: 'Blog',
                                                to: '/blog/'
                                            },
                                            {
                                                text: 'Community',
                                                to: 'https://community.gitpod.io/',
                                                target: true
                                            }
                                        ]}
                                    />
                                </li>
                                <li className="nav__item"><a href="https://gitpod.io/login/" rel="noopener" className="btn">Log In</a></li>
                            </ul>
                          
                    </StyledNav>
                </div>
            </div>
        )
    }
}


export default Nav
