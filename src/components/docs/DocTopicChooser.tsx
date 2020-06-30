import React from 'react'

import { navigate } from 'gatsby'
import { MENU } from '../../docs/menu'
import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'

const StyledTopicChooser = styled.div`
    margin-bottom: 3rem;

    .topic-chooser {
        margin: 0 auto;
        padding: 1rem 2.5rem;
        background-position: right 1.7em top 50%, 0 0;

        @media(min-width: calc(${sizes.breakpoints.lg} + 1px)) {
            display: none;
        }

        @media(max-width: 320px) {
            padding: 1rem 1.5rem;
            width: 100%;
        }
    }
`

function onSelectTopic(event: React.FormEvent<HTMLSelectElement>) {
    navigate(event.currentTarget.value)
}

const DocTopicChooser: React.SFC<{}> = () => {
    return (
        <StyledTopicChooser>
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
        </StyledTopicChooser>
    )
}


export default DocTopicChooser
