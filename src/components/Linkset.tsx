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

        &.caption {
            margin-bottom: .4rem;
            border: none;
            font-weight: 400;
            font-size: 1.7rem;

            img {
                display: inline-block;
                margin: 0 1rem 0 0;
            }
        }

        &:not(.caption) {
            padding-left: 1.8rem;
        }

        &:hover {
            color: ${colors.lightBlue};
        }
    }

    li {
        &:not(.caption) {
            padding-left: 1rem;
        }

        a {
            color: ${colors.text};
            font-weight: 400;
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
