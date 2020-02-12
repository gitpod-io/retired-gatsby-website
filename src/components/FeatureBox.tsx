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

    &:hover {
        background-color: ${colors.offWhite};
    }
`

interface FeatureBoxProps {
    alt: string
    img: string
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
        const { img, text, path } = this.props;
        return <StyledFeatureBox>
            <a href={`#${path}`}>
                <div>
                    <object tabIndex={-1} data={img} />
                </div>
                <div>
                    <h3>{text}</h3>
                </div>
            </a>
        </StyledFeatureBox>
    }
}

export default FeatureBox
