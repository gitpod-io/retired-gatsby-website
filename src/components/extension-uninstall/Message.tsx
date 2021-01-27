import React from 'react'
import Sven from '../../resources/sven.png'
import SvenName from '../../resources/sven-signature-style-name.svg'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const StyledMessage = styled.blockquote`
    padding: 4rem 5rem;
    background: ${colors.offWhite};

    @media(min-width: 1001px) {
        min-width: 400px;
    }

    .sig {
        display: block;
        margin-top: 1.5rem;
    }

    .ceo {
        display: flex;
        align-items: center;
        margin-top: 5rem;

        img {
            height: 6rem;
            margin-right: 1rem;
        }
    }
`

const Message = () => (
    <StyledMessage>
        <p>Hi there,</p>
        <p> Sad to see you leave 😕 To improve and make sure that other developers are happier with Gitpod, we’d love to get your opinion on why you decided to uninstall your browser extension.</p>
        <p> We will work hard to build a product that (hopefully) convinces you to use Gitpod again at a later point ✌️</p>
    </StyledMessage>
)

export default Message
