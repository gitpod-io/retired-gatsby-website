import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import StarGraph from '../components/StarGraph';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'
import { colors } from '../styles/variables';
import TweetEmbed from 'react-tweet-embed'
import PrefixImage from '../resources/image-prefix.png';
import BrowserExtension from '../resources/browser-extension.png';
import { clean } from '../clean-url';
import ExampleBox from '../components/ExampleBox';
import Python from '../resources/Logo_Python.svg';
import Java from '../resources/Logo_Java.svg';
import Go from '../resources/Logo_Go.svg';
import JS from '../resources/Logo_JS.svg';


export default class IndexPage extends React.Component<{}, { isOpen: boolean, isManualPrefixing: boolean }> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false,
            isManualPrefixing: true
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        const twitterOptions = { theme: 'light', dnt: true, cards: 'hidden' };
        return <IndexLayout>
            <Page>
                <Container>
                    <StarGraph left={-60} top={-70} graphs={[
                        [
                            { x: 109, y: 360 },
                            { x: 5, y: 630 },
                            { x: 130, y: 700, inactive: !this.state.isManualPrefixing },
                            { x: 330, y: 680, inactive: this.state.isManualPrefixing }
                        ],
                        [
                            { x: 5, y: 630 },
                            { x: 5, y: 1900 },
                        ],
                        [
                            { x: 5, y: 1900 },
                            { x: 550, y: 2040 },
                        ],
                        [
                            { x: 5, y: 1900 },
                            { x: 550, y: 2270 },
                        ],
                        [
                            { x: 5, y: 1900 },
                            { x: 550, y: 2490 },
                        ],
                        [
                            { x: 5, y: 1900 },
                            { x: 70, y: 2150 },
                        ],
                        [
                            { x: 5, y: 1900 },
                            { x: 70, y: 2430 },
                        ],
                    ]} />
                    <Logos logos={[
                        [80, 60, 25],
                        [280, -10, 30],
                        [330, 50, 60],
                        [480, -30, 120],
                        [760, 100, 290],
                        [600, 280, 210],
                        [-120, 460, 30],
                        [1020, 830, 120],
                        [1260, 2100, 200],
                        [900, 2280, 160],
                        [-120, 2060, 30],
                    ]} />
                    <div style={{ zIndex: 99, position: "fixed", top: 50, left: 'auto' }}>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='D41zSHJthZI' onClose={() => this.setState({ isOpen: false })} />
                    </div>
                    <div style={{ height: 380, marginTop: 60 }}>
                        <h1>Frictionless Coding for GitHub</h1>
                        <p>Whether you want to fix a bug, have code to review or feel like trying something new on GitHub,<br />
                            Gitpod beams you right into a ready-to-code dev environment with a single click.</p>
                        <button onClick={this.openModal}>Play Video</button>
                    </div>
                </Container>
                <Container>
                    <div style={{ height: 650 }}>
                        <h2>How does it work?</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', zIndex: 99 }}>
                            <div style={{ cursor: 'pointer', paddingTop: 30 }} onClick={() => this.setState({ isManualPrefixing: true })}>
                                <h3 style={{ width: 200, color: this.state.isManualPrefixing ? colors.fontColor1 : colors.fontColor2 }} >Manual Prefixing</h3>
                            </div>
                            <div style={{ cursor: 'pointer', paddingTop: 30 }} onClick={() => this.setState({ isManualPrefixing: false })}>
                                <h3 style={{ width: 200, color: !this.state.isManualPrefixing ? colors.fontColor1 : colors.fontColor2 }}>Browser Extension</h3>
                            </div>
                        </div>
                        {
                            this.state.isManualPrefixing ? (
                                <>
                                    <p style={{ position: 'absolute', top: 200 }}>Prefix any GitHub URL with <strong className="glow">gitpod.io/#</strong>.</p>
                                    <img style={{ position: 'absolute', top: 70, left: 120 }} src={clean(PrefixImage)} />
                                </>
                            ) : (
                                    <>
                                        <div style={{ position: 'absolute', top: 200, width: 360 }}>
                                            <p>Install the browser extension to get a button on all GitHub pages.</p>
                                            <button>Install Browser Extension</button>
                                        </div>
                                        <img style={{ position: 'absolute', top: 250, left: 280, width: 700 }} src={clean(BrowserExtension)} />
                                    </>
                                )
                        }
                    </div>
                </Container>
                <div style={{ backgroundColor: colors.background2, zIndex: 2, boxShadow: "0px 0px 160px 0px rgba(5,5,5,0.57)" }}>
                    <Container>
                        <div style={{ height: 425, marginTop: 30 }}>
                            <h2>Try an example!</h2>
                            <h4>Gitpod works with all major programming languages. Try any of the examples below.</h4>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                                <ExampleBox title="Python" image={clean(Python)} link="https://gitpod.io/#" />
                                <ExampleBox title="Java" image={clean(Java)} link="https://gitpod.io/#" />
                                <ExampleBox title="JavaScript" image={clean(JS)} link="https://gitpod.io/#" />
                                <ExampleBox title="Go" image={clean(Go)} link="https://gitpod.io/#" />
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div style={{
                        height: 730,
                        marginTop: 80
                    }}>
                        <h2>What do others say?</h2>
                        <div style={{ position: 'absolute', left: 502, top: 160, width: 435 }}>
                            <TweetEmbed id='1101772731203252229' options={twitterOptions} />
                        </div>
                        <div style={{ position: 'absolute', left: 502, top: 370, width: 435 }}>
                            <TweetEmbed id='1101055381386743808' options={twitterOptions} />
                        </div>
                        <div style={{ position: 'absolute', left: 502, top: 600, width: 435 }}>
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
            </Page>
        </IndexLayout>;
    }
}
