import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import { UnderLine } from '../styles/typography';
import styled from '@emotion/styled';
import { getEmSize } from '../styles/mixins';
import { colors, breakpoints } from '../styles/variables';
import mediaKitPreview from '../resources/media-kit.png';
import mediaKitPDF from '../resources/gitpod-factsheet.pdf';
import LogoDark from '../resources/logo-dark.svg';
import LogoLight from '../resources/logo-light.svg';
import Logo from '../resources/logo-textless.svg';

const MediaKit = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 100px;

    div {
        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            flex: 5;
        }
        @media(max-width: ${getEmSize(breakpoints.md) - 1}em) {
            margin: auto;
        }
    }

    .preview-img {
        width: 300px;
        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            transform: translateY(15px);
        }
    }

    p {
        @media(max-width: ${getEmSize(breakpoints.md) - 1}em) {
            text-align: center;
        }
    }

    .logo {
        display: table;
        border-collapse:separate;
        border-spacing:0 15px;
        width: 100%;
    }

    .svg-container {
        display: table-cell;
        vertical-align: middle;
        height: 120px;
        width: 25%;
        background: #2a2a2a;
        text-align: center;
        @media(max-width: ${getEmSize(breakpoints.md) - 1}em) {
            width: 35%;
        }
        &:not(:last-child) {
            margin-bottom: 30px;
        }

        & a {
            display: inline-block;
            width: 100%;
            height: 100%;
        }
    }

    span {
        display: table-cell;
        vertical-align: middle;
        width: 72%;
        padding-left: 60px;
        @media(max-width: ${getEmSize(breakpoints.md) - 1}em) {
            width: 75%;
        }
    }

    img {
        &:not(.preview-img) {
             height: 30px;
             transform: translateY(45px);
        }
    }
`

const PressPage: React.SFC<{}> = () => (
    <IndexLayout title="Gitpod - Media Kit" canonical="https://www.gitpod.io/media/">
        <Page>
            <Container>
                <Logos logos={[
                    [1050, 125, 40],
                ]} />
                <div style={{ marginTop: 60 }}>
                    <h4 style={{ color: colors.fontColor2 }}>Media Kit</h4>
                    <h1>Press Information</h1>
                    <UnderLine />
                </div>
                <p style={{ marginBottom: 80 }} >
                     Are you looking to write a story about Gitpod? We'd love to help you with that!<br />Here are our official logos and a quick fact sheet about Gitpod.
                </p>
                <MediaKit>
                    <div style={{ position: 'relative' }}>
                        <a href={mediaKitPDF} download>
                            <img src={mediaKitPreview} alt="Gitpod Fact Sheet PDF Preview" className="preview-img" />
                        </a>
                        <p style={{ marginTop: 15 }}>Fact Sheet</p>
                    </div>
                    <div>
                        <div className="logo">
                            <div className="svg-container" style={{ background: '#fff' }}>
                                <a download href={LogoDark}>
                                    <img src={LogoDark} alt="Gitpod logo light" />
                                </a>
                            </div>
                            <span>Logo for bright backgrounds</span>
                        </div>
                        <div className="logo">
                            <div className="svg-container">
                                <a download href={LogoLight}>
                                    <img src={LogoLight} alt="Gitpod logo dark" />
                                </a>
                            </div>
                            <span>Logo for dark backgrounds</span>
                        </div>
                        <div className="logo">
                            <div className="svg-container">
                                <a download href={Logo}>
                                    <img src={Logo} alt="Gitpod logo no text" style={{transform: 'scale(2.5) translateY(17px)'}}/>
                                </a>
                            </div>
                             <span>Logo without text</span>
                        </div>
                    </div>
                </MediaKit>
                <p>If you have any question or feedback, please contact us.&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="mailto:contact@gitpod.io">
                        <button className='primary'>
                            Contact
                        </button>
                    </a>
                </p>
            </Container>
        </Page>
    </IndexLayout >
)

export default PressPage
