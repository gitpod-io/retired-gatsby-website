import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';
import { UnderLine } from '../styles/typography';
import TweetEmbed from 'react-tweet-embed'
import BrowserExtension from '../resources/browser-ext.png';
import ExampleBox from '../components/ExampleBox';
import Python from '../resources/Logo_Python.svg';
import Java from '../resources/Logo_Java.svg';
import Go from '../resources/Logo_Go.svg';
import JS from '../resources/Logo_JS.svg';
import ScreenshotVideo from '../resources/gitpod-mac.jpg';
import Octocat from '../resources/Octocat.png';

import { arrowLeft, arrowRight, arrow, rocket, brain } from '../resources/icons';
import styled from '@emotion/styled';
import GitGraph from '../components/GitGraph';
import GatsbyLink from 'gatsby-link';
import { Teaser } from '../components/Teaser';
import Bowser from 'bowser';
import PrefixScreenshot from '../resources/prefix-screenshot.png';

interface IndexPageState { isOpen: boolean, worksMode: number }

const GitpodHeader = styled.div`
    max-width: 360px;
    height: 550px;
    margin-top: 140px;
    z-index: 2;
    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-top: 110px;
    }
`

const VideoLaptop = styled.div`
    position: absolute;
    left: 375px;
    top: 100px;

    > svg {
        padding: 80px;
    }

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        position: relative;
        top: 0;
        left: 0;
        margin-top: 50px;
        margin-bottom: 30px;

        > img {
            width: 100%;
        }

        > svg {
            padding: 60px;
        }
    }

    @media (max-width: ${getEmSize(breakpoints.sm - 1)}em) {
        > svg {
            padding: 25px;
        }
    }
`

const HowItWorks = styled.section`
    flex-grow: 2;

    > * {
        margin: 30px;
        min-height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .browser-extension-image {
        height: 132px;
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
        > :not(.selected) {
            display: none;
        }
        .browser-extension-description button {
            margin-left: 20px;
        }
    }

    @media (max-width: ${getEmSize(breakpoints.sm - 1)}em) {
        > * {
            margin: 0;
        }
        > :not(:first-of-type) {
            margin-top: 70px;
        }
        button {
            width: 100%;
        }
        .browser-extension-image {
            height: auto;
        }
        .browser-extension-description {
            flex-direction: column;
            > * {
                width: 100%;
            }
        }
    }
`

const WhyBoxes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        flex-direction: column;
    }
`

const WhyBox = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        width: 100%;
        margin-bottom: 40px;
    }
`;

const ResponsiveTweet = styled.div`
    position: absolute;
    width: 435px;

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        position: static;
        width: 106%;
    }
`

const TellMeMore = styled.div`

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        text-align: center;

        button {
            width: 100%;
        }
    }
`

const SectionBuiltOn = styled.section`
    padding: 80px 0 0 0;
    margin-bottom: 50px;
    .row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 80px;
        @media(min-width: ${getEmSize(breakpoints.lg)}em) {
            margin-left: -20px;
        }
        @media(max-width: ${getEmSize(breakpoints.md) - 1}em) {
           flex-direction: column;
        }
    }
    .col {
        flex: 1.66;
        text-align: center;
        &:last-child {
            flex: 1.67
        }
        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            &:not(:last-child) {
            margin-right: 40px;
            }
        }
        @media(max-width: ${getEmSize(breakpoints.md)}em) {
           margin-bottom: 20px;
        }
    }
    svg {
        width: 75px;
        height: 75px;
    }
    h5 {
        margin-top: 15px;
        font-size: 17px;
    }
`

export default class IndexPage extends React.Component<{}, IndexPageState> {

