import * as React from 'react'
import { Link } from 'gatsby'
import { MENU } from '../docs/menu';

interface DocMenuProps {

}

const DocMenu: React.SFC<DocMenuProps> = () => {

    return <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', left: 30, top: 50}}>
        {MENU.map( m => {
            return <>
                <Link key={m.path} to={`/docs/${m.path}`} style={{marginTop: 0}}>{m.title}</Link>
                {
                    (m.subMenu || []).map(m =>
                        <Link key={m.path} to={`/docs/${m.path}`} style={{marginLeft: 10}}>{m.title}</Link>
                    )
                }
            </>
        })}
    </div>
}

export default DocMenu
