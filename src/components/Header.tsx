import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'
import logo from '../resources/Logo_Gitpod.svg';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  margin-top: 15px;
  background-color: ${colors.background1};
  color: ${transparentize(0.5, colors.fontColor1)};
`

const HeaderInner = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: space-between;
`

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
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

const Header: React.SFC<HeaderProps> = () => (
    <StyledHeader>
        <HeaderInner>
            <HeaderLeft>
                <HomepageLink to="/" style={{ paddingRight: 60 }}><img src={logo} style={{ width: 120 }} /></HomepageLink>
                <HomepageLink to="/features">Features</HomepageLink>
                <HomepageLink to="/pricing">Pricing</HomepageLink>
                <HomepageLink to="/docs">Docs</HomepageLink>
                <HomepageLink to="/blog">Blog</HomepageLink>
            </HeaderLeft>
            <HeaderRight>
                <a href="https://gitpod.io/api/login">
                    <button>Log In</button>
                </a>
            </HeaderRight>
        </HeaderInner>
    </StyledHeader>
)

export default Header
