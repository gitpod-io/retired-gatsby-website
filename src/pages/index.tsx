import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';
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

const HowItWorks = styled.div`
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
        return <div style={{ minHeight: 550 }}>
            <h2 >Three Ways to Start Coding</h2>
            <div className='flex hidden-md-down' style={{ zIndex: 99 }}>
                {
                    [0, 1, 2].map(idx =>
                        (<div key={'menu_'+idx} style={{ cursor: 'pointer', paddingTop: 30 }} onClick={() => this.setState({ worksMode: idx })}>
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
                            <img src={PrefixScreenshot} />
                        </div>
                        <p>... and get a ready-to-code dev environment immediately.</p>
                    </div>
                    <div className={this.state.worksMode === 1 ? 'selected' : ''}>
                        <h3>Install the Browser Extension</h3>
                        <img className='browser-extension-image' src={BrowserExtension} />
                        <div className='browser-extension-description' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <p>The browser extension adds a button to every GitHub repository, issue and pull request. So you don't have to prefix manually.</p>
                            <a href={this.getBrowserExtension()} target='_blank'><button className='primary' style={{ minWidth: 200 }}>Get Browser Extension</button></a>
                        </div>
                    </div>
                    <div className={this.state.worksMode === 2 ? 'selected' : ''}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <h3>Install the GitHub app</h3>
                                <p>Like Continuous Integration, the GitHub App detects changes in your repository and starts preparing workspaces. By the time your team starts to code, all dependencies are preinstalled, and the code is already compiled.</p>
                                <a href='https://github.com/marketplace/gitpod-io' target='_blank'><button className='primary' style={{ minWidth: 200 }}>GitHub Marketplace</button></a>
                            </div>
                            <img className='hidden-md-down' style={{ marginTop: 15, width: 250 }} src={Octocat} />
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
                        (<div key={'_'+idx} onClick={() => this.setState({ worksMode: idx })} style={{ cursor: 'pointer' }}>
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
        return <IndexLayout>
            <Page>
                <Container>
                    <Logos logos={[
                        [1080, 30, 50],
                        [-70, 560, 70],
                        [10, 540, 40]
                    ]} />
                    <div style={{ zIndex: 99, position: "fixed", top: 50, left: 'auto' }}>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='D41zSHJthZI' onClose={() => this.setState({ isOpen: false })} />
                    </div>
                    <GitpodHeader>
                        <h2 style={{ color: colors.fontColor2, marginBottom: 15 }}>Frictionless Coding</h2>
                        <h1 style={{ fontSize: '2.4em' }}>One-Click Online IDE<br /> for GitHub</h1>
                        <div style={{ height: 3, width: 95, backgroundColor: colors.brand, marginBottom: 30 }} />
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
                        { down: 445 },
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
                            <ExampleBox title="JavaScript" description='React Application' image={(JS)} link="https://gitpod.io/#https://github.com/gitpod-io/react-starter-kit" />
                            <ExampleBox title="Python" description='Django Application' image={(Python)} link="https://gitpod.io/#https://github.com/sibtc/django-beginners-guide" />
                            <ExampleBox title="Java" description='Spring-Boot Application' image={(Java)} link="https://gitpod.io/#https://github.com/spring-guides/gs-spring-boot" />
                            <ExampleBox title="Go" description='Gin Web Application' image={(Go)} link="https://gitpod.io/#" />
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
                        <ResponsiveTweet style={{ left: 530, top: 160 }}>
                            <TweetEmbed id='1101772731203252229' options={twitterOptions} />
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
