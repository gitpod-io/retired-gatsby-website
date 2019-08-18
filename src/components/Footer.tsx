import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { dimensions, colors, breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'
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
    margin-top: 12px;
    @media(min-width: ${getEmSize(breakpoints.sm)}em) {
        height: 40px;
    }
    @media(max-width: ${getEmSize(breakpoints.sm) - 1}em) {
        width: 100%;
    }
    & a {
        color: ${colors.fontColor1};
        font-size: 1rem;
        font-weight: 400;
        @media(max-width: ${getEmSize(breakpoints.sm) - 1}em) {
            display: block;
            margin-bottom: .6rem;
        }
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

const SocialLinks = styled.div`
    display: flex;
    height: 45px;
    margin: 10px 0;
    font-size: 10px;
    color: ${colors.fontColor1};
`

interface FooterProps {

}

const Footer: React.SFC<FooterProps> = () => {

    return <StyledFooter role="contentinfo">
        <FooterInner>
            <FooterMenu>
                <Link to="/features/">Features</Link>
                <Link to="/pricing/">Pricing</Link>
                <Link to="/docs/">Docs</Link>
                <Link to="/blog/">Blog</Link>
                <Link to="/careers/">Careers</Link>
                <Link to="/pricing/#enterprise">Enterprise</Link>
                <a href="https://status.gitpod.io" target="_blank" rel="noopener">Status</a>
            </FooterMenu>
            <SocialLinks>
                <p style={{padding: 10}}>Stay connected</p>
                <a href="https://github.com/gitpod-io/gitpod" target="_blank" rel="noreferrer"><SocialImg alt="GitHub Icon" src={github}/></a>
                <a href="https://spectrum.chat/gitpod" target="_blank" rel="noreferrer"><SocialImg alt="Spectrum Icon" src={spectrum}/></a>
                <a href="https://twitter.com/gitpod" target="_blank" rel="noreferrer"><SocialImg alt="Twitter Icon" src={twitter}/></a>
            </SocialLinks>
            <div style={{ height: 50, fontSize: 13, color: colors.fontColor1, textAlign: 'center' }}>
                Copyright © 2019&nbsp;<a href="https://typefox.io" target="_blank" rel="noopener">TypeFox</a> All Rights Reserved
                <div style={{marginTop: 5}}>
                    <Link to="/imprint/">Imprint</Link>&nbsp; | &nbsp;<Link to="/privacy/">Privacy Policy</Link>&nbsp; | &nbsp;<Link to="/terms/">Terms of Service</Link>
                </div>
            </div>
        </FooterInner>
    </StyledFooter>
}

export default Footer
