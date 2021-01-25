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
        <p>Hey there,</p>
        <p>It’d be great if you could shortly let us know why you uninstalled the browser extension.</p>
        <p>We’d like your feedback to understand how we can make Gitpod more useful. We’re committed to improving it, and we’re hoping to see you soon again.
        </p>
        <p>Best,</p>
        <img src={SvenName} className="sig" alt="Sven" title="Sven" />
        <div className="ceo">
            <img src={Sven} alt="Sven Efftinge" />
            <p>Co-Founder & CEO</p>
        </div>
    </StyledMessage>
)

export default Message
