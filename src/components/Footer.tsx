import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { dimensions, colors } from '../styles/variables'
import Container from './Container'
import twitter from '../resources/twitter.svg';
import github from '../resources/github.svg';
import spectrum from '../resources/spectrum.svg';

const StyledFooter = styled.footer`
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.background2};
  color: ${transparentize(0.5, colors.fontColor1)};
  box-shadow: 0px 0px 160px 0px rgba(5,5,5,0.57);
  z-index: 100;
`

const FooterInner = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const HomepageLink = styled(Link)`
  color: ${colors.fontColor1};
  font-size: 1rem;
  font-weight: 400;
  padding-right: 20px;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const SocialImg = styled.img`
  height: 20px;
  margin: 8px;
`

interface FooterProps {

}

const Footer: React.SFC<FooterProps> = () => {

    return <StyledFooter>
        <FooterInner>
            <div style={{height: 40, marginTop: 15}}>
                <HomepageLink to="/features">Features</HomepageLink>
                <HomepageLink to="/pricing">Pricing</HomepageLink>
                <HomepageLink to="/docs">Docs</HomepageLink>
                <HomepageLink to="/blog">Blog</HomepageLink>
                <HomepageLink to="/about">About</HomepageLink>
                <HomepageLink to="/careers">Careers</HomepageLink>
                <HomepageLink to="/status">Status</HomepageLink>
                <HomepageLink to="/pricing#enterprise">Enterprise</HomepageLink>
            </div>
            <div style={{ height: 40, display: 'flex', fontSize: 10, color: colors.fontColor1 }}>
                <p style={{padding: 10}}>Stay connected</p>
                <SocialImg src={github}/>
                <SocialImg src={spectrum}/>
                <SocialImg src={twitter}/>
            </div>
            <div style={{ height: 40, marginTop: 15, display: 'flex', fontSize: 10, color: colors.fontColor1 }}>
                Copyright 2019 TypeFox | All Rights Reserved | <Link to="/imprint">Imprint</Link> | <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
            </div>
        </FooterInner>
    </StyledFooter>
}

export default Footer
