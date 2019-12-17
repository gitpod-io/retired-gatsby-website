import React from 'react'

import { Link } from 'gatsby'
import Linkset from './Linkset'
import styled from '@emotion/styled';
import { colors } from '../styles/variables';
import MagGlass from '../resources/mag-glass.svg';
import { MENU } from '../docs/menu';

const StyledInput = styled.input`
    padding: 7px 18px 7px 38px;
    margin: 10px;
    border-radius: 100px;
    border: solid 1px ${colors.white};
    box-shadow: 1px 3px 8px ${colors.offWhite2};

    background: url(${MagGlass}) no-repeat 10px ${colors.white};
    background-size: 20px 20px;
    &:focus {
        border: solid 1px ${colors.link};
        outline: none;
    }
`;

const DocSideBar: React.SFC<{}> = () => (
    <div className="sidebar">
        <ul className="links">

            <StyledInput type="text" id="doc-search" placeholder="search"/>

            {MENU.map((m, i) =>
            <Linkset caption={m.title} path={m.path} key={'sub'+i}>
                {m.subMenu && m.subMenu.map((sub,i) =>
                    <li><Link activeClassName='active' to={sub.path} key={'sub'+i}>{sub.title}</Link></li>
                )}
            </Linkset>)}

        </ul>
    </div>
)

export default DocSideBar
