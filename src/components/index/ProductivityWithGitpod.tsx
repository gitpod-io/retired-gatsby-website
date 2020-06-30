import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import ProductivityGraphic from './ProductivityGraphic'

const Styled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1040px;
    margin: 0 auto;
    
    @media(min-width: 1141px) {
        padding-bottom: 0;
        margin-bottom: -5rem;
    }

    @media(max-width: 1120px) {
        flex-direction: column;
        max-width: 450px;
        margin:  auto;
    }

    .bar-wrapper {
        flex: 0 0 38%;
        min-width: 440px;

        @media(max-width: 1120px) {
            margin: 10rem 0;
        }

        @media(max-width: 500px) {
            min-width: 340px;
            margin: 8rem 0 12rem;
        }

        @media(max-width: 360px) {
            min-width: auto;
            width: 100%;
            margin-top: 6rem;
        }
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: ${colors.white};
        border-radius: 50%;
        transform: scale(1.01);
        transform: rotate(45deg);
    }

    .text {
        flex: 0 0 52%;
    }

    h2 + p {
        margin: 0;
        margin-top: 4rem;
    }
`

const ProductivityWithGitpod = () => (
    <div className="row">
        <Styled>
            <div className="bar-wrapper">
                <ProductivityGraphic />
            </div>
            <div className="text">
                <h2><strong>Increase your productivity up to 24%</strong> with prebuilt & automated dev&nbsp;environments.</h2>
                <p>With Gitpod you can maintain your dev environment as code: share it in the team, version and control it.</p>
            </div>
        </Styled>
    </div>
)

export default ProductivityWithGitpod
