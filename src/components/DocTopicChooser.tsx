import React from 'react'

import { navigate } from 'gatsby'
import { MENU } from '../docs/menu';

function onSelectTopic(event: React.FormEvent<HTMLSelectElement>) {
    navigate(event.currentTarget.value);
}

const DocTopicChooser: React.SFC<{}> = () => {
    return (
        <div style={{marginBottom: '3rem'}}>
            <select className='topic-chooser' onChange={onSelectTopic}>
                <option value='#' selected={true}>Select A Topic</option>
                {MENU.map(m => {
                    return <>
                        <option key={m.path} value={m.path}>{m.title}</option>
                        {
                            (m.subMenu || []).map(m =>
                                <option key={m.path} value={m.path}>&nbsp;&nbsp;&nbsp;&nbsp;{m.title}</option>
                            )
                        }
                    </>
                })}
            </select>
        </div>
    )
}


export default DocTopicChooser
