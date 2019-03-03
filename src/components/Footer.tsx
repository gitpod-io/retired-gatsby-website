import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledFooter = styled.footer`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.background2};
  color: ${transparentize(0.5, colors.fontColor1)};
`

const FooterInner = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const HomepageLink = styled(Link)`
  color: ${colors.fontColor1};
  font-size: 0.8rem;
  font-weight: 400;
  padding-right: 20px;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface FooterProps {

}

const Footer: React.SFC<FooterProps> = () => (
    <StyledFooter>
        <FooterInner>
            <div style={{}}>
                <HomepageLink to="/">Home</HomepageLink>
                <HomepageLink to="/features">Features</HomepageLink>
                <HomepageLink to="/pricing">Pricing</HomepageLink>
                <HomepageLink to="/docs">Docs</HomepageLink>
                <HomepageLink to="/blog">Blog</HomepageLink>
            </div>
            <div>
            </div>
            <div>
                Copyright
            </div>
        </FooterInner>
    </StyledFooter>
)

export default Footer
