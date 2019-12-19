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
    position:relative;

    h3 {
        font-weight: 400;
        font-size: 2rem;
    }

    object {
        height: 4rem;
        display: block;
        margin: 1rem auto;
    }

    .hoverOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
            <a href={`#${path}`}>
                <div>
                    <object data={this.state.isHovered ? hover : img} />
                </div>
                <div>
                    <h3>{text}</h3>
                </div>
                <div className="hoverOverlay" onMouseOver={() => this.handleHover(true)} onMouseOut={() => this.handleHover(false)}></div>
            </a>
        </StyledFeatureBox>
    }
}

export default FeatureBox
