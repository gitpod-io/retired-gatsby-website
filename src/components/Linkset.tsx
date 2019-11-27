import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import { Link } from 'gatsby'
import Arrow from '../resources/arrow.svg'
import DownArrow from '../resources/arrow-down.svg'

const StyledLinkSet = styled.div`

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    a {
        display: inline-block;
        font-size: 1.5rem;

        &.caption {
            border: none;
            font-weight: 600;
            font-size: 1.9rem;

            img {
                display: inline-block;
                margin: -2rem 1rem 0 0;
            }
        }

        &:not(.caption) {
            padding-left: 2rem;
        }
    }

    li {
        &:not(.caption) {
            padding-left: 2rem;
        }

        a {
            color: ${colors.text};
            font-weight: 400;
        }
    }
`

interface LinkSetProps {
    caption: string
    path?: string
    isRendered?: boolean
}

class Linkset extends React.Component<LinkSetProps, {}> {

    state = {
        isRendered: this.props.isRendered || false
    }

    handleClick = () => {
        this.setState({isRendered: !this.state.isRendered})
    }

    render() {

        const { isRendered } = this.state
        const { caption, path, children } = this.props

        return (
            <StyledLinkSet>
                <li>
                    <Link
                        to={path ? `/docs/${path}/` : '/docs/'}
                        onClick={this.handleClick}
                        className="caption"
                    >{ isRendered ? <img alt=""  src={Arrow}/> : <img alt="" src={DownArrow}/> }{caption}</Link>
                </li>
                {
                    isRendered ? children : null
                }
            </StyledLinkSet>
        )
    }
}

export default Linkset
