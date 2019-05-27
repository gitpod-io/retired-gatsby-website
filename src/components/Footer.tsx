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

const FooterMenu = styled.div`
    height: 40px;
    margin-top: 15px;

    & a {
        color: ${colors.fontColor1};
        font-size: 1rem;
        font-weight: 400;

        :not(:last-child) {
            padding-right: 20px;
        }

        &:hover,
        &:focus {
            text-decoration: none;
        }
    }
`

const SocialImg = styled.img`
  height: 20px;
  margin: 8px;
`

interface FooterProps {

}

const Footer: React.SFC<FooterProps> = () => {

    return <StyledFooter role="contentinfo">
        <FooterInner>
            <FooterMenu>
                <Link to="/features">Features</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/docs">Docs</Link>
                <Link to="/blog">Blog</Link>
                <a href="https://status.gitpod.io" target="_blank">Status</a>
                <Link to="/pricing#enterprise">Enterprise</Link>
            </FooterMenu>
            <div style={{ height: 40, display: 'flex', fontSize: 10, color: colors.fontColor1 }}>
                <p style={{padding: 10}}>Stay connected</p>
                <a href="https://github.com/gitpod-io/gitpod"><SocialImg alt="GitHub Icon" src={github}/></a>
                <a href="https://spectrum.chat/gitpod"><SocialImg alt="Spectrum Icon" src={spectrum}/></a>
                <a href="https://twitter.com/gitpod"><SocialImg alt="Twitter Icon" src={twitter}/></a>
            </div>
            <div style={{ height: 40, marginTop: 15, display: 'flex', fontSize: 10, color: colors.fontColor1 }}>
                Copyright © 2019&nbsp;<a href="https://typefox.io" target="_blank">TypeFox</a>&nbsp;| All Rights Reserved |&nbsp;<Link to="/imprint">Imprint</Link>&nbsp;|&nbsp;<Link to="/privacy">Privacy Policy</Link>&nbsp;|&nbsp;<Link to="/terms">Terms of Service</Link>
            </div>
        </FooterInner>
    </StyledFooter>
}

export default Footer
