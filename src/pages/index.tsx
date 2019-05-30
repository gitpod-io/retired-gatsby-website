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
    padding-top: 80px;

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        text-align: center;

        button {
            width: 100%;
        }
    }
`

const SectionBuiltOn = styled.section`
    padding: 80px 0 0 0;
    div {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 55px;
    }
    .svg-container {
        text-align: center;
        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            flex: 2.5;
        }
    }
    svg {
        display: block;
        height: 95px;
        width: 95px;
        margin: auto;
    }
    .theia {
        transform: scale(2.2) translateY(43px);
        @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            transform: scale(1.8) translateY(50px);
        }
    }
    .docker {
        transform: scale(1.3);
         @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            transform: scale(1.3) translateY(20px);
        }
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
                        { down: 385 },
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
                        <h2>Built On</h2>
                        <div>
                            <div className="svg-container">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#3249c7" viewBox="0 0 234 235.1" width="2488" height="2500"><path className="st0" d="M83.3 143.9l-58 45.2L0 176.5V58.7L25.2 46l57.6 45.3L174 0l60 23.9v186.9l-59.7 24.3-91-91.2zm88.9 15.9V75.3l-54.6 42.3 54.6 42.2zM27.3 144.6L56 118.5 27.3 89.9v54.7z"/></svg>
                            </div>
                            <div className="svg-container">
                                <svg className="docker" width="2500" height="2100" viewBox="0 0 256 215" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732" fill="#364548"/><path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196" fill="#22A0C8"/><path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436" fill="#37B1D9"/><path d="M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645" fill="#1B81A5"/><path d="M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367" fill="#1D91B4"/><path d="M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z" fill="#23A3C2"/><path d="M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z" fill="#34BBDE"/><path d="M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2"/><path d="M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#34BBDE"/><path d="M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z" fill="#23A3C2"/><path d="M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z" fill="#34BBDE"/><path d="M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2"/><path d="M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935" fill="#D3ECEC"/><path d="M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163" fill="#364548"/><path d="M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118" fill="#BDD9D7"/><path d="M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05" fill="#D3ECEC"/></g></svg>
                            </div>
                            <div className="svg-container">
                                <svg className="theia" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0, 0, 3851.35, 540.6"><g><path d="M3635.123,3.912 C3635.124,3.912 3658.62,3.912 3668.435,11.1 C3668.435,11.1 3678.299,18.288 3685.883,40.247 L3850.208,519.688 C3850.208,519.688 3852.488,525.736 3850.604,530.693 C3850.604,530.693 3848.721,535.6 3840.343,535.6 L3770.697,535.6 C3770.698,535.6 3762.37,535.6 3757.462,533.717 C3757.462,533.717 3752.505,531.833 3749.481,523.505 L3716.17,419.755 L3523.789,419.755 L3490.478,522.712 C3490.478,522.712 3488.198,529.553 3484.034,532.576 C3484.034,532.576 3479.87,535.6 3470.799,535.6 L3401.103,535.6 C3401.104,535.6 3392.776,535.6 3390.496,530.693 C3390.496,530.693 3388.265,525.736 3390.496,519.688 L3554.076,40.247 C3554.076,40.247 3557.893,28.896 3561.661,22.105 C3561.661,22.105 3565.478,15.264 3571.129,11.497 C3571.129,11.497 3576.829,7.68 3584.413,5.796 C3584.413,5.796 3591.948,3.912 3602.556,3.912 L3635.123,3.912 z M3620.748,106.175 L3616.981,106.175 L3585.9,211.363 L3546.542,340.741 L3691.931,340.741 L3652.572,213.593 L3620.748,106.175 z"/><path d="M2071.209,5.35 C2071.209,5.35 2081.817,5.35 2085.584,8.027 C2085.584,8.027 2089.352,10.654 2089.352,21.262 L2089.351,217.658 L2324.908,217.658 L2324.908,21.262 C2324.908,21.262 2324.908,11.397 2329.122,8.374 C2329.122,8.374 2333.285,5.35 2342.357,5.35 L2400.056,5.35 C2400.056,5.35 2410.664,5.35 2414.084,8.027 C2414.084,8.027 2417.505,10.654 2417.505,21.262 L2417.505,519.688 C2417.505,519.688 2417.505,530.296 2414.084,532.973 C2414.084,532.973 2410.664,535.6 2400.056,535.6 L2342.356,535.6 C2342.357,535.6 2333.285,535.6 2329.122,532.576 C2329.122,532.576 2324.908,529.553 2324.908,519.688 L2324.908,297.119 L2089.351,297.119 L2089.351,519.688 C2089.352,519.688 2089.352,530.296 2085.584,532.973 C2085.584,532.973 2081.817,535.6 2071.209,535.6 L2013.707,535.6 C2013.708,535.6 2005.38,535.6 2000.869,532.576 C2000.869,532.576 1996.309,529.553 1996.309,519.688 L1996.308,21.262 C1996.309,21.262 1996.309,11.397 2000.869,8.374 C2000.869,8.374 2005.38,5.35 2013.708,5.35 L2071.209,5.35 z"/><path d="M1840.411,5.35 C1840.411,5.35 1848.739,5.35 1851.416,8.374 C1851.416,8.374 1854.043,11.447 1854.043,19.775 L1854.043,72.17 C1854.043,72.17 1854.043,79.755 1851.416,82.778 C1851.416,82.778 1848.739,85.802 1840.411,85.802 L1696.559,85.802 L1696.559,519.688 C1696.559,519.688 1696.559,530.296 1693.139,532.973 C1693.139,532.973 1689.718,535.6 1679.11,535.6 L1619.924,535.6 C1619.924,535.6 1610.853,535.6 1606.689,532.576 C1606.689,532.576 1602.525,529.553 1602.525,519.688 L1602.525,85.802 L1461.647,85.802 C1461.647,85.802 1453.319,85.802 1451.039,82.778 C1451.039,82.778 1448.759,79.755 1448.759,72.17 L1448.758,19.775 C1448.759,19.775 1448.759,11.447 1451.039,8.374 C1451.039,8.374 1453.319,5.35 1461.647,5.35 L1840.411,5.35 z"/><path d="M881.099,2.2 C1029,2.2 1148.8,122 1148.8,269.9 C1148.8,417.7 1029,537.6 881.1,537.6 L291,537.6 C269.9,537.6 252.8,520.5 252.8,499.4 C252.8,478.3 269.9,461.2 291,461.2 L428.5,461.2 C449.5,461.2 466.6,444.1 466.6,423 C466.6,401.9 449.5,384.8 428.5,384.8 L397.899,384.8 C376.8,384.8 359.7,367.7 359.7,346.6 C359.7,325.5 376.8,308.4 397.9,308.4 L489.603,308.4 C510.818,308.341 527.273,291.05 527.8,270.2 C527.8,249.1 510.7,232 489.6,232 L168.7,232 C147.6,232 130.5,214.9 130.5,193.8 C130.5,172.7 147.6,155.6 168.7,155.6 L405.504,155.6 C426.718,155.541 443.173,138.25 443.7,117.4 C443.7,96.3 426.6,79.2 405.5,79.2 L352.1,79.2 C331,79.2 313.9,62.1 313.9,41 C313.9,19.9 331,1.8 352.1,1.8 L881.099,2.2 z M838.3,91.4 L838.3,91.4 C756.1,91.4 689.6,158 689.6,240.1 L689.6,299.6 C689.6,381.8 756.1,448.3 838.3,448.3 C920.4,448.3 987,381.8 987,299.6 L987,240.1 C987,158 920.4,91.4 838.3,91.4 L838.3,91.4 z M889.1,232 C908.9,232 925,248.1 925,267.9 L925,272.5 C925,292.3 908.9,308.4 889.1,308.4 L777.5,308.4 C757.7,308.4 741.6,292.3 741.6,272.5 L741.6,267.9 C741.6,248.1 757.7,232 777.5,232 L889.1,232 z"/><path d="M171,461.2 C190.9,461.2 206.9,477.2 206.9,497.1 L206.9,501.7 C206.9,521.5 190.9,537.6 171,537.6 L38.9,537.6 C19.1,537.6 3,521.5 3,501.7 L3,497.1 C3,477.2 19.1,461.2 38.9,461.2 L171,461.2 z"/><path d="M2952.904,4.854 C2952.905,4.854 2962.719,4.854 2965.396,9.068 C2965.396,9.068 2968.023,13.232 2968.023,22.303 L2968.023,70.088 C2968.023,70.088 2968.023,79.953 2965.396,83.373 C2965.396,83.373 2962.719,86.793 2952.905,86.793 L2751.452,86.793 C2751.452,86.793 2722.652,86.793 2710.904,99.632 C2710.904,99.632 2699.205,112.52 2699.205,136.71 L2699.205,216.171 L2927.872,216.171 C2927.872,216.171 2937.736,216.171 2940.413,219.988 C2940.413,219.988 2943.04,223.755 2943.04,234.314 L2943.04,275.903 C2943.04,275.903 2943.04,284.974 2940.413,289.089 C2940.413,289.089 2937.736,293.252 2927.872,293.252 L2699.205,293.252 L2699.205,403.942 C2699.205,403.942 2699.205,428.182 2711.697,440.674 C2711.697,440.674 2724.188,453.215 2751.452,453.215 L2957.415,453.215 C2957.415,453.215 2968.023,453.215 2970.7,456.982 C2970.7,456.982 2973.327,460.749 2973.327,471.357 L2973.327,518.201 C2973.327,518.201 2973.327,526.529 2970.303,531.04 C2970.303,531.04 2967.28,535.6 2957.415,535.6 L2741.587,535.6 C2741.588,535.6 2701.436,535.6 2675.659,524.249 C2675.659,524.249 2649.883,512.897 2634.318,493.961 C2634.318,493.961 2618.753,475.026 2612.706,450.786 C2612.706,450.786 2606.608,426.596 2606.608,400.076 L2606.608,141.172 C2606.608,141.172 2606.608,114.652 2613.796,90.065 C2613.796,90.065 2621.033,65.429 2637.342,46.493 C2637.342,46.493 2653.65,27.607 2679.427,16.206 C2679.427,16.206 2705.253,4.854 2741.588,4.854 L2952.904,4.854 z"/><path d="M3219.328,5.35 C3219.328,5.35 3229.887,5.35 3233.704,8.027 C3233.704,8.027 3237.471,10.654 3237.471,21.262 L3237.471,519.688 C3237.471,519.688 3237.471,530.296 3233.704,532.973 C3233.704,532.973 3229.887,535.6 3219.328,535.6 L3161.827,535.6 C3161.827,535.6 3152.756,535.6 3148.592,532.576 C3148.592,532.576 3144.428,529.553 3144.428,519.688 L3144.428,21.262 C3144.428,21.262 3144.428,11.397 3148.592,8.374 C3148.592,8.374 3152.756,5.35 3161.827,5.35 L3219.328,5.35 z"/><path d="M232.2,2.8 C252,2.8 268,18.9 268,38.7 L268,43.4 C268,63.2 252,79.2 232.2,79.2 L84.7,79.2 C64.9,79.2 48.8,63.2 48.8,43.4 L48.8,38.7 C48.8,18.9 64.9,2.8 84.7,2.8 L232.2,2.8 z"/><path d="M278,308.4 C297.8,308.4 313.9,324.5 313.9,344.3 L313.9,348.9 C313.9,368.7 297.8,384.8 278,384.8 L197,384.8 C177.2,384.8 161.1,368.7 161.1,348.9 L161.1,344.3 C161.1,324.5 177.2,308.4 197,308.4 L278,308.4 z"/></g></svg>
                            </div>
                            <div className="svg-container">
                               <svg width="2500" height="2432" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M82.085 244.934c-5.946 0-11.561-2.642-15.36-7.432L8.92 165.657c-3.799-4.79-5.285-10.9-3.799-16.847l20.645-89.682c1.321-5.946 5.285-10.736 10.736-13.378l83.571-39.97c2.643-1.32 5.616-1.981 8.589-1.981 2.973 0 5.945.66 8.588 1.982l83.572 39.804c5.45 2.642 9.414 7.432 10.735 13.378l20.645 89.682c1.322 5.946 0 12.057-3.798 16.847l-57.807 71.845c-3.799 4.624-9.414 7.432-15.36 7.432l-93.15.165z" fill="#326DE6"/><path d="M128.495 7.928c2.313 0 4.625.495 6.772 1.486l83.572 39.804c4.294 2.147 7.597 6.111 8.588 10.736l20.645 89.682c1.156 4.79 0 9.745-3.138 13.543l-57.806 71.846c-2.973 3.798-7.598 5.945-12.387 5.945H82.085c-4.79 0-9.414-2.147-12.387-5.945l-57.806-71.846c-2.973-3.798-4.13-8.753-3.138-13.543l20.645-89.682c1.156-4.79 4.294-8.754 8.588-10.736L121.56 9.25c2.147-.826 4.624-1.321 6.936-1.321zm0-7.763c-3.468 0-6.936.826-10.24 2.312l-83.571 39.97c-6.607 3.138-11.231 8.918-12.883 16.02L1.156 148.15c-1.651 7.102 0 14.369 4.625 20.15l57.806 71.845c4.46 5.615 11.231 8.753 18.333 8.753h92.655c7.102 0 13.874-3.138 18.333-8.753l57.807-71.846c4.624-5.615 6.276-13.047 4.624-20.15l-20.645-89.682c-1.651-7.102-6.276-12.882-12.882-16.02L138.57 2.476C135.432.991 131.964.165 128.495.165z" fill="#FFF"/><path d="M212.232 142.534c-.165 0-.165 0 0 0h-.165c-.165 0-.33 0-.33-.165-.33 0-.66-.165-.991-.165-1.156-.165-2.147-.33-3.138-.33-.496 0-.991 0-1.652-.166h-.165c-3.468-.33-6.276-.66-8.919-1.486-1.156-.496-1.486-1.156-1.817-1.817 0-.165-.165-.165-.165-.33l-2.147-.66a65.33 65.33 0 0 0-1.156-23.289 68.054 68.054 0 0 0-9.249-21.636l1.652-1.486v-.33c0-.826.165-1.652.825-2.478 1.982-1.817 4.46-3.303 7.433-5.12.495-.33.99-.495 1.486-.826.991-.495 1.817-.99 2.808-1.651.165-.165.495-.33.826-.66.165-.166.33-.166.33-.331 2.312-1.982 2.808-5.285 1.156-7.433-.826-1.156-2.312-1.816-3.799-1.816-1.32 0-2.477.495-3.633 1.321l-.33.33c-.33.165-.496.496-.826.661-.826.826-1.487 1.486-2.147 2.312-.33.33-.66.826-1.156 1.156-2.313 2.478-4.46 4.46-6.607 5.946-.495.33-.99.496-1.486.496-.33 0-.661 0-.991-.166h-.33l-1.983 1.322c-2.147-2.312-4.459-4.294-6.771-6.276a65.958 65.958 0 0 0-34.519-13.709l-.165-2.147-.33-.33c-.496-.496-1.156-.991-1.322-2.147-.165-2.643.166-5.616.496-8.919v-.165c0-.496.165-1.156.33-1.652.165-.99.33-1.982.496-3.138v-1.486c0-2.973-2.313-5.45-5.12-5.45-1.322 0-2.643.66-3.634 1.651-.99.991-1.486 2.312-1.486 3.799v1.321c0 1.156.165 2.147.495 3.138.165.496.165.991.33 1.652v.165c.33 3.303.826 6.276.496 8.919-.165 1.156-.826 1.651-1.321 2.147l-.33.33-.166 2.147c-2.973.33-5.946.66-8.919 1.321-12.717 2.808-23.948 9.25-32.701 18.498l-1.652-1.156h-.33c-.33 0-.661.165-.991.165-.496 0-.991-.165-1.487-.495-2.147-1.486-4.294-3.634-6.606-6.111-.33-.33-.66-.826-1.156-1.156-.661-.826-1.322-1.487-2.148-2.312-.165-.166-.495-.33-.825-.661-.165-.165-.33-.165-.33-.33a5.772 5.772 0 0 0-3.634-1.322c-1.487 0-2.973.661-3.799 1.817-1.652 2.147-1.156 5.45 1.156 7.432.165 0 .165.166.33.166.33.165.496.495.826.66.991.66 1.817 1.156 2.808 1.652.496.165.991.495 1.487.826 2.972 1.816 5.45 3.303 7.432 5.12.826.825.826 1.651.826 2.477v.33l1.651 1.487c-.33.495-.66.826-.826 1.321-8.258 13.048-11.396 28.408-9.249 43.603l-2.147.66c0 .166-.165.166-.165.33-.33.661-.826 1.322-1.817 1.817-2.477.826-5.45 1.157-8.918 1.487h-.166c-.495 0-1.156 0-1.651.165-.991 0-1.982.165-3.138.33-.33 0-.66.166-.991.166-.165 0-.33 0-.496.165-2.973.66-4.79 3.468-4.294 6.11.496 2.313 2.643 3.8 5.285 3.8.496 0 .826 0 1.322-.166.165 0 .33 0 .33-.165.33 0 .66-.165.99-.165 1.157-.33 1.983-.66 2.974-1.156.495-.165.99-.496 1.486-.66h.165c3.138-1.157 5.946-2.148 8.589-2.478h.33c.991 0 1.652.495 2.147.826.165 0 .165.165.33.165l2.313-.33c3.964 12.221 11.561 23.122 21.636 31.05 2.312 1.816 4.624 3.303 7.102 4.79l-.991 2.146c0 .166.165.166.165.33.33.661.66 1.487.33 2.643-.99 2.478-2.477 4.955-4.294 7.763v.165c-.33.496-.66.826-.99 1.321-.661.826-1.157 1.652-1.818 2.643-.165.165-.33.495-.495.826 0 .165-.165.33-.165.33-1.321 2.808-.33 5.946 2.147 7.102.66.33 1.321.496 1.982.496 1.982 0 3.964-1.322 4.955-3.139 0-.165.165-.33.165-.33.165-.33.33-.66.495-.826.496-1.156.661-1.982.991-2.973l.496-1.486c1.156-3.303 1.982-5.946 3.468-8.258.66-.991 1.487-1.156 2.147-1.487.165 0 .165 0 .33-.165l1.157-2.147c7.267 2.808 15.195 4.294 23.122 4.294 4.79 0 9.745-.495 14.37-1.651a73.402 73.402 0 0 0 8.588-2.478l.99 1.817c.166 0 .166 0 .331.165.826.165 1.486.496 2.147 1.487 1.321 2.312 2.312 5.12 3.468 8.258v.165l.496 1.486c.33.991.495 1.982.99 2.973.166.33.331.496.496.826 0 .165.166.33.166.33.99 1.982 2.972 3.139 4.954 3.139.661 0 1.322-.166 1.982-.496 1.156-.66 2.147-1.652 2.478-2.973.33-1.321.33-2.808-.33-4.129 0-.165-.166-.165-.166-.33-.165-.33-.33-.66-.495-.826-.496-.991-1.156-1.817-1.817-2.643-.33-.495-.66-.825-.99-1.32v-.166c-1.818-2.808-3.47-5.285-4.295-7.763-.33-1.156 0-1.816.165-2.642 0-.165.165-.165.165-.33l-.826-1.982c8.754-5.12 16.186-12.388 21.802-21.306 2.973-4.625 5.285-9.745 6.936-14.865l1.982.33c.166 0 .166-.165.33-.165.661-.33 1.157-.825 2.148-.825h.33c2.643.33 5.45 1.32 8.589 2.477h.165c.495.165.99.495 1.486.66.991.496 1.817.826 2.973 1.157.33 0 .66.165.991.165.165 0 .33 0 .495.165.496.165.826.165 1.322.165 2.477 0 4.624-1.651 5.285-3.798 0-1.982-1.817-4.625-4.79-5.45zm-76.47-8.093l-7.267 3.469-7.267-3.469-1.816-7.762 4.954-6.276h8.093l4.955 6.276-1.651 7.762zm43.108-17.176a52.078 52.078 0 0 1 1.156 16.68l-25.27-7.266c-2.312-.66-3.633-2.973-3.138-5.285.165-.661.496-1.322.991-1.817l19.985-18.003c2.807 4.625 4.954 9.91 6.276 15.69zm-14.204-25.6l-21.636 15.36c-1.817 1.156-4.295.825-5.781-.991-.495-.496-.66-1.157-.826-1.817l-1.486-26.922a50.13 50.13 0 0 1 29.729 14.37zM116.769 78.12c1.817-.33 3.468-.66 5.285-.99l-1.486 26.425c-.165 2.312-1.982 4.294-4.46 4.294-.66 0-1.486-.165-1.982-.495L92.16 91.665c6.772-6.772 15.195-11.397 24.609-13.544zm-32.537 23.453l19.654 17.507c1.817 1.487 1.982 4.294.496 6.111-.496.66-1.156 1.156-1.982 1.322l-25.6 7.432c-.991-11.231 1.486-22.627 7.432-32.372zm-4.46 44.759l26.262-4.46c2.147-.165 4.129 1.322 4.624 3.469.165.99.165 1.817-.165 2.643l-10.075 24.278c-9.249-5.946-16.681-15.03-20.645-25.93zm60.285 32.867c-3.799.826-7.598 1.321-11.562 1.321-5.78 0-11.396-.99-16.68-2.642l13.047-23.618c1.321-1.487 3.468-2.147 5.285-1.156a7.04 7.04 0 0 1 1.982 1.816l12.717 22.958c-1.486.495-3.138.826-4.79 1.321zm32.206-22.957c-4.129 6.606-9.58 11.891-15.855 16.02l-10.405-24.94c-.496-1.981.33-4.128 2.312-5.12.66-.33 1.486-.495 2.312-.495l26.426 4.46c-.991 3.633-2.643 6.937-4.79 10.075z" fill="#FFF"/></svg>
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
