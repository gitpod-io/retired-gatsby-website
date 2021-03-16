import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { Link } from 'gatsby'

const StyledLinkSet = styled.div`

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    a {
        display: inline-block;
        font-size: 1.5rem;
        border-left: solid 1px transparent;
        color: ${colors.text};
        font-weight: 400;

        &:hover {
            color: ${colors.lightBlue};
        }

        &.active {
            color: ${colors.lightBlue};
            border-left: solid 1px ${colors.lightBlue};
        }

        &.caption {
            margin-bottom: .4rem;
            font-weight: 400;
            font-size: 1.7rem;
            padding-left: 1.0rem;
        }

        &:not(.caption) {
            padding-left: 1.8rem;
        }

    }
`

interface LinkSetProps {
    caption: string
    path: string
}

class Linkset extends React.Component<LinkSetProps, {}> {

    render() {

        const { caption, path, children } = this.props

        return (
            <StyledLinkSet>
                <li>
                    <Link
                        to={path}
                        className="caption"
                        activeClassName='active'
                    >
                        {caption}
                    </Link>
                </li>
                {children}
            </StyledLinkSet>
        )
    }
}

export default Linkset
