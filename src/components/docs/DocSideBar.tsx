import React from 'react'

import { Link } from 'gatsby'
import Linkset from '../Linkset'
import { MENU } from '../../docs/menu'
import { Docsearch } from './DocSearch'
import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import SideBarBg from '../../resources/sidebar-bg.jpg'


const StyledSideBar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 3rem 0 10rem;

    &::before {
        position: absolute;
        content: "";
        display: block;
        min-height: 800px;
        min-width: 500px;
        height: calc(100vh + 100%);
        width: calc(100% + 10vw);
        transform: translateX(-13.5vw) translateY(-100vh);
        background: url(${SideBarBg});
        background-size: cover;
        background-position: center;
        z-index: -1;
        opacity: .1;

        @media(min-width: 1540px) {
            width: calc(30vw + 100%);
            transform: translateX(-32vw) translateY(-100vh);
        }

        @media(min-width: 3010px) {
            width: calc(55vw + 100%);
            transform: translateX(-57vw) translateY(-100vh);
        }

        @media(min-width: 4900px) {
            transform: translateX(-56vw) translateY(-100vh);
        }

        @media(min-width: 7000px) {
            width: calc(55vw + 100%);
            transform: translateX(-55.5vw) translateY(-100vh);
            height: calc(138vh + 100%);
        }
    }

    @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
        flex: 0 0 33%;
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        display: none;
    }
`

const DocSideBar: React.SFC<{}> = () => (
    <StyledSideBar>
        <ul>
            <Docsearch name="search-doc-input" />
            {MENU.map((m, i) =>
                <Linkset caption={m.title} path={m.path} key={'menu' + i}>
                    {m.subMenu && m.subMenu.map((sub, i) =>
                        <li><Link activeClassName='active' to={sub.path} key={'sub' + i}>{sub.title}</Link></li>
                    )}
                </Linkset>)}
        </ul>
    </StyledSideBar>
)

export default DocSideBar
