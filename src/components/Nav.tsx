import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'

import GitpodLogoDark from '../resources/gitpod-logo-dark.svg'
import { colors } from '../styles/variables'


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;

    img {
        height: 4rem;
    }

    ul {
        display: flex;
        align-items: center;
    }

    li {
        &:not(:last-child) {
            margin-right: 5rem;
        }
    }

    .link {
        position: relative;
        color: ${colors.text};
        padding-bottom: .8rem;

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
`

const Nav: React.SFC<{}> = () => (
    <StyledNav role="navigation" className="row">
        <Link to="/"><img alt="Gitpod Logo" src={GitpodLogoDark} /></Link>
        <ul>
            <li><Link to='/features' className="link">Features</Link></li>
            <li><Link to='/pricing' className="link">Pricing</Link></li>
            <li><Link to='/enterprise' className="link">Enterprise</Link></li>
            <li><Link to='/solutions' className="link">Solutions</Link></li>
            <li><Link to='/resources' className="link">Resources</Link></li>
            <li><Link to="/#getting-started" className="btn btn--cta">Start for Free</Link></li>
        </ul>
    </StyledNav>
)

export default Nav
