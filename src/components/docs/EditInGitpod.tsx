import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const StyledEditInGitpod = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;

    .pen {
        fill: ${colors.white};
        transition: all .2s;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5.5rem;
        width: 5.5rem;
        background: ${colors.offWhite1};
        border-radius: 50%;
        transition: all .2s;

        &:hover,
        &:focus {
            background: ${colors.text};
        }
    }
`

const EditInGitpod = ({ editUrl }: { editUrl: string }) => (
    <StyledEditInGitpod className="pen-container">
        <a href={editUrl} title="Edit this page in Gitpod" target="_blank">
            <svg className="pen" xmlns="http://www.w3.org/2000/svg" width="22.454" height="25.307" viewBox="0 0 22.454 25.307"><title>Edit this page in Gitpod</title><path d="M25.088,13.816,12.516,27.982h0L8.063,22.964,20.635,8.8l4.453,5.018Zm.787-.887L27.8,10.763a2.744,2.744,0,0,0,.011-3.55l-1.313-1.48a2.048,2.048,0,0,0-3.151.012L21.422,7.911l4.453,5.018ZM11.729,28.869l-.163.184L6,30.307l1.113-6.272.163-.184,4.453,5.018Z" transform="translate(-6 -5) translate(6 5) translate(-6 -5)" /></svg>
        </a>
    </StyledEditInGitpod>
)

export default EditInGitpod