    protected getBrowserExtension(): string {
        if (typeof window !== "undefined" && window.navigator) {
            const browser = Bowser.getParser(window.navigator.userAgent);
            if (browser.getBrowserName().toLowerCase().includes('firefox')) {
                return 'https://addons.mozilla.org/en-US/firefox/addon/gitpod/';
            }
        }
        return 'https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki'
    }

    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false,
            worksMode: 0
        }
        this.openModal = this.openModal.bind(this);
    }

    protected openModal() {
        this.setState({ isOpen: true })
    }

    protected getHowDoesItWork(): JSX.Element {
        const modes = ['URL Prefix', 'Browser Extension', 'GitHub App'];
        return <div style={{ minHeight: 550 }} >
            <h2 >Three Ways to Start Coding</h2>
            <div className='flex hidden-md-down' style={{ zIndex: 99 }}>
                {
                    [0, 1, 2].map(idx =>
                        (<div key={'menu_' + idx} style={{ cursor: 'pointer', paddingTop: 30 }} onClick={() => this.setState({ worksMode: idx })}>
                            <h3 style={{ paddingRight: 60, color: this.state.worksMode === idx ? colors.fontColor1 : colors.fontColor2 }} >{modes[idx]}</h3>
                        </div>))
                }
            </div>
            <div style={{ display: 'flex', minHeight: 280 }}>
                <div className='hidden-md-down' style={{ minWidth: 40, margin: 'auto' }} onClick={() => this.setState({ worksMode: (this.state.worksMode + 2) % 3 })}>
                    {arrowLeft({ width: 16, cursor: 'pointer', margin: 12 })}
                </div>
                <HowItWorks>
                    <div className={this.state.worksMode === 0 ? 'selected' : ''}>
                        <h3>Prefix any GitHub URL with <strong className="glow">gitpod.io/#</strong></h3>
                        <div style={{ marginBottom: 10 }}>
                            <img src={PrefixScreenshot} alt="Gitpod URL Prefix" />
                        </div>
                        <p>... and get a ready-to-code dev environment immediately.</p>
                    </div>
                    <div className={this.state.worksMode === 1 ? 'selected' : ''}>
                        <h3>Install the Browser Extension</h3>
                        <img
                            className='browser-extension-image'
                            src={BrowserExtension}
                            alt="Browser Extension"
                        />
                        <div className='browser-extension-description' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p>The browser extension adds a button to every GitHub repository, issue and pull request. So you don't have to prefix manually.</p>
                            <button className='primary' style={{ minWidth: 200 }} onClick={() => {
                                window.open(this.getBrowserExtension(), '_blank');
                            }}>Get Browser Extension</button>
                        </div>
                    </div>
                    <div className={this.state.worksMode === 2 ? 'selected' : ''}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <h3>Install the GitHub app</h3>
                                <p>Like Continuous Integration, the GitHub App detects changes in your repository and starts preparing workspaces. By the time your team starts to code, all dependencies are preinstalled, and the code is already compiled.</p>
                                <a href='https://github.com/marketplace/gitpod-io' target='_blank' rel="noreferrer"><button className='primary' style={{ minWidth: 200 }}>GitHub Marketplace</button></a>
                            </div>
                            <img
                                className='hidden-md-down'
                                style={{ marginTop: 15, width: 250 }}
                                src={Octocat}
                                alt="GitHub Octocat"
                            />
                        </div>
                    </div>
                </HowItWorks>
                <div className='hidden-md-down' style={{ minWidth: 40, margin: 'auto' }} onClick={() => this.setState({ worksMode: (this.state.worksMode + 1) % 3 })}>
                    {arrowRight({ width: 16, cursor: 'pointer', margin: 12 })}
                </div>
            </div>
            <div className='flex hidden-md-down' style={{ justifyContent: 'center' }}>
                {
                    [0, 1, 2].map(idx =>
                        (<div key={'_' + idx} onClick={() => this.setState({ worksMode: idx })} style={{ cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" style={{ margin: 3 }}>
                                <circle cx="5" cy="5" r="5" fill={this.state.worksMode === idx ? colors.fontColor1 : colors.fontColor2} />
                            </svg>
                        </div>))
                }
            </div>
        </div>
    }

    render() {
        const twitterOptions = { theme: 'light', dnt: true, cards: 'hidden' };
        return <IndexLayout canonical="https://www.gitpod.io/">
            <Page>
                <Container>
                    <Logos logos={[
                        [1080, 30, 50],
                        [-70, 560, 70],
                        [10, 540, 40]
                    ]} />
                    <div style={{ zIndex: 99, position: "fixed", top: 50, left: 'auto' }}>
                        <ModalVideo channel='youtube'
                            youtube={{
                                autoplay: 1,
                                cc_load_policy: 1,
                                theme: 'dark'
                            }}
                            isOpen={this.state.isOpen}
                            videoId='bFZMKpDV3GQ'
                            onClose={() => this.setState({ isOpen: false })} />
                    </div>
                    <GitpodHeader>
                        <h2 style={{ color: colors.fontColor2, marginBottom: 15 }}>Frictionless Coding</h2>
                        <h1 style={{ fontSize: '2.4em' }}>One-Click Online IDE<br /> for GitHub</h1>
                        <UnderLine />
                        <p>Gitpod launches ready-to-code dev environments from any GitHub page.</p>
                    </GitpodHeader>
                    <VideoLaptop>
                        <svg x="0px" y="0px" viewBox="0 0 100 100"
                            className="button-like"
                            style={{
                                cursor: 'pointer',
                                width: '40%',
                                position: 'absolute',
                                left: '30%',
                                top: '10%',
                                zIndex: 1,
                                strokeWidth: 1,
                                stroke: colors.fontColor1,
                                fill: 'rgba(0,0,0,0.4)'
                            }}
                            onClick={this.openModal}>
                            <circle cx="50" cy="50" r="40" />
                            <polygon points="40,35 40,70 70,50" style={{ fill: colors.fontColor1 }} />
                        </svg>
                        <img alt="Gitpod Video" style={{ maxWidth: 700 }} src={ScreenshotVideo}>
                        </img>
                    </VideoLaptop>
                </Container>
                <Container>
                    <GitGraph left={-900} top={0} graph={[
                        { start: [0, 115] },
                        { right: 860 },
                        {},
                        { right: 15 },
                        { down: 50 },
                        {
                            fork: [
                                { right: 85 },
                                {
                                    isActive: () => this.state.worksMode === 0,
                                    onClick: () => { this.setState({ worksMode: 0 }) }
                                },
                                { right: 180 },
                                {
                                    isActive: () => this.state.worksMode === 1,
                                    onClick: () => { this.setState({ worksMode: 1 }) }
                                },
                                { right: 200 },
                                {
                                    isActive: () => this.state.worksMode === 2,
                                    onClick: () => { this.setState({ worksMode: 2 }) }
                                },
                            ]
                        },
                        { down: 1305 },
                        {},
                        { down: 650 },
                        {},
                        { down: 60 },
                        {
                            fork: [
                                { right: 485 },
                                { down: 50 },
                                {},
                                { down: 220 },
                                {},
                                { down: 220 },
                                {},
                                { down: 50 },
                                { left: 485 },
                                { down: 20 }
                            ]
                        },
                        { down: 150 },
                        {},
                        { down: 250 },
                        {},
                        { down: 424 },
                        {},
                        { down: 425 },
                        {}
                    ]} />
                    <Logos logos={[
                        [1020, 120, 30]
                    ]} />
                    {this.getHowDoesItWork()}
                </Container>
                <Teaser>
                    <Container>
                        <div style={{ minHeight: 450 }}>
                            <h2>Why Gitpod?</h2>
                            <WhyBoxes>
                                <WhyBox>
                                    {arrow({ width: 70 })}
                                    <h3>No Setup</h3>
                                    <div style={{ width: 50, height: 3, backgroundColor: colors.brand, marginBottom: 16 }} />
                                    <p>Start coding right away.</p>
                                    <p>No more 'works on my machine' situations and hour-long setups.<br /> With Gitpod developer environments are automated, reproducible and versioned.</p>
                                </WhyBox>
                                <WhyBox>
                                    {rocket({ width: 70 })}
                                    <h3>Less Waiting</h3>
                                    <div style={{ width: 50, height: 3, backgroundColor: colors.brand, marginBottom: 16 }} />
                                    <p>Gitpod is the first IDE that builds your project before you even open it.</p>
                                    <p>Install the GitHub App and get ready-to-code dev environments. They are not only checked out but also compiled and tested.</p>
                                </WhyBox>
                                <WhyBox>
                                    {brain({ width: 70 })}
                                    <h3>More Flow</h3>
                                    <div style={{ width: 50, height: 3, backgroundColor: colors.brand, marginBottom: 16 }} />
                                    <p>Gitpod picks you up where you are and beams you into a familiar development environment.</p>
                                    <p>Based on VS Code and Linux containers you have access to all your favourite tools in a browser tab.</p>
                                </WhyBox>
                            </WhyBoxes>
                        </div>
                    </Container>
                </Teaser>
                <Container className="hidden-md-down">
                    <div style={{ height: 525 }}>
                        <h2>Try Now</h2>
                        <p>Gitpod works with <GatsbyLink to="features/#supported-languages">all major programming languages</GatsbyLink>. You can try an example right now.</p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                            <ExampleBox title="JavaScript" description='React Application' image={(JS)} link="https://gitpod.io/#https://github.com/gitpod-io/NextSimpleStarter" />
                            <ExampleBox title="Python" description='Django Application' image={(Python)} link="https://gitpod.io/#https://github.com/gitpod-io/django-locallibrary-tutorial" />
                            <ExampleBox title="Java" description='Spring-Boot Application' image={(Java)} link="https://gitpod.io/#https://github.com/gitpod-io/gs-spring-boot" />
                            <ExampleBox title="Go" description='Gin Web Application' image={(Go)} link="https://gitpod.io/#https://github.com/gitpod-io/go-gin-app" />
                        </div>
                    </div>
                </Container>
                <Container>
                    <Logos logos={[
                        [-120, 60, 30],
                        [1000, 700, 80],
                        [1080, 780, 30],
                    ]} />
                    <div style={{
                        minHeight: 730,
                        marginTop: 80
                    }}>
                        <h2>Don't Just Take Our Word for It</h2>
                        <ResponsiveTweet style={{ left: 530, top: 120 }}>
                            <TweetEmbed id='1114254120012144645' options={twitterOptions} />
                        </ResponsiveTweet>
                        <ResponsiveTweet style={{ left: 530, top: 360 }}>
                            <TweetEmbed id='1054079167841660928' options={twitterOptions} />
                        </ResponsiveTweet>
                        <ResponsiveTweet style={{ left: 530, top: 600 }}>
                            <TweetEmbed id='1100698060831764481' options={twitterOptions} />
                        </ResponsiveTweet>
                        <ResponsiveTweet style={{ left: 23, top: 240 }}>
                            <TweetEmbed id='1035182733063057408' options={twitterOptions} />
                        </ResponsiveTweet>
                        <ResponsiveTweet style={{ left: 23, top: 465 }}>
                            <TweetEmbed id='1101772691181207552' options={twitterOptions} />
                        </ResponsiveTweet>
                    </div>
                </Container>
                <Container>
                    <SectionBuiltOn>
                        <h2>Built On Planet-Scale Technologies</h2>
                        <p>Gitpod is based on industry-proven open source software to bring you a seamless, safe, and blazing fast development experience</p>
                        <div className='row'>
                            <div className='col'>
                                <div className='svg-container'>
                                    <a href="https://www.theia-ide.org/" target="_blank">
                                        <svg style={{ transform: 'scale(1.1) translateY(20px)' }} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"
                                            viewBox="0, 0, 1150, 540.6">
                                            <g fill="#FFF">
                                                <path d="M880.199,2.8 C1028.1,2.8 1147.9,122.6 1147.9,270.5 C1147.9,418.3 1028.1,538.2 880.2,538.2 L290.1,538.2 C269,538.2 251.9,521.1 251.9,500 C251.9,478.9 269,461.8 290.1,461.8 L427.6,461.8 C448.6,461.8 465.7,444.7 465.7,423.6 C465.7,402.5 448.6,385.4 427.6,385.4 L396.999,385.4 C375.9,385.4 358.8,368.3 358.8,347.2 C358.8,326.1 375.9,309 397,309 L488.703,309 C509.918,308.941 526.373,291.65 526.9,270.8 C526.9,249.7 509.8,232.6 488.7,232.6 L167.8,232.6 C146.7,232.6 129.6,215.5 129.6,194.4 C129.6,173.3 146.7,156.2 167.8,156.2 L404.604,156.2 C425.818,156.141 442.273,138.85 442.8,118 C442.8,96.9 425.7,79.8 404.6,79.8 L351.2,79.8 C330.1,79.8 313,62.7 313,41.6 C313,20.5 330.1,2.4 351.2,2.4 L880.199,2.8 z M837.4,92 L837.4,92 C755.2,92 688.7,158.6 688.7,240.7 L688.7,300.2 C688.7,382.4 755.2,448.9 837.4,448.9 C919.5,448.9 986.1,382.4 986.1,300.2 L986.1,240.7 C986.1,158.6 919.5,92 837.4,92 L837.4,92 z M888.2,232.6 C908,232.6 924.1,248.7 924.1,268.5 L924.1,273.1 C924.1,292.9 908,309 888.2,309 L776.6,309 C756.8,309 740.7,292.9 740.7,273.1 L740.7,268.5 C740.7,248.7 756.8,232.6 776.6,232.6 L888.2,232.6 z"
                                                />
                                                <path d="M170.1,461.8 C190,461.8 206,477.8 206,497.7 L206,502.3 C206,522.1 190,538.2 170.1,538.2 L38,538.2 C18.2,538.2 2.1,522.1 2.1,502.3 L2.1,497.7 C2.1,477.8 18.2,461.8 38,461.8 L170.1,461.8 z"
                                                />
                                                <path d="M231.3,3.4 C251.1,3.4 267.1,19.5 267.1,39.3 L267.1,44 C267.1,63.8 251.1,79.8 231.3,79.8 L83.8,79.8 C64,79.8 47.9,63.8 47.9,44 L47.9,39.3 C47.9,19.5 64,3.4 83.8,3.4 L231.3,3.4 z"
                                                />
                                                <path d="M277.1,309 C296.9,309 313,325.1 313,344.9 L313,349.5 C313,369.3 296.9,385.4 277.1,385.4 L196.1,385.4 C176.3,385.4 160.2,369.3 160.2,349.5 L160.2,344.9 C160.2,325.1 176.3,309 196.1,309 L277.1,309 z"
                                                />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <h5>Theia</h5>
                            </div>
                            <div className='col'>
                                <div className='svg-container'>
                                    <a href="https://code.visualstudio.com/" target="_blank">
                                        <svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid">
                                            <path d="M191.97885,0 L191.97885,219.867316 L0,191.353848 L191.97885,255.998083 L255.97885,229.374998 L255.97885,30.592308 L256,30.5826932 L255.97885,30.5403853 L255.97885,26.6250001 L191.97885,0 Z M124.796158,37.4576925 L65.9942314,95.5826932 L30.5923079,68.9211553 L16.0019234,73.7942316 L52.0192315,109.398076 L16.0019234,145.000006 L30.5923079,149.875005 L65.9942314,123.211541 L65.9961553,123.211541 L124.794228,181.332699 L160.011538,166.369233 L160.011538,52.4211546 L124.796158,37.4576925 Z M124.794228,78.9307702 L124.794228,139.857695 L84.340386,109.394236 L124.794228,78.9307702 Z"
                                                fill="#016EC5" />
                                        </svg>
                                    </a>
                                </div>
                                <h5>VS Code</h5>
                            </div>
                            <div className='col'>
                                <div className='svg-container'>
                                    <a href="https://www.typescriptlang.org/" target="_blank">
                                        <svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid">
                                            <polygon fill="#007ACC" transform="matrix(1 0 0 -1 0 256)" points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
                                            />
                                            <path d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z"
                                                fill="#FFF" transform="rotate(-180 101.635 176.143)" />
                                            <path d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
                                                fill="#FFF" transform="matrix(1 0 0 -1 0 352.38)" />
                                        </svg>
                                    </a>
                                </div>
                                <h5>TypeScript</h5>
                            </div>
                            <div className='col'>
                                <div className='svg-container'>
                                    <a href="https://golang.org/" target="_blank">
                                        <svg width="256" height="348" viewBox="0 0 256 348" xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid">
                                            <path d="M3.68560311,188.164981 C4.18365759,198.424903 14.4435798,193.64358 19.0256809,190.456031 C23.4085603,187.368093 24.7035019,189.957977 25.1019455,183.981323 C25.4007782,179.996887 25.7992218,176.112062 25.6,172.127626 C18.92607,171.529961 11.7540856,173.123735 6.27548638,177.108171 C3.38677043,179.100389 -1.79299611,185.674708 3.68560311,188.164981"
                                                fill="#F6D2A2" />
                                            <path d="M208.18677,314.272374 C216.056031,319.153307 230.499611,333.89572 218.645914,341.067704 C207.290272,351.427237 200.915175,329.612451 190.954086,326.624125 C195.237354,320.747082 200.616342,315.368093 208.18677,314.272374 L208.18677,314.272374 L208.18677,314.272374 Z"
                                                fill="#F6D2A2" />
                                            <path d="M67.336965,330.907393 C58.0731518,332.301946 52.8933852,340.669261 45.1237354,344.952529 C37.8521401,349.235798 35.063035,343.557977 34.4653696,342.362646 C33.3696498,341.864591 33.4692607,342.8607 31.6762646,341.067704 C24.9027237,330.409339 38.6490272,322.639689 45.8210117,317.360311 C55.7821012,315.368093 62.0575875,324.034241 67.336965,330.907393 L67.336965,330.907393 L67.336965,330.907393 Z"
                                                fill="#F6D2A2" />
                                            <path d="M251.915953,186.870039 C251.417899,197.129961 241.157977,192.348638 236.575875,189.161089 C232.192996,186.073152 230.898054,188.663035 230.499611,182.686381 C230.200778,178.701946 229.802335,174.817121 230.001556,170.832685 C236.675486,170.235019 243.847471,171.828794 249.32607,175.81323 C252.115175,177.805447 257.394553,184.379767 251.915953,186.870039"
                                                fill="#F6D2A2" />
                                            <path d="M224.722179,61.7587549 C260.283268,49.2077821 232.491829,0.498054475 201.51284,22.0140078 C181.192218,4.58210117 153.201556,1.39455253 123.816342,1.39455253 C95.0287938,3.68560311 67.6357977,8.96498054 48.5105058,25.6996109 C17.6311284,5.77743191 -10.8575875,53.5906615 25.4007782,65.6435798 C15.2404669,105.089494 26.7953307,145.332296 25.2015564,185.475486 C23.707393,221.53463 14.244358,269.845914 34.2661479,302.219455 C51.2996109,329.911284 87.9564202,339.772763 118.138521,340.868482 C156.687938,342.263035 203.405447,332.8 222.132296,295.445914 C240.062257,259.884825 235.081712,215.557977 232.790661,177.207782 C230.499611,138.459144 234.782879,99.1128405 224.722179,61.7587549 L224.722179,61.7587549 Z"
                                                fill="#69D7E2" />
                                            <path d="M254.605447,180.793774 C253.609339,178.701946 251.716732,176.311284 249.923735,175.016342 C245.341634,171.729183 239.464591,169.936187 233.388327,169.736965 C233.189105,163.561089 232.989883,156.787549 232.989883,148.221012 L232.989883,140.451362 C232.890272,115.947082 232.59144,105.189105 231.196887,91.7416342 C230.101167,81.1828794 228.407782,71.4210117 226.017121,62.2568093 C234.085603,59.1688716 239.364981,54.088716 241.456809,47.5143969 C243.449027,41.4381323 242.452918,34.5649805 239.066148,28.488716 C235.579767,22.5120623 230.001556,18.029572 223.526848,16.2365759 C216.554086,14.3439689 208.983658,15.7385214 201.712062,20.6194553 C195.237354,15.140856 187.766537,10.9571984 179.399222,7.76964981 C164.557198,2.29105058 147.324514,0.19922179 123.915953,0.19922179 L123.915953,1.19533074 L123.816342,0.19922179 C98.8140078,2.19143969 80.2863813,6.07626459 64.9463035,13.5470817 C58.770428,16.5354086 53.2918288,20.1214008 48.5105058,24.3050584 C41.1392996,19.7229572 33.4692607,18.6272374 26.3968872,20.818677 C19.8225681,22.8108949 14.1447471,27.492607 10.7579767,33.5688716 C7.37120623,39.6451362 6.57431907,46.6178988 8.86536965,52.5945525 C11.1564202,58.5712062 16.4357977,63.2529183 24.3050584,66.1416342 C21.814786,76.2023346 20.5198444,86.8607004 20.3206226,98.614786 C20.1214008,110.070039 20.6194553,119.234241 22.4124514,139.953307 C23.707393,155.392996 24.2054475,162.46537 24.4046693,171.031907 C17.6311284,170.733074 10.8575875,172.52607 5.77743191,176.211673 C3.9844358,177.506615 1.9922179,179.797665 1.09571984,181.989105 C-0.19922179,184.77821 0.298832685,187.268482 2.88871595,188.762646 C3.28715953,193.543969 5.9766537,195.735409 10.0607004,195.336965 C13.0490272,195.038132 16.6350195,193.444358 19.7229572,191.252918 C20.4202335,190.754864 21.1175097,190.35642 21.814786,190.057588 C22.1136187,189.957977 22.3128405,189.858366 22.6116732,189.758755 C22.6116732,189.758755 23.2093385,189.559533 23.4085603,189.459922 C23.707393,189.360311 24.0062257,189.2607 24.2054475,189.061479 C24.0062257,193.743191 23.6077821,198.624125 22.711284,209.780545 C21.7151751,222.331518 21.2171206,229.204669 21.0178988,236.874708 C20.1214008,265.363424 23.5081712,286.08249 33.6684825,302.518288 C36.8560311,307.698054 40.740856,312.280156 45.3229572,316.463813 C44.4264591,317.061479 40.6412451,319.850584 39.4459144,320.747082 C35.2622568,323.93463 32.3735409,326.624125 30.6801556,329.612451 C28.488716,333.497276 28.488716,337.382101 30.9789883,341.466148 L31.0785992,341.565759 L31.1782101,341.66537 C32.27393,342.761089 32.8715953,343.059922 33.6684825,343.059922 L33.7680934,343.059922 L33.9673152,343.059922 L33.9673152,343.059922 C34.0669261,343.259144 34.166537,343.358755 34.2661479,343.557977 C34.5649805,344.056031 34.8638132,344.454475 35.1626459,344.852918 C37.6529183,347.741634 41.1392996,348.438911 45.8210117,345.649805 C48.311284,344.354864 50.1042802,342.8607 53.8894942,339.673152 C53.9891051,339.573541 53.9891051,339.573541 54.088716,339.47393 C60.1649805,334.294163 63.1533074,332.401556 67.6357977,331.70428 L69.229572,331.405447 C69.8272374,331.70428 70.4249027,331.903502 71.122179,332.202335 C85.2669261,337.880156 101.702724,340.968093 118.337743,341.565759 C139.853696,342.362646 160.572763,339.673152 178.10428,333.298054 C182.785992,331.604669 187.168872,329.612451 191.352529,327.421012 C193.942412,328.417121 196.133852,330.508949 200.31751,335.389883 C200.516732,335.589105 200.516732,335.589105 200.616342,335.788327 C200.815564,335.987549 200.815564,336.08716 200.915175,336.18677 C201.114397,336.485603 201.41323,336.684825 201.612451,336.983658 C204.899611,340.868482 207.091051,342.761089 209.581323,343.856809 C212.868482,345.251362 216.056031,344.554086 219.343191,341.565759 C225.120623,337.979767 225.519066,332.401556 221.733852,326.026459 C219.044358,321.543969 214.362646,316.862257 209.979767,313.87393 C215.159533,308.793774 219.642023,302.71751 223.128405,295.844358 C232.691051,276.719066 236.376654,254.406226 236.177432,225.718288 C236.077821,215.557977 235.679377,206.692607 234.583658,189.758755 L234.583658,189.2607 C235.081712,189.459922 235.579767,189.758755 236.077821,190.157198 C239.165759,192.249027 242.751751,193.942412 245.740078,194.241245 C249.824125,194.639689 252.513619,192.448249 252.912062,187.666926 L252.912062,187.666926 C255.402335,186.073152 255.900389,183.582879 254.605447,180.793774 L254.605447,180.793774 Z M222.929183,18.3284047 C228.905837,19.922179 234.085603,24.1058366 237.273152,29.6840467 C240.4607,35.2622568 241.357198,41.5377432 239.564202,47.1159533 C237.671595,52.9929961 232.890272,57.6747082 225.419455,60.4638132 C223.925292,55.0848249 222.132296,49.8054475 220.140078,44.7252918 C223.028794,42.2350195 224.423346,39.1470817 222.132296,34.7642023 C219.841245,30.381323 215.856809,29.8832685 211.772763,31.1782101 C209.182879,27.7914397 206.294163,24.8031128 203.305837,22.0140078 C209.880156,17.8303502 216.653696,16.6350195 222.929183,18.3284047 L222.929183,18.3284047 Z M10.5587549,51.9968872 C8.46692607,46.6178988 9.16420233,40.2428016 12.351751,34.6645914 C15.5392996,29.0863813 20.7190661,24.7035019 26.8949416,22.9105058 C33.2700389,21.0178988 40.1431907,21.9143969 46.9167315,25.8988327 C43.0319066,29.385214 39.5455253,33.3696498 36.5571984,37.7525292 C31.3774319,35.063035 26.0980545,34.5649805 23.1097276,40.0435798 C20.0217899,45.9206226 23.6077821,49.6062257 28.6879377,52.3953307 C27.9906615,54.088716 27.2933852,55.8817121 26.6957198,57.6747082 C25.9984436,59.8661479 25.3011673,62.1571984 24.7035019,64.448249 C17.4319066,61.659144 12.6505837,57.3758755 10.5587549,51.9968872 L10.5587549,51.9968872 Z M22.6116732,187.766537 C22.5120623,187.766537 21.9143969,187.965759 21.9143969,188.06537 C21.6155642,188.164981 21.3167315,188.264591 21.0178988,188.463813 C20.2210117,188.762646 19.4241245,189.2607 18.6272374,189.858366 C15.8381323,191.850584 12.4513619,193.344747 9.8614786,193.543969 C6.87315175,193.842802 5.17976654,192.54786 4.88093385,188.961868 C6.97276265,188.264591 7.8692607,187.766537 8.66614786,186.571206 L7.07237354,185.375875 C6.47470817,186.172763 5.8770428,186.471595 4.08404669,187.069261 L4.08404669,187.069261 C3.9844358,187.069261 3.9844358,187.069261 3.8848249,187.168872 C2.29105058,186.272374 1.9922179,184.877821 2.88871595,182.885603 C3.68560311,181.092607 5.47859922,179.000778 6.97276265,177.905058 C11.7540856,174.418677 18.1291829,172.725292 24.5042802,173.123735 C24.5042802,175.614008 24.6038911,178.10428 24.5042802,180.494942 C24.5042802,180.793774 24.5042802,180.992996 24.4046693,181.291829 C24.3050584,182.686381 24.3050584,183.284047 24.2054475,183.981323 L24.2054475,183.981323 C23.9066148,186.870039 23.707393,187.268482 22.6116732,187.766537 L22.6116732,187.766537 Z M52.6941634,338.079377 C52.5945525,338.178988 52.5945525,338.178988 52.4949416,338.278599 C48.8093385,341.466148 47.0163424,342.761089 44.7252918,344.056031 C40.9400778,346.347082 38.3501946,345.849027 36.5571984,343.657588 C36.2583658,343.358755 36.059144,342.960311 35.8599222,342.661479 C35.7603113,342.561868 35.6607004,342.362646 35.5610895,342.263035 C35.5610895,342.263035 35.5610895,342.263035 35.5610895,342.163424 C35.7603113,340.370428 36.4575875,339.075486 38.2505837,336.286381 C38.3501946,336.18677 38.3501946,336.18677 38.3501946,336.08716 C39.4459144,334.493385 39.9439689,333.596887 40.4420233,332.501167 L38.6490272,331.70428 C38.2505837,332.600778 37.7525292,333.397665 36.7564202,334.99144 C36.6568093,335.091051 36.6568093,335.091051 36.6568093,335.190661 C34.8638132,337.780545 34.0669261,339.374319 33.6684825,341.167315 L33.5688716,341.167315 C33.5688716,341.167315 33.5688716,341.167315 33.4692607,341.167315 L33.2700389,341.167315 C33.0708171,341.067704 32.7719844,340.868482 32.3735409,340.470039 C28.488716,334.294163 31.5766537,329.014786 40.3424125,322.440467 C41.4381323,321.64358 45.1237354,319.053696 46.1198444,318.256809 C46.3190661,318.256809 46.5182879,318.157198 46.7175097,318.057588 C52.0964981,322.639689 58.3719844,326.624125 65.3447471,329.911284 L65.3447471,329.911284 C65.3447471,330.010895 65.444358,330.110506 65.5439689,330.210117 C61.4599222,331.206226 58.2723735,333.298054 52.6941634,338.079377 L52.6941634,338.079377 Z M219.940856,327.22179 C223.028794,332.401556 222.929183,336.585214 219.044358,339.47393 C218.745525,338.876265 218.546304,338.178988 218.14786,337.182879 C218.14786,337.083268 218.14786,337.083268 218.048249,336.983658 C216.653696,333.198444 215.757198,331.604669 214.063813,329.811673 L212.669261,331.206226 C214.163424,332.600778 214.8607,334.094942 216.255253,337.581323 C216.255253,337.680934 216.255253,337.680934 216.354864,337.780545 C216.852918,339.075486 217.151751,339.872374 217.450584,340.56965 C214.8607,342.761089 212.56965,343.159533 210.178988,342.063813 C208.08716,341.167315 206.094942,339.274708 202.907393,335.688716 C202.708171,335.489494 202.508949,335.190661 202.309728,334.891829 C202.210117,334.792218 202.110506,334.692607 202.010895,334.493385 C201.811673,334.294163 201.811673,334.294163 201.712062,334.094942 C198.026459,329.811673 195.835019,327.520623 193.444358,326.225681 C199.022568,323.038132 204.003113,319.45214 208.485603,315.268482 C212.669261,318.35642 217.350973,322.938521 219.940856,327.22179 L219.940856,327.22179 Z M221.335409,294.94786 C212.768872,312.180545 197.628016,324.333074 177.307393,331.70428 C159.975097,337.979767 139.455253,340.56965 118.238132,339.772763 C81.6809339,338.477821 50.0046693,325.727626 35.1626459,301.62179 C25.2015564,285.584436 21.9143969,265.164202 22.8108949,237.07393 C23.1097276,229.403891 23.5081712,222.530739 24.5042802,209.979767 C25.6,195.835019 25.8988327,191.750973 26.1976654,185.375875 C26.3968872,180.793774 26.3968872,176.112062 26.2972763,171.131518 C26.0980545,162.365759 25.6,155.392996 24.3050584,139.754086 C22.5120623,119.035019 22.0140078,109.970428 22.2132296,98.614786 C22.5120623,83.6731518 24.5042802,70.5245136 28.6879377,58.0731518 C35.4614786,37.8521401 47.9128405,24.2054475 65.8428016,15.3400778 C80.8840467,7.9688716 99.1128405,4.18365759 123.915953,2.19143969 C147.125292,2.19143969 164.059144,4.28326848 178.701946,9.66225681 C196.233463,16.136965 209.28249,27.492607 218.247471,44.9245136 C224.024903,59.0692607 227.411673,74.3097276 229.204669,91.8412451 C230.599222,105.189105 230.898054,115.947082 230.997665,140.351751 L230.997665,148.121401 C231.097276,160.174319 231.296498,168.641245 231.794553,177.108171 C231.993774,180.395331 232.093385,181.789883 232.59144,189.659144 C233.68716,206.592996 234.085603,215.358755 234.185214,225.519066 C234.384436,254.107393 230.798444,276.121401 221.335409,294.94786 L221.335409,294.94786 Z M251.816342,185.87393 L251.816342,185.87393 C251.716732,185.87393 251.617121,185.774319 251.51751,185.774319 C249.724514,185.176654 249.126848,184.77821 248.529183,184.080934 L246.935409,185.276265 C247.831907,186.471595 248.728405,186.96965 250.720623,187.666926 C250.322179,191.252918 248.628794,192.54786 245.740078,192.249027 C243.150195,192.049805 239.763424,190.456031 236.974319,188.563424 C236.177432,187.965759 235.380545,187.567315 234.583658,187.168872 C234.484047,187.168872 234.384436,187.069261 234.284825,187.069261 C233.886381,181.590661 233.886381,180.196109 233.68716,177.307393 C233.587549,175.514397 233.487938,173.721401 233.388327,171.928405 C238.966537,172.028016 244.445136,173.721401 248.628794,176.809339 C250.122957,177.905058 251.915953,179.996887 252.71284,181.789883 C253.708949,183.483268 253.509728,184.977432 251.816342,185.87393 L251.816342,185.87393 Z"
                                            />
                                            <path d="M29.9828794,7.17198444 C30.0824903,12.2521401 31.0785992,17.8303502 30.1821012,23.2093385 C28.7875486,25.7992218 26.1976654,26.0980545 23.9066148,27.0941634 C20.7190661,26.5961089 18.029572,24.5042802 16.7346304,21.5159533 C15.9377432,15.4396887 16.9338521,9.66225681 17.2326848,3.58599222 C17.2326848,3.38677043 21.0178988,3.68560311 24.4046693,4.68171206 C27.2933852,5.57821012 29.9828794,7.07237354 29.9828794,7.17198444 L29.9828794,7.17198444 Z"
                                                fill="#FFF" transform="translate(108.935 96.951)" />
                                            <path d="M1.79299611,7.57042802 C-0.996108949,18.1291829 5.47859922,35.3618677 16.136965,21.2171206 C15.3400778,15.2404669 16.2365759,9.46303502 16.5354086,3.58599222 C16.6350195,3.08793774 1.892607,6.87315175 1.79299611,7.57042802 L1.79299611,7.57042802 Z"
                                                fill="#FFF" transform="translate(108.935 96.951)" />
                                            <path d="M31.1782101,11.8536965 C30.9789883,8.86536965 30.8793774,7.67003891 30.8793774,6.17587549 L30.8793774,5.47859922 L30.1821012,5.27937743 L17.6311284,1.39455253 L17.6311284,0.697276265 L16.3361868,0.996108949 L16.2365759,0.996108949 L16.2365759,1.09571984 L2.09182879,4.68171206 L1.59377432,4.78132296 L1.39455253,5.27937743 C-0.79688716,10.5587549 -0.298832685,18.5276265 2.49027237,23.4085603 C5.67782101,28.9867704 10.8575875,29.0863813 16.136965,22.711284 C17.6311284,25.6 20.4202335,27.5922179 23.6077821,28.0902724 L23.9066148,28.0902724 L24.2054475,27.9906615 C24.6038911,27.7914397 25.0023346,27.6918288 25.6996109,27.3929961 C25.7992218,27.3929961 25.7992218,27.3929961 25.8988327,27.2933852 C28.7875486,26.2972763 29.9828794,25.5003891 30.9789883,23.6077821 L31.0785992,23.5081712 L31.0785992,23.3089494 C31.3774319,21.5159533 31.4770428,19.6233463 31.4770428,17.5315175 C31.4770428,16.0373541 31.3774319,14.6428016 31.1782101,11.8536965 L31.1782101,11.8536965 Z M15.2404669,8.16809339 C15.140856,9.96108949 15.0412451,10.6583658 14.9416342,11.6544747 C14.7424125,15.3400778 14.7424125,18.1291829 15.0412451,20.9182879 C10.3595331,26.8949416 6.67392996,26.8949416 4.18365759,22.4124514 C1.79299611,18.2287938 1.29494163,11.1564202 3.08793774,6.47470817 L15.6389105,3.28715953 C15.5392996,4.58210117 15.4396887,5.8770428 15.2404669,8.16809339 L15.2404669,8.16809339 Z M29.1859922,22.9105058 C28.488716,24.1058366 27.5922179,24.7035019 25.2015564,25.5003891 C25.1019455,25.5003891 25.1019455,25.5003891 25.0023346,25.6 C24.4046693,25.7992218 24.0062257,25.9984436 23.707393,26.0980545 C21.0178988,25.6 18.7268482,23.8070039 17.6311284,21.3167315 C17.3322957,18.6272374 17.3322957,15.8381323 17.5315175,12.1525292 C17.6311284,11.1564202 17.6311284,10.459144 17.8303502,8.66614786 C18.029572,6.37509728 18.1291829,4.98054475 18.1291829,3.68560311 L28.9867704,6.97276265 C28.9867704,8.26770428 29.0863813,9.46303502 29.2856031,12.0529183 C29.4848249,14.7424125 29.5844358,16.136965 29.5844358,17.7307393 C29.5844358,19.6233463 29.4848249,21.3167315 29.1859922,22.9105058 L29.1859922,22.9105058 Z"
                                                transform="translate(108.935 96.951)" />
                                            <g transform="translate(48.476 21.976)">
                                                <path d="M2.29105058,38.7486381 C11.4552529,74.4093385 68.5322957,65.2451362 66.340856,29.4848249 C63.7509728,-13.3478599 -6.47470817,-5.08015564 2.29105058,38.7486381"
                                                    fill="#FFF" />
                                                <path d="M67.336965,29.385214 C66.7392996,19.0256809 62.1571984,10.9571984 54.5867704,5.8770428 C47.8132296,1.29494163 38.848249,-0.498054475 29.9828794,0.59766537 C21.1175097,1.79299611 12.9494163,5.77743191 7.57042802,12.0529183 C1.59377432,19.0256809 -0.697276265,28.1898833 1.39455253,38.7486381 L2.29105058,38.5494163 L1.39455253,38.7486381 C10.7579767,75.4054475 69.5284047,66.5400778 67.336965,29.385214 L67.336965,29.385214 Z M3.18754864,38.5494163 C1.19533074,28.488716 3.38677043,19.922179 8.96498054,13.4474708 C14.0451362,7.57042802 21.7151751,3.68560311 30.1821012,2.58988327 C38.6490272,1.49416342 47.1159533,3.18754864 53.4910506,7.57042802 C60.5634241,12.351751 64.8466926,19.8225681 65.444358,29.6840467 C67.5361868,64.448249 12.0529183,72.8155642 3.18754864,38.5494163 L3.18754864,38.5494163 Z"
                                                />
                                                <ellipse cx="18.03" cy="32.872" rx="9.662" ry="10.459" />
                                                <ellipse fill="#FFF" cx="22.412" cy="35.262" rx="2.291" ry="2.689" />
                                            </g>
                                            <g transform="translate(129.618 18.098)">
                                                <path d="M1.19533074,35.9595331 C8.26770428,76.8996109 75.2062257,66.0420233 65.5439689,24.8031128 C56.877821,-12.2521401 -1.19533074,-1.9922179 1.19533074,35.9595331"
                                                    fill="#FFF" />
                                                <path d="M66.4404669,24.6038911 C57.5750973,-13.5470817 -2.19143969,-3.08793774 0.19922179,36.059144 L0.19922179,36.1587549 C3.48638132,55.4832685 20.7190661,65.3447471 39.7447471,62.1571984 C48.4108949,60.663035 56.1805447,56.4793774 61.2607004,50.3035019 C66.8389105,43.4303502 68.8311284,34.5649805 66.4404669,24.6038911 L66.4404669,24.6038911 Z M59.766537,49.1081712 C54.985214,54.8856031 47.7136187,58.8700389 39.4459144,60.2645914 C21.4163424,63.2529183 5.27937743,53.9891051 2.09182879,35.8599222 C-0.0996108949,-0.996108949 56.2801556,-10.8575875 64.6474708,25.0023346 C66.8389105,34.4653696 65.0459144,42.7330739 59.766537,49.1081712 L59.766537,49.1081712 Z"
                                                />
                                                <ellipse cx="17.631" cy="34.167" rx="9.463" ry="10.459" />
                                                <ellipse fill="#FFF" cx="22.014" cy="36.557" rx="2.191" ry="2.689" />
                                            </g>
                                            <g>
                                                <path d="M13.248249,12.5509728 C5.37898833,13.248249 -0.996108949,22.5120623 3.08793774,29.8832685 C8.46692607,39.6451362 20.5198444,28.9867704 27.9906615,29.9828794 C36.6568093,30.1821012 43.7291829,39.1470817 50.6023346,31.5766537 C58.2723735,23.2093385 47.3151751,15.0412451 38.6490272,11.4552529 L13.248249,12.5509728 L13.248249,12.5509728 Z"
                                                    fill="#F6D2A2" transform="translate(99.536 70.451)" />
                                                <path d="M51.5984436,19.2249027 C48.9089494,15.8381323 44.2272374,12.7501946 39.1470817,10.6583658 L38.9478599,10.5587549 L38.7486381,10.5587549 L13.248249,11.5548638 C4.38287938,12.351751 -1.9922179,22.6116732 2.29105058,30.381323 C3.9844358,33.3696498 6.27548638,34.8638132 9.36342412,35.063035 C11.6544747,35.1626459 14.0451362,34.6645914 17.7307393,33.3696498 C18.029572,33.2700389 18.4280156,33.170428 18.92607,32.9712062 C23.9066148,31.277821 25.8988327,30.7797665 27.8910506,31.0785992 L27.9906615,31.0785992 C30.381323,31.0785992 32.3735409,31.7758755 36.1587549,33.2700389 C40.3424125,34.9634241 41.6373541,35.4614786 43.7291829,35.6607004 C46.6178988,35.8599222 49.1081712,34.8638132 51.3992218,32.3735409 C55.2840467,28.0902724 55.0848249,23.5081712 51.5984436,19.2249027 L51.5984436,19.2249027 Z M49.9050584,30.9789883 C48.0124514,33.0708171 46.1198444,33.7680934 43.8287938,33.6684825 C42.0357977,33.5688716 40.8404669,33.0708171 36.8560311,31.4770428 C32.8715953,29.7836576 30.6801556,29.1859922 28.0902724,29.0863813 C25.6,28.7875486 23.5081712,29.2856031 18.2287938,31.0785992 C17.7307393,31.277821 17.3322957,31.3774319 17.033463,31.4770428 C9.7618677,33.9673152 6.27548638,33.7680934 3.8848249,29.385214 C0.298832685,22.9105058 5.77743191,14.1447471 13.248249,13.4474708 L38.4498054,12.4513619 C43.2311284,14.4435798 47.5143969,17.3322957 50.0046693,20.4202335 C52.9929961,24.0062257 53.092607,27.5922179 49.9050584,30.9789883 L49.9050584,30.9789883 Z"
                                                    fill="#231F20" transform="translate(99.536 70.451)" />
                                                <path d="M28.6879377,8.26770428 C25.6,-3.08793774 -0.298832685,-1.39455253 0.298832685,12.1525292 C1.59377432,22.2132296 31.6762646,19.5237354 28.6879377,8.26770428 L28.6879377,8.26770428 Z"
                                                    transform="translate(111.49 70.451)" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <h5>Go</h5>
                            </div>
                            <div className='col'>
                                <div className='svg-container'>
                                    <a href="https://www.docker.com/" target="_blank">
                                        <svg className="docker" height="512" style={{ transform: 'scale(1.3) translateX(4px)' }} viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#099cec" id="_x39_7-docker">
                                                <rect height="43.193" width="47.506" x="229.999" y="147.225" />
                                                <rect height="42.69" width="47.506" x="229.999" y="199.115" />
                                                <rect height="43.193" width="47.506" x="173.869" y="147.225" />
                                                <rect height="42.691" width="47.507" x="286.2" y="199.043" />
                                                <rect height="43.625" width="47.506" x="229.999" y="94.975" />
                                                <rect height="43.193" width="47.505" x="117.738" y="147.225" />
                                                <rect height="42.691" width="47.506" x="173.869" y="199.043" />
                                                <path d="M476.441,219.095c-10.35-6.972-34.21-9.487-52.537-6.036 c-2.371-17.249-12.003-32.27-29.538-45.782l-10.062-6.685l-6.685,10.062c-13.225,19.98-16.817,52.896-2.658,74.602 c-6.252,3.377-18.545,7.978-34.786,7.689H27.757c-6.252,36.511,4.169,83.945,31.624,116.501 c26.663,31.551,66.623,47.579,118.872,47.579c113.124,0,196.851-52.104,236.021-146.76c15.381,0.288,48.584,0.073,65.618-32.483 c1.078-1.797,4.743-9.488,6.107-12.291L476.441,219.095z"
                                                />
                                                <polygon points="109.186,199.043 109.113,199.043 61.68,199.043 61.68,241.734 109.186,241.734"
                                                />
                                                <rect height="42.691" width="47.505" x="117.738" y="199.043" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <h5>Docker</h5>
                            </div>
                            <div className='col'>
                                <div className='svg-container'>
                                    <a href="https://kubernetes.io/" target="_blank">
                                        <svg width="2500" height="2432" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M82.085 244.934c-5.946 0-11.561-2.642-15.36-7.432L8.92 165.657c-3.799-4.79-5.285-10.9-3.799-16.847l20.645-89.682c1.321-5.946 5.285-10.736 10.736-13.378l83.571-39.97c2.643-1.32 5.616-1.981 8.589-1.981 2.973 0 5.945.66 8.588 1.982l83.572 39.804c5.45 2.642 9.414 7.432 10.735 13.378l20.645 89.682c1.322 5.946 0 12.057-3.798 16.847l-57.807 71.845c-3.799 4.624-9.414 7.432-15.36 7.432l-93.15.165z" fill="#326DE6" /><path d="M128.495 7.928c2.313 0 4.625.495 6.772 1.486l83.572 39.804c4.294 2.147 7.597 6.111 8.588 10.736l20.645 89.682c1.156 4.79 0 9.745-3.138 13.543l-57.806 71.846c-2.973 3.798-7.598 5.945-12.387 5.945H82.085c-4.79 0-9.414-2.147-12.387-5.945l-57.806-71.846c-2.973-3.798-4.13-8.753-3.138-13.543l20.645-89.682c1.156-4.79 4.294-8.754 8.588-10.736L121.56 9.25c2.147-.826 4.624-1.321 6.936-1.321zm0-7.763c-3.468 0-6.936.826-10.24 2.312l-83.571 39.97c-6.607 3.138-11.231 8.918-12.883 16.02L1.156 148.15c-1.651 7.102 0 14.369 4.625 20.15l57.806 71.845c4.46 5.615 11.231 8.753 18.333 8.753h92.655c7.102 0 13.874-3.138 18.333-8.753l57.807-71.846c4.624-5.615 6.276-13.047 4.624-20.15l-20.645-89.682c-1.651-7.102-6.276-12.882-12.882-16.02L138.57 2.476C135.432.991 131.964.165 128.495.165z" fill="#FFF" /><path d="M212.232 142.534c-.165 0-.165 0 0 0h-.165c-.165 0-.33 0-.33-.165-.33 0-.66-.165-.991-.165-1.156-.165-2.147-.33-3.138-.33-.496 0-.991 0-1.652-.166h-.165c-3.468-.33-6.276-.66-8.919-1.486-1.156-.496-1.486-1.156-1.817-1.817 0-.165-.165-.165-.165-.33l-2.147-.66a65.33 65.33 0 0 0-1.156-23.289 68.054 68.054 0 0 0-9.249-21.636l1.652-1.486v-.33c0-.826.165-1.652.825-2.478 1.982-1.817 4.46-3.303 7.433-5.12.495-.33.99-.495 1.486-.826.991-.495 1.817-.99 2.808-1.651.165-.165.495-.33.826-.66.165-.166.33-.166.33-.331 2.312-1.982 2.808-5.285 1.156-7.433-.826-1.156-2.312-1.816-3.799-1.816-1.32 0-2.477.495-3.633 1.321l-.33.33c-.33.165-.496.496-.826.661-.826.826-1.487 1.486-2.147 2.312-.33.33-.66.826-1.156 1.156-2.313 2.478-4.46 4.46-6.607 5.946-.495.33-.99.496-1.486.496-.33 0-.661 0-.991-.166h-.33l-1.983 1.322c-2.147-2.312-4.459-4.294-6.771-6.276a65.958 65.958 0 0 0-34.519-13.709l-.165-2.147-.33-.33c-.496-.496-1.156-.991-1.322-2.147-.165-2.643.166-5.616.496-8.919v-.165c0-.496.165-1.156.33-1.652.165-.99.33-1.982.496-3.138v-1.486c0-2.973-2.313-5.45-5.12-5.45-1.322 0-2.643.66-3.634 1.651-.99.991-1.486 2.312-1.486 3.799v1.321c0 1.156.165 2.147.495 3.138.165.496.165.991.33 1.652v.165c.33 3.303.826 6.276.496 8.919-.165 1.156-.826 1.651-1.321 2.147l-.33.33-.166 2.147c-2.973.33-5.946.66-8.919 1.321-12.717 2.808-23.948 9.25-32.701 18.498l-1.652-1.156h-.33c-.33 0-.661.165-.991.165-.496 0-.991-.165-1.487-.495-2.147-1.486-4.294-3.634-6.606-6.111-.33-.33-.66-.826-1.156-1.156-.661-.826-1.322-1.487-2.148-2.312-.165-.166-.495-.33-.825-.661-.165-.165-.33-.165-.33-.33a5.772 5.772 0 0 0-3.634-1.322c-1.487 0-2.973.661-3.799 1.817-1.652 2.147-1.156 5.45 1.156 7.432.165 0 .165.166.33.166.33.165.496.495.826.66.991.66 1.817 1.156 2.808 1.652.496.165.991.495 1.487.826 2.972 1.816 5.45 3.303 7.432 5.12.826.825.826 1.651.826 2.477v.33l1.651 1.487c-.33.495-.66.826-.826 1.321-8.258 13.048-11.396 28.408-9.249 43.603l-2.147.66c0 .166-.165.166-.165.33-.33.661-.826 1.322-1.817 1.817-2.477.826-5.45 1.157-8.918 1.487h-.166c-.495 0-1.156 0-1.651.165-.991 0-1.982.165-3.138.33-.33 0-.66.166-.991.166-.165 0-.33 0-.496.165-2.973.66-4.79 3.468-4.294 6.11.496 2.313 2.643 3.8 5.285 3.8.496 0 .826 0 1.322-.166.165 0 .33 0 .33-.165.33 0 .66-.165.99-.165 1.157-.33 1.983-.66 2.974-1.156.495-.165.99-.496 1.486-.66h.165c3.138-1.157 5.946-2.148 8.589-2.478h.33c.991 0 1.652.495 2.147.826.165 0 .165.165.33.165l2.313-.33c3.964 12.221 11.561 23.122 21.636 31.05 2.312 1.816 4.624 3.303 7.102 4.79l-.991 2.146c0 .166.165.166.165.33.33.661.66 1.487.33 2.643-.99 2.478-2.477 4.955-4.294 7.763v.165c-.33.496-.66.826-.99 1.321-.661.826-1.157 1.652-1.818 2.643-.165.165-.33.495-.495.826 0 .165-.165.33-.165.33-1.321 2.808-.33 5.946 2.147 7.102.66.33 1.321.496 1.982.496 1.982 0 3.964-1.322 4.955-3.139 0-.165.165-.33.165-.33.165-.33.33-.66.495-.826.496-1.156.661-1.982.991-2.973l.496-1.486c1.156-3.303 1.982-5.946 3.468-8.258.66-.991 1.487-1.156 2.147-1.487.165 0 .165 0 .33-.165l1.157-2.147c7.267 2.808 15.195 4.294 23.122 4.294 4.79 0 9.745-.495 14.37-1.651a73.402 73.402 0 0 0 8.588-2.478l.99 1.817c.166 0 .166 0 .331.165.826.165 1.486.496 2.147 1.487 1.321 2.312 2.312 5.12 3.468 8.258v.165l.496 1.486c.33.991.495 1.982.99 2.973.166.33.331.496.496.826 0 .165.166.33.166.33.99 1.982 2.972 3.139 4.954 3.139.661 0 1.322-.166 1.982-.496 1.156-.66 2.147-1.652 2.478-2.973.33-1.321.33-2.808-.33-4.129 0-.165-.166-.165-.166-.33-.165-.33-.33-.66-.495-.826-.496-.991-1.156-1.817-1.817-2.643-.33-.495-.66-.825-.99-1.32v-.166c-1.818-2.808-3.47-5.285-4.295-7.763-.33-1.156 0-1.816.165-2.642 0-.165.165-.165.165-.33l-.826-1.982c8.754-5.12 16.186-12.388 21.802-21.306 2.973-4.625 5.285-9.745 6.936-14.865l1.982.33c.166 0 .166-.165.33-.165.661-.33 1.157-.825 2.148-.825h.33c2.643.33 5.45 1.32 8.589 2.477h.165c.495.165.99.495 1.486.66.991.496 1.817.826 2.973 1.157.33 0 .66.165.991.165.165 0 .33 0 .495.165.496.165.826.165 1.322.165 2.477 0 4.624-1.651 5.285-3.798 0-1.982-1.817-4.625-4.79-5.45zm-76.47-8.093l-7.267 3.469-7.267-3.469-1.816-7.762 4.954-6.276h8.093l4.955 6.276-1.651 7.762zm43.108-17.176a52.078 52.078 0 0 1 1.156 16.68l-25.27-7.266c-2.312-.66-3.633-2.973-3.138-5.285.165-.661.496-1.322.991-1.817l19.985-18.003c2.807 4.625 4.954 9.91 6.276 15.69zm-14.204-25.6l-21.636 15.36c-1.817 1.156-4.295.825-5.781-.991-.495-.496-.66-1.157-.826-1.817l-1.486-26.922a50.13 50.13 0 0 1 29.729 14.37zM116.769 78.12c1.817-.33 3.468-.66 5.285-.99l-1.486 26.425c-.165 2.312-1.982 4.294-4.46 4.294-.66 0-1.486-.165-1.982-.495L92.16 91.665c6.772-6.772 15.195-11.397 24.609-13.544zm-32.537 23.453l19.654 17.507c1.817 1.487 1.982 4.294.496 6.111-.496.66-1.156 1.156-1.982 1.322l-25.6 7.432c-.991-11.231 1.486-22.627 7.432-32.372zm-4.46 44.759l26.262-4.46c2.147-.165 4.129 1.322 4.624 3.469.165.99.165 1.817-.165 2.643l-10.075 24.278c-9.249-5.946-16.681-15.03-20.645-25.93zm60.285 32.867c-3.799.826-7.598 1.321-11.562 1.321-5.78 0-11.396-.99-16.68-2.642l13.047-23.618c1.321-1.487 3.468-2.147 5.285-1.156a7.04 7.04 0 0 1 1.982 1.816l12.717 22.958c-1.486.495-3.138.826-4.79 1.321zm32.206-22.957c-4.129 6.606-9.58 11.891-15.855 16.02l-10.405-24.94c-.496-1.981.33-4.128 2.312-5.12.66-.33 1.486-.495 2.312-.495l26.426 4.46c-.991 3.633-2.643 6.937-4.79 10.075z" fill="#FFF" /></svg>
                                    </a>
                                </div>
                                <h5>Kubernetes</h5>
                            </div>
                        </div>
                    </SectionBuiltOn>
                </Container>
                <Container>
                    <TellMeMore>
                        <h2>Explore Gitpod</h2>
                        <p>Learn about collaboration, workspace snapshots, supported programming languages, and much more.</p>
                        <GatsbyLink to="/features"><button className="primary">See Features</button></GatsbyLink>
                    </TellMeMore>
                </Container>
            </Page>
        </IndexLayout>;
    }
}
