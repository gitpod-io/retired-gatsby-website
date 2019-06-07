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
import mediaKitPDF from '../resources/Media_kit2.pdf';
import LogoWhite from '../resources/logo-white.svg';
import LogoBlack from '../resources/logo-black.svg';
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

    svg {
        height: 30px;
        transform: translateY(45px);
    }s
`

const PressPage: React.SFC<{}> = () => (
    <IndexLayout title="Gitpod - Press" canonical="https://www.gitpod.io/press">
        <Page>
            <Container>
                <Logos logos={[
                    [1050, 125, 40],
                ]} />
                <div style={{ marginTop: 60 }}>
                    <h4 style={{ color: colors.fontColor2 }}>Media kit</h4>
                    <h1>Press Information</h1>
                    <UnderLine />
                </div>
                <p style={{ marginBottom: 80 }} >
                    Would you like to cooperate with us? Write something about Gitpod? Or maybe you are just curious?<br />Our media kit will give an overview about Gitpod.
                </p>
                <MediaKit>
                    <div style={{ position: 'relative' }}>
                        <a href={mediaKitPDF} download>
                            <img src={mediaKitPreview} alt="Media Kit PDF Preview" className="preview-img" />
                        </a>
                        <p style={{ marginTop: 15 }}>Fact Sheet</p>
                    </div>
                    <div>
                        <div className="logo">
                            <div className="svg-container" style={{ background: '#fff' }}>
                                <a download href={LogoWhite}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 632.19 206.35">
                                        <defs />
                                        <polygon className="cls-1" fill="#0087be" points="89.35 185.6 17.74 144.58 17.74 61.87 17.77 61.85 0 51.6 0 154.76 0 154.77 89.35 206.35 89.35 206.35 89.35 185.6 89.35 185.6"
                                        />
                                        <polygon className="cls-1" fill="#0087be" points="89.35 103.18 89.35 103.18 35.77 72.25 35.74 72.27 35.74 134.15 89.35 164.86 89.35 103.19 89.35 103.19 89.35 103.18"
                                        />
                                        <polygon className="cls-2" fill="#1aa6e4" points="178.71 51.61 89.35 0 0 51.59 0 51.6 17.77 61.85 89.35 20.55 160.98 61.83 178.7 51.61 178.7 51.62 178.71 51.62 178.71 51.61"
                                        />
                                        <polygon className="cls-2" fill="#1aa6e4" points="142.97 72.23 89.36 41.33 35.77 72.25 89.35 103.18 142.97 72.23"
                                        />
                                        <polygon className="cls-3" fill="#0092cf" points="89.35 103.18 89.35 103.19 89.35 103.19 89.35 103.19 89.35 103.18 89.35 103.18 89.35 103.18"
                                        />
                                        <polygon className="cls-3" fill="#0092cf" points="89.35 103.18 89.35 103.18 89.35 103.18 142.98 72.23 142.97 72.23 89.35 103.18"
                                        />
                                        <polygon className="cls-3" fill="#0092cf" points="160.98 61.83 160.99 61.84 178.7 51.62 178.7 51.61 160.98 61.83"
                                        />
                                        <polygon className="cls-4" fill="#e8bfd8" points="142.98 72.23 160.99 61.84 160.98 61.83 142.97 72.23 142.98 72.23"
                                        />
                                        <polygon className="cls-3" fill="#0092cf" points="178.7 51.62 160.99 61.84 142.98 72.23 89.35 103.18 89.35 103.18 89.35 103.19 89.35 103.19 89.35 112.41 89.34 112.41 89.34 136.91 89.35 136.91 89.35 164.86 89.35 164.86 143.02 134.14 143.02 113.66 107.01 134.15 107.01 113.44 161.02 82.7 161.02 144.58 89.35 185.6 89.35 206.35 178.7 154.78 178.7 154.78 178.7 154.77 178.7 51.62"
                                        />
                                        <path className="cls-5" d="M298.82,135.12c-6.25,6.51-15.89,10.1-27.17,10.1-21.53,0-37.77-16.91-37.79-39.38,0-22.92,16.07-39.56,38.24-39.58a45.9,45.9,0,0,1,28.19,9.67l1,.76V68.41l-.23-.19c-7.9-6.07-18.08-9.28-29.43-9.27-25.92,0-45.45,20.12-45.43,46.77s19.58,46.72,45.49,46.7c13.87,0,26.15-5.07,34.59-14.24l.16-.17,0-39.46H298.8Z"
                                        />
                                        <rect className="cls-5" x="329.54" y="88.72" width="7.45" height="62.12"
                                        />
                                        <path className="cls-5" d="M333.16,62.21a5.7,5.7,0,1,0,5.7,5.7A5.71,5.71,0,0,0,333.16,62.21Z"
                                        />
                                        <path className="cls-5" d="M375.31,69.19h-7.44V88.7H352.46v6.81l15.42,0,0,38.53c0,11.81,5.89,18.31,16.55,18.3,4.67,0,9.8-1.23,12.19-2.92l.26-.18V141.9l-.89.51a20.08,20.08,0,0,1-9.9,2.73c-7.93,0-10.74-3.34-10.75-12.77l0-36.87,22.43,0V88.67l-22.43,0Z"
                                        />
                                        <path className="cls-5" d="M446,87.11c-10,0-18.57,3.89-24.37,11V88.66h-7.44l.06,87.61h7.45l0-35c5.86,7.16,14.45,11.07,24.39,11.06,18,0,31.56-14,31.54-32.62S464,87.1,446,87.11Zm24,32.57c0,14.62-10.85,25.66-25.25,25.67a25.88,25.88,0,0,1-23.12-14.55V108.51A25.68,25.68,0,0,1,444.7,94.05C459.11,94,470,105.06,470,119.68Z"
                                        />
                                        <path className="cls-5" d="M523.08,87.05c-18.8,0-33,14.09-33,32.74s14.2,32.46,33,32.44,33.09-14,33.08-32.48C556.19,101.09,542,87,523.08,87.05Zm0,6.94c14.55,0,25.53,11.06,25.54,25.76a25.46,25.46,0,1,1-50.92,0C497.7,105.09,508.61,94,523.09,94Z"
                                        />
                                        <path className="cls-5" d="M624.68,60.21l0,37.84C618.85,90.9,610.26,87,600.32,87c-18,0-31.56,14.09-31.55,32.75,0,18.5,13.6,32.45,31.6,32.43,10,0,18.57-3.88,24.37-11v9.42h7.44l-.06-90.41Zm0,48.28v22.28a26,26,0,0,1-23.09,14.47c-14.41,0-25.28-11-25.29-25.51,0-14.7,10.85-25.79,25.25-25.8A26.34,26.34,0,0,1,624.72,108.49Z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <span>Logo for bright backgrounds</span>
                        </div>
                        <div className="logo">
                            <div className="svg-container">
                                <a download href={LogoBlack}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 632.19 206.35" fill="#fff">
                                        <defs />
                                        <polygon className="cls-1" fill="#0087be" points="89.35 185.6 17.74 144.58 17.74 61.87 17.77 61.85 0 51.6 0 154.76 0 154.77 89.35 206.35 89.35 206.35 89.35 185.6 89.35 185.6"
                                        />
                                        <polygon className="cls-1" fill="#0087be" points="89.35 103.18 89.35 103.18 35.77 72.25 35.74 72.27 35.74 134.15 89.35 164.86 89.35 103.19 89.35 103.19 89.35 103.18"
                                        />
                                        <polygon className="cls-2" fill="#1aa6e4" points="178.71 51.61 89.35 0 0 51.59 0 51.6 17.77 61.85 89.35 20.55 160.98 61.83 178.7 51.61 178.7 51.62 178.71 51.62 178.71 51.61"
                                        />
                                        <polygon className="cls-2" fill="#1aa6e4" points="142.97 72.23 89.36 41.33 35.77 72.25 89.35 103.18 142.97 72.23"
                                        />
                                        <polygon className="cls-3" fill="#0092cf" points="89.35 103.18 89.35 103.19 89.35 103.19 89.35 103.19 89.35 103.18 89.35 103.18 89.35 103.18"
                                        />
                                        <polygon className="cls-3" fill="#0092cf" points="89.35 103.18 89.35 103.18 89.35 103.18 142.98 72.23 142.97 72.23 89.35 103.18"
                                        />
                                        <polygon className="cls-3" fill="#0092cf" points="160.98 61.83 160.99 61.84 178.7 51.62 178.7 51.61 160.98 61.83"
                                        />
                                        <polygon className="cls-4" fill="#e8bfd8" points="142.98 72.23 160.99 61.84 160.98 61.83 142.97 72.23 142.98 72.23"
                                        />
                                        <polygon className="cls-3" fill="#0092cf" points="178.7 51.62 160.99 61.84 142.98 72.23 89.35 103.18 89.35 103.18 89.35 103.19 89.35 103.19 89.35 112.41 89.34 112.41 89.34 136.91 89.35 136.91 89.35 164.86 89.35 164.86 143.02 134.14 143.02 113.66 107.01 134.15 107.01 113.44 161.02 82.7 161.02 144.58 89.35 185.6 89.35 206.35 178.7 154.78 178.7 154.78 178.7 154.77 178.7 51.62"
                                        />
                                        <path className="cls-5" d="M298.82,135.12c-6.25,6.51-15.89,10.1-27.17,10.1-21.53,0-37.77-16.91-37.79-39.38,0-22.92,16.07-39.56,38.24-39.58a45.9,45.9,0,0,1,28.19,9.67l1,.76V68.41l-.23-.19c-7.9-6.07-18.08-9.28-29.43-9.27-25.92,0-45.45,20.12-45.43,46.77s19.58,46.72,45.49,46.7c13.87,0,26.15-5.07,34.59-14.24l.16-.17,0-39.46H298.8Z"
                                        />
                                        <rect className="cls-5" x="329.54" y="88.72" width="7.45" height="62.12"
                                        />
                                        <path className="cls-5" d="M333.16,62.21a5.7,5.7,0,1,0,5.7,5.7A5.71,5.71,0,0,0,333.16,62.21Z"
                                        />
                                        <path className="cls-5" d="M375.31,69.19h-7.44V88.7H352.46v6.81l15.42,0,0,38.53c0,11.81,5.89,18.31,16.55,18.3,4.67,0,9.8-1.23,12.19-2.92l.26-.18V141.9l-.89.51a20.08,20.08,0,0,1-9.9,2.73c-7.93,0-10.74-3.34-10.75-12.77l0-36.87,22.43,0V88.67l-22.43,0Z"
                                        />
                                        <path className="cls-5" d="M446,87.11c-10,0-18.57,3.89-24.37,11V88.66h-7.44l.06,87.61h7.45l0-35c5.86,7.16,14.45,11.07,24.39,11.06,18,0,31.56-14,31.54-32.62S464,87.1,446,87.11Zm24,32.57c0,14.62-10.85,25.66-25.25,25.67a25.88,25.88,0,0,1-23.12-14.55V108.51A25.68,25.68,0,0,1,444.7,94.05C459.11,94,470,105.06,470,119.68Z"
                                        />
                                        <path className="cls-5" d="M523.08,87.05c-18.8,0-33,14.09-33,32.74s14.2,32.46,33,32.44,33.09-14,33.08-32.48C556.19,101.09,542,87,523.08,87.05Zm0,6.94c14.55,0,25.53,11.06,25.54,25.76a25.46,25.46,0,1,1-50.92,0C497.7,105.09,508.61,94,523.09,94Z"
                                        />
                                        <path className="cls-5" d="M624.68,60.21l0,37.84C618.85,90.9,610.26,87,600.32,87c-18,0-31.56,14.09-31.55,32.75,0,18.5,13.6,32.45,31.6,32.43,10,0,18.57-3.88,24.37-11v9.42h7.44l-.06-90.41Zm0,48.28v22.28a26,26,0,0,1-23.09,14.47c-14.41,0-25.28-11-25.29-25.51,0-14.7,10.85-25.79,25.25-25.8A26.34,26.34,0,0,1,624.72,108.49Z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <span>Logo for dark backgrounds</span>
                        </div>
                        <div className="logo">
                            <div className="svg-container">
                                <a download href={Logo}>
                                    <svg id="logo-final" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scale(2.6) translateY(15px)' }} viewBox="0 0 178.7 206.4">
                                        <polygon className="st0" fill="#0087BE" points="89.3,185.6 17.7,144.6 17.7,61.9 17.8,61.9 0,51.6 0,154.8 0,154.8 89.3,206.4 89.3,206.4"
                                        />
                                        <polygon className="st0" fill="#0087BE" points="89.3,103.2 89.3,103.2 35.8,72.3 35.7,72.3 35.7,134.2 89.3,164.9 89.3,103.2"
                                        />
                                        <polygon className="st1" fill="#1AA6E4" points="178.7,51.6 89.3,0 0,51.6 0,51.6 17.8,61.9 89.3,20.6 161,61.8 178.7,51.6 178.7,51.6"
                                        />
                                        <polygon className="st1" fill="#1AA6E4" points="143,72.2 89.4,41.3 35.8,72.3 89.3,103.2"
                                        />
                                        <polygon className="st2" fill="#0092CF" points="89.3,103.2 89.3,103.2 89.3,103.2 89.3,103.2 89.3,103.2"
                                        />
                                        <polygon className="st2" fill="#0092CF" points="89.3,103.2 89.3,103.2 89.3,103.2 143,72.2 143,72.2"
                                        />
                                        <polygon className="st2" fill="#0092CF" points="161,61.8 161,61.8 178.7,51.6 178.7,51.6"
                                        />
                                        <polygon className="st2" fill="#0092CF" points="178.7,51.6 161,61.8 143,72.2 89.3,103.2 89.3,103.2 89.3,103.2 89.3,103.2 89.3,112.4 89.3,112.4 89.3,136.9 89.3,136.9 89.3,164.9 89.3,164.9 143,134.1 143,113.7 107,134.2 107,113.4 161,82.7 161,144.6 89.3,185.6 89.3,206.4 178.7,154.8 178.7,154.8 178.7,154.8"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <span>Figurative logos</span>
                        </div>
                    </div>
                </MediaKit>
                <p>If you have any question or feedback, please contact us.&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>
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
