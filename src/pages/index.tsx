import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'
import { colors } from '../styles/variables';
import TweetEmbed from 'react-tweet-embed'
import BrowserExtension from '../resources/browser-extension.svg';
import { clean } from '../clean-url';
import ExampleBox from '../components/ExampleBox';
import Python from '../resources/Logo_Python.svg';
import Java from '../resources/Logo_Java.svg';
import Go from '../resources/Logo_Go.svg';
import JS from '../resources/Logo_JS.svg';
import ScreenshotVideo from '../resources/screenshot-video.jpg';
import GitHubApp from '../resources/github-app.jpg';

import { arrowLeft, arrowRight, arrow, rocket, brain } from '../resources/icons';
import styled from '@emotion/styled';
import GitGraph from '../components/GitGraph';
import GatsbyLink from 'gatsby-link';

interface IndexPageState { isOpen: boolean, worksMode: number }

const WhyBox = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;
`;

const Teaser = styled.div`
    background-color: ${colors.background2};
    z-index: 2;
    box-shadow: 0px 0px 160px 0px rgba(5,5,5,0.57);
`;

export default class IndexPage extends React.Component<{}, IndexPageState> {

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
        const modes = ['URL Prefixing', 'Browser Extension', 'GitHub App'];
        let contents: JSX.Element = <></>;
        switch (this.state.worksMode) {
            case 0: {
                contents = <div style={{ margin: 40 }}>
                    <div style={{ marginTop: 60 }}>
                        <p><strong>Just prefix any GitHub URL with <strong className="glow">gitpod.io/#</strong>.</strong></p>
                        <p>Gitpod analysis the GitHub URL and beams you into a ready-to-code dev environment for that context.</p>
                    </div>
                    <div style={{ margin: '40px 0px' }}>
                        <UrlAnimation />
                    </div>
                </div>;
                break;
            }
            case 1: {
                contents = <div style={{ margin: 40 }}>
                    <strong>Have a button on every GitHub page.</strong>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <p>The browser extension adds a button to every GitHub repository.<br /> So you don't have to prefix manually.</p>
                        <button className='primary' style={{ marginLeft: 20, minWidth: 200 }}>Learn More</button>
                    </div>
                    <img style={{ marginTop: 10 }} src={clean(BrowserExtension)} />
                </div>
                break;
            }
            case 2: {
                contents = <div style={{ margin: 40 }}>
                    <p><strong>The GitHub app builds your projects</strong> so you don't have to when starting to code.</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>Just like continuos integration tools, the GitHub app listens for changes on your repository and starts preparing workspaces. When your team starts to code all dependencies are downloaded and the code is already compiled.</p>
                        <button className='primary' style={{ marginLeft: 20, minWidth: 200 }}>Learn More</button>
                    </div>
                    <img style={{ borderRadius: 2, margin: '20px 70px', width: 700 }} src={GitHubApp} />
                </div>
                break;
            }
        }
        return <div style={{ height: 600 }}>
            <h2 >How It Works:</h2>
            <div style={{ display: 'flex', zIndex: 99 }}>
                {
                    [0, 1, 2].map(idx =>
                        (<div style={{ cursor: 'pointer', paddingTop: 30 }} onClick={() => this.setState({ worksMode: idx })}>
                            <h3 style={{ paddingRight: 60, color: this.state.worksMode === idx ? colors.fontColor1 : colors.fontColor2 }} >{modes[idx]}</h3>
                        </div>))
                }
            </div>
            <div style={{ display: 'flex', height: 280 }}>
                <div style={{ minWidth: 40, margin: 'auto' }} onClick={() => this.setState({ worksMode: (this.state.worksMode + 2) % 3 })}>
                    {arrowLeft({ width: 16, cursor: 'pointer', margin: 12 })}
                </div>
                <div style={{ flexGrow: 2 }}>
                    {contents}
                </div>
                <div style={{ minWidth: 40, margin: 'auto' }} onClick={() => this.setState({ worksMode: (this.state.worksMode + 1) % 3 })}>
                    {arrowRight({ width: 16, cursor: 'pointer', margin: 12 })}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    [0, 1, 2].map(idx =>
                        (<div onClick={() => this.setState({ worksMode: idx })} style={{ cursor: 'pointer' }}>
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
                    <div style={{ maxWidth: 360, height: 550, marginTop: 60, zIndex: 2 }}>
                        <h2 style={{ color: colors.fontColor2, marginBottom: 15 }}>Frictionless Coding</h2>
                        <h1 style={{ fontSize: '3em' }}>One-Click IDE<br /> for GitHub</h1>
                        <div style={{ height: 3, width: 95, backgroundColor: colors.brand, marginBottom: 30 }} />
                        <p>Gitpod beams you into a ready-to-code dev environment from any GitHub page.</p>
                    </div>
                    <div style={{ position: 'absolute', left: 375, top: 100 }}>
                        <svg x="0px" y="0px" viewBox="0 0 100 100"
                            className="button-like"
                            style={{
                                cursor: 'pointer',
                                padding: 80,
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
                        <img style={{ maxWidth: 700 }} src={ScreenshotVideo}>
                        </img>
                    </div>
                </Container>
                <Container>
                    <GitGraph left={-900} top={0} graph={[
                        { start: [0, 115] },
                        { right: 860 },
                        {},
                        { right: 20 },
                        { down: 50 },
                        {
                            fork: [
                                { right: 85 },
                                {
                                    isActive: () => this.state.worksMode === 0,
                                    onClick: () => { this.setState({ worksMode: 0 }) }
                                },
                                { right: 200 },
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
                        // try an example
                        { down: 1180 },
                        {},
                        // what do opthers say
                        { down: 550 },
                        {},
                        { down: 60 },
                        {
                            fork: [
                                { right: 480 },
                                { down: 60 },
                                {},
                                { down: 220 },
                                {},
                                { down: 220 },
                                {},
                                { down: 50 },
                                { left: 480 },
                                { down: 20 }
                            ]
                        },
                        { down: 150 },
                        {},
                        { down: 250 },
                        {},
                        { down: 420 },
                        {}
                    ]} />
                    <Logos logos={[
                        [1020, 120, 30]
                    ]} />
                    {this.getHowDoesItWork()}
                </Container>
                <Teaser>
                    <Container>
                        <div style={{ height: 450 }}>
                            <h2>Why Gitpod?</h2>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                                <WhyBox>
                                    {brain({ width: 70 })}
                                    <h3>More Flow</h3>
                                    <div style={{ width: 50, height: 3, backgroundColor: colors.brand, marginBottom: 16 }} />
                                    <p>Gitpod picks you up where you are and beams you into a familiar development environment.</p>
                                    <p>Based on VS Code and Linux terminals you have access to all your favorite tools in a browser tab.</p>
                                </WhyBox>
                                <WhyBox>
                                    {rocket({ width: 70 })}
                                    <h3>Less Waiting</h3>
                                    <div style={{ width: 50, height: 3, backgroundColor: colors.brand, marginBottom: 16 }} />
                                    <p>Gitpod is the first IDE that builds your project before you even open it.</p>
                                    <p>Install the GitHub App and have prepare ready-to-code dev environments. They are not only checked out but also compiled and tested.</p>

                                </WhyBox>
                                <WhyBox>
                                    {arrow({ width: 70 })}
                                    <h3>No Setup</h3>
                                    <div style={{ width: 50, height: 3, backgroundColor: colors.brand, marginBottom: 16 }} />
                                    <p>Start coding right away.</p>
                                    <p>No more 'works on my machine' situations and hour long setups.<br /> With Gitpod developer environments are automated, reproducible and versioned.</p>
                                </WhyBox>
                            </div>
                        </div>
                    </Container>
                </Teaser>
                <Container>
                    <div style={{ height: 425, marginTop: 60 }}>
                        <h2>Try an example!</h2>
                        <p>Gitpod works with all major programming languages. You can try an example right now.</p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                            <ExampleBox title="Python" description='Django Application' image={(Python)} link="https://gitpod.io/#" />
                            <ExampleBox title="Java" description='Spring-Boot Application' image={(Java)} link="https://gitpod.io/#" />
                            <ExampleBox title="JavaScript" description='Next.js Application' image={(JS)} link="https://gitpod.io/#" />
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
                        height: 730,
                        marginTop: 80
                    }}>
                        <h2>What do others say?</h2>
                        <div style={{ position: 'absolute', left: 530, top: 160, width: 435 }}>
                            <TweetEmbed id='1101772731203252229' options={twitterOptions} />
                        </div>
                        <div style={{ position: 'absolute', left: 530, top: 370, width: 435 }}>
                            <TweetEmbed id='1101055381386743808' options={twitterOptions} />
                        </div>
                        <div style={{ position: 'absolute', left: 530, top: 600, width: 435 }}>
                            <TweetEmbed id='1100698060831764481' options={twitterOptions} />
                        </div>
                        <div style={{ position: 'absolute', left: 23, top: 240, width: 435 }}>
                            <TweetEmbed id='1101918877443735558' options={twitterOptions} />
                        </div>
                        <div style={{ position: 'absolute', left: 23, top: 450, width: 435 }}>
                            <TweetEmbed id='1101772691181207552' options={twitterOptions} />
                        </div>
                    </div>
                </Container>
                <Container>
                    <div style={{ paddingTop: 80 }}>
                        <h2>Learn About All the Other Features</h2>
                        <p>Gitpod supports collaboration, workspace snapshots, many different programming languages and much more.</p>
                        <GatsbyLink to="/features"><button className="primary">See Features</button></GatsbyLink>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}


class UrlAnimation extends React.Component<{}, { url: string }>{
    protected start: number = 0;
    protected prefix: string;
    protected stepTime: number;
    protected initialStepTime: number;
    protected startDelay: number;
    protected gitpodUrl: string;
    protected githubUrl: string;

    constructor(p: {}) {
        super(p);
        this.githubUrl = 'https://github.com/my-org/my-project';
        this.gitpodUrl = 'https://gitpod.io/#';
        this.prefix = '';
        this.startDelay = 2000;
        this.initialStepTime = 80;
        this.stepTime = this.initialStepTime;
        this.state = { url: '' };
    }

    protected writeALetter = (timestamp: number) => {
        if (!this.start) this.start = timestamp;
        var progress = timestamp - this.start;
        if ((this.prefix === '' && progress > this.startDelay) || (this.prefix !== '' && progress > this.stepTime)) {
            this.prefix = this.gitpodUrl.substring(0, this.prefix.length + 1);
            this.setState({ url: this.prefix });
            this.start = timestamp;
            this.stepTime = this.initialStepTime + (100 * Math.random());
        }
        if (this.prefix !== this.gitpodUrl) {
            window.requestAnimationFrame(this.writeALetter);
        }
    };

    componentDidMount() {
        window.requestAnimationFrame(this.writeALetter);
    }
    render() {
        return <div style={{
            backgroundColor: 'white',
            height: 30,
            padding: '5px 20px',
            borderRadius: 20
        }}>
            <div style={{
                fontSize: 13,
                color: '#1e1e1e'
            }}>{this.state.url}<span style={{
                animation: "blink 1s  infinite",
                borderLeft: "1px solid #333",
                width: 1,
                height: 20,
            }}></span><span style={{ color: '#898989' }}>{this.githubUrl}</span></div>
        </div>
    }
}
