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
    .row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 80px;
        @media(min-width: ${getEmSize(breakpoints.lg)}em) {
            margin-left: -40px;
        }
        @media(max-width: ${getEmSize(breakpoints.md) - 1}em) {
           flex-direction: column;
        }
    }
    .col {
        flex: 2;
        text-align: center;
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
        width: 80px;
        height: 80px;
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
                        { down: 377 },
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
                        <h2>Built On planet-scale Technologies</h2>
                        <p>Gitpod is based on industry-proven open source software to bring you a seamless, safe, and blazing fast development experience</p>
                        <div className='row'>
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
                                <h5>Typescript</h5>
                            </div>
                            <div className='col'>
                                <div className='svg-container'>
                                    <a href="https://golang.org/" target="_blank">
                                        <svg id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" width="401.98" height="559.472"
                                            viewBox="0 0 401.98 559.472">
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#dedede" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M10.634,300.493c0.764,15.751,16.499,8.463,23.626,3.539c6.765-4.675,8.743-0.789,9.337-10.015	c0.389-6.064,1.088-12.128,0.744-18.216c-10.23-0.927-21.357,1.509-29.744,7.602C10.277,286.542,2.177,296.561,10.634,300.493"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#C6B198" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M10.634,300.493c2.29-0.852,4.717-1.457,6.271-3.528"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#dedede" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M46.997,112.853C-13.3,95.897,31.536,19.189,79.956,50.74L46.997,112.853z"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#dedede" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M314.895,44.984c47.727-33.523,90.856,42.111,35.388,61.141L314.895,44.984z"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#dedede" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M325.161,494.343c12.123,7.501,34.282,30.182,16.096,41.18c-17.474,15.999-27.254-17.561-42.591-22.211	C305.271,504.342,313.643,496.163,325.161,494.343z"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="none" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M341.257,535.522c-2.696-5.361-3.601-11.618-8.102-15.939"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#dedede" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M108.579,519.975c-14.229,2.202-22.238,15.039-34.1,21.558c-11.178,6.665-15.454-2.134-16.461-3.92	c-1.752-0.799-1.605,0.744-4.309-1.979c-10.362-16.354,10.797-28.308,21.815-36.432C90.87,496.1,100.487,509.404,108.579,519.975z"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="none" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M58.019,537.612c0.542-6.233,5.484-10.407,7.838-15.677"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M49.513,91.667c-7.955-4.208-13.791-9.923-8.925-19.124	c4.505-8.518,12.874-7.593,20.83-3.385L49.513,91.667z"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M337.716,83.667c7.955-4.208,13.791-9.923,8.925-19.124	c-4.505-8.518-12.874-7.593-20.83-3.385L337.716,83.667z"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#dedede" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M392.475,298.493c-0.764,15.751-16.499,8.463-23.626,3.539c-6.765-4.675-8.743-0.789-9.337-10.015	c-0.389-6.064-1.088-12.128-0.744-18.216c10.23-0.927,21.357,1.509,29.744,7.602C392.831,284.542,400.932,294.561,392.475,298.493"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#C6B198" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M392.475,298.493c-2.29-0.852-4.717-1.457-6.271-3.528"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#dedede" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M195.512,13.124c60.365,0,116.953,8.633,146.452,66.629c26.478,65.006,17.062,135.104,21.1,203.806 c3.468,58.992,11.157,127.145-16.21,181.812c-28.79,57.514-100.73,71.982-160,69.863c-46.555-1.666-102.794-16.854-129.069-59.389 c-30.826-49.9-16.232-124.098-13.993-179.622c2.652-65.771-17.815-131.742,3.792-196.101 C69.999,33.359,130.451,18.271,195.512,13.124"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#FFF" stroke="#000"
                                                strokeWidth="2.908" strokeLinecap="round" d="M206.169,94.16c10.838,63.003,113.822,46.345,99.03-17.197C291.935,19.983,202.567,35.755,206.169,94.16"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#FFF" stroke="#000"
                                                strokeWidth="2.821" strokeLinecap="round" d="M83.103,104.35c14.047,54.85,101.864,40.807,98.554-14.213C177.691,24.242,69.673,36.957,83.103,104.35"
                                            />
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#FFF" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M218.594,169.762c0.046,8.191,1.861,17.387,0.312,26.101c-2.091,3.952-6.193,4.37-9.729,5.967c-4.89-0.767-9.002-3.978-10.963-8.552	c-1.255-9.946,0.468-19.576,0.785-29.526L218.594,169.762z"
                                            />
                                            <g fillRule="evenodd" clipRule="evenodd">
                                                <ellipse cx="107.324" cy="95.404" rx="14.829" ry="16.062" />
                                                <ellipse fill="#FFF" cx="114.069" cy="99.029" rx="3.496" ry="4.082" />
                                            </g>
                                            <g fillRule="evenodd" clipRule="evenodd">
                                                <ellipse cx="231.571" cy="91.404" rx="14.582" ry="16.062" />
                                                <ellipse fill="#FFF" cx="238.204" cy="95.029" rx="3.438" ry="4.082" />
                                            </g>
                                            <path fillRule="evenodd" clipRule="evenodd" fill="#FFF" stroke="#000"
                                                strokeWidth="3" strokeLinecap="round" d="M176.217,168.87c-6.47,15.68,3.608,47.035,21.163,23.908c-1.255-9.946,0.468-19.576,0.785-29.526L176.217,168.87z"
                                            />
                                            <g fillRule="evenodd" clipRule="evenodd">
                                                <path fill="#dedede" stroke="#231F20" strokeWidth="3" strokeLinecap="round"
                                                    d="M178.431,138.673c-12.059,1.028-21.916,15.366-15.646,26.709c8.303,15.024,26.836-1.329,38.379,0.203 c13.285,0.272,24.17,14.047,34.84,2.49c11.867-12.854-5.109-25.373-18.377-30.97L178.431,138.673z"
                                                />
                                                <path d="M176.913,138.045c-0.893-20.891,38.938-23.503,43.642-6.016 C225.247,149.475,178.874,153.527,176.913,138.045C175.348,125.682,176.913,138.045,176.913,138.045z"
                                                />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <h5>Go</h5>
                            </div>
                            <div className='col'>
                                <div className='svg-container'>
                                    <a href="https://www.docker.com/" target="_blank">
                                        <svg height="512" style={{ transform: 'scale(1.3)' }} viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
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
