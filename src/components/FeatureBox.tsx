import React from 'react'

import styled from '@emotion/styled'
import { colors, shadows } from '../styles/variables'

const StyledFeatureBox = styled.div`
    min-width: 20rem;
    padding: 1.5rem .8rem;
    text-align: center;
    background: ${colors.white};
    box-shadow: ${shadows.light};
    border-radius: 2rem;
    height: 150px;

    h3 {
        font-weight: 400;
        font-size: 2rem;
    }

    img {
        height: 4rem;
        display: block;
        margin: 1rem auto;
    }
`

interface FeatureBoxProps {
    alt: string
    img: string
    hover: string
    text: string | JSX.Element
    path: string
}

class FeatureBox extends React.Component<FeatureBoxProps, { isHovered: boolean }> {
    constructor(props: FeatureBoxProps) {
        super(props);
        this.state = {
            isHovered: false
        }
    }

    handleHover = (val: boolean) => {
        this.setState({ isHovered: val });
    }

    render() {
        const { img, hover, text, path } = this.props;
        return <StyledFeatureBox>
            <a href={`#${path}`} onMouseOver={() => this.handleHover(true)} onMouseOut={() => this.handleHover(false)}>
                <object data={this.state.isHovered ? hover : img} />
                <h3>{text}</h3>
            </a>
        </StyledFeatureBox>
    }
}

export default FeatureBox
