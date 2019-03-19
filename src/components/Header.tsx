import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors, breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'
import Container from './Container'
import logo from '../resources/Logo_Gitpod.svg';
import * as icons from '../resources/icons';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  margin-top: 15px;
  background-color: ${colors.background1};
  color: ${transparentize(0.5, colors.fontColor1)};

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    z-index: 2;
    position: fixed;
    width: 100%;
    padding: 5px 0;
    margin: 0;
  }
`

const HeaderInner = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    padding: 0 ${dimensions.containerPadding}rem;
    z-index: 2;
`

const MobileMenu = styled.div`
  margin-left: auto;
  margin-right: -10px;
  display: flex;
  flex-direction: row;
  align-items: start;

  > :not(:last-child) {
    padding-right: 12px;
  }

  @media (min-width: ${getEmSize(breakpoints.md)}em) {
    display: none;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  height: 100%;

  > :last-child {
    margin-left: auto;
  }

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    height: auto;
    width: 100%;
    margin-top: 15px;
    flex-direction: column;
    max-height: 85vh;
    overflow: scroll;

    :before {
      content: '';
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${colors.background1};
      z-index: -1;
    }

    :not(.open) {
      display: none;
    }

    > * {
      padding: 15px;
      width: 100%;
    }

    > *:not(:last-child) {
      border-bottom: 1px solid ${colors.background3};
    }

    > :last-child {
      margin: 0;

      > button {
        width: 100%;
      }
    }
  }
`

const HomepageLogo = styled.img`
  width: 120px;

  @media (max-width: ${getEmSize(breakpoints.md)}em) {
    width: 100px;
    margin-top: 3px;
  }
`

const HomepageLink = styled(Link)`
  color: ${colors.fontColor1};
  font-size: ${dimensions.fontSize.menu};
  font-weight: 400;
  padding-right: 20px;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
    title: string
}

interface HeaderState {
    isMenuOpen: boolean,
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            isMenuOpen: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const { isMenuOpen } = this.state;
        this.setState({ isMenuOpen: !isMenuOpen });
    }

    render() {
        const { isMenuOpen } = this.state;
        return <StyledHeader>
            <HeaderInner>
                <HomepageLink to="/" style={{ paddingRight: 60, lineHeight: 'initial' }}>
                    <HomepageLogo src={logo} />
                </HomepageLink>
                <MobileMenu>
                    {isMenuOpen ? null : <a href="https://gitpod.io/api/login">
                        <button className='primary' style={{fontSize: '90%', padding: '6px 10px'}}>Log In</button>
                    </a>}
                    <button onClick={this.toggleMenu} style={{ border: 0, padding: '6px 10px' }}>
                        {isMenuOpen ? icons.cross() : icons.burger()}
                    </button>
                </MobileMenu>
                <Menu className={isMenuOpen ? 'open' : ''}>
                    <HomepageLink to="/features">Features</HomepageLink>
                    <HomepageLink to="/pricing">Pricing</HomepageLink>
                    <HomepageLink to="/docs">Docs</HomepageLink>
                    <HomepageLink to="/blog">Blog</HomepageLink>
                    <HomepageLink className="hidden-md-up" to="/about">About</HomepageLink>
                    <HomepageLink className="hidden-md-up" to="/contact">Contact</HomepageLink>
                    <a href="https://gitpod.io/api/login">
                        <button className='primary'>Log In</button>
                    </a>
                </Menu>
            </HeaderInner>
        </StyledHeader>;
    }
}
