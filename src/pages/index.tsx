import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import StarGraph from '../components/StarGraph';
import IndexGraph from '../resources/Pfad_Home.svg';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'
import { colors } from '../styles/variables';
import TweetEmbed from 'react-tweet-embed'


export default class IndexPage extends React.Component<{}, { isOpen: boolean, scroll: number }> {

    constructor(props:{}) {
        super(props);
        this.state = {
            isOpen: false,
            scroll: window.scrollY
        }
        this.openModal = this.openModal.bind(this)
        window.addEventListener('scroll', () => {
            this.setState({
                scroll: window.scrollY
            });
        });
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        const twitterOptions = {theme: 'light', dnt: true, cards: 'hidden' };
        return <IndexLayout>
            <Page>
                <Logos logos={[
                    [80, 60, 25],
                    [280, -20, 30],
                    [330, 40, 60],
                    [480, -40, 120],
                    [760, 20, 290],
                    [600, 180, 210],
                    [-10, 460, 30],
                ]} />
                <StarGraph src={IndexGraph} top={-43} left={-30} />
                <Container>
                    <div style={{ zIndex: 99, position: "fixed", top: 50, left: 'auto' }}>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='D41zSHJthZI' onClose={() => this.setState({ isOpen: false })} />
                    </div>
                    <div style={{ height: 400, marginTop: 95 }}>
                        <h1>Frictionless Coding for GitHub</h1>
                        <p>Whether you want to fix a bug, have code to review or feel like trying something new on GitHub,<br />
                            Gitpod beams you right into a ready-to-code dev environment with a single click.</p>
                        <div style={{ paddingTop: 10, cursor: 'pointer' }}>
                            <button onClick={this.openModal}>Learn more</button>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div style={{ height: 320 }}>
                        <h1 style={{ paddingBottom: 30 }}>How does it work?</h1>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h2 style={{ marginRight: 40 }}>Manual Prefixing</h2>
                            <h2>Browser Extension</h2>
                        </div>
                        <p>Welcome to your new Gatsby site.</p>
                        <p>Now go build something great.</p>
                        <Link to="/page-2/">Go to page 2</Link>
                    </div>
                </Container>
                <div style={{ backgroundColor: colors.background2, zIndex: 2 }}>
                    <Container>
                        <div style={{ height: 325, marginTop: 50 }}>
                            <h1>Try an example!</h1>
                            <p style={{ paddingTop: 30 }}>FOO Gatsby site.</p>
                            <p>Now go build something great.</p>
                            <Link to="/page-2/">Go to page 2</Link>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div style={{
                        height: 200
                    }}>
                        <button style={{
                            position: 'absolute',
                            top: 133,
                            left: 350
                        }}>Start now, it's free!</button>
                    </div>
                </Container>
                <Container>
                    <div style={{
                        height: 530
                    }}>
                        <div style={{position: 'absolute', left:40, top: 0, width: 400}}>
                            <TweetEmbed id='1101772731203252229' options={twitterOptions}/>
                        </div>
                        <div style={{position: 'absolute', left:20, top: 180, width: 400}}>
                            <TweetEmbed id='1101055381386743808' options={twitterOptions}/>
                        </div>
                        <div style={{position: 'absolute', left:30, top: 380, width: 400}}>
                            <TweetEmbed id='1100698060831764481' options={twitterOptions}/>
                        </div>
                        <div style={{position: 'absolute', left:460, top: 100, width: 400}}>
                            <TweetEmbed id='1101918877443735558' options={twitterOptions}/>
                        </div>
                        <div style={{position: 'absolute', left:465, top: 280}}>
                            <TweetEmbed id='1101772691181207552' options={twitterOptions}/>
                        </div>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}
