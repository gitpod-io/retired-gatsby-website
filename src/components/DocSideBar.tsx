import React from 'react'

import { Link } from 'gatsby'
import Linkset from './Linkset'
import { MENU } from '../docs/menu';
import { Docsearch } from './DocSearch';

const DocSideBar: React.SFC<{}> = () => (
    <div className="sidebar">
        <ul className="links">

            <Docsearch name="search-doc-input"/>

            {MENU.map((m, i) =>
            <Linkset caption={m.title} path={m.path} key={'menu'+i}>
                {m.subMenu && m.subMenu.map((sub,i) =>
                    <li><Link activeClassName='active' to={sub.path} key={'sub'+i}>{sub.title}</Link></li>
                )}
            </Linkset>)}

        </ul>
    </div>
)

export default DocSideBar
