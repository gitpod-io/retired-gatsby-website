import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import GitGraph from '../components/GitGraph';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'
import { clean } from '../clean-url';
import { colors } from '../styles/variables';
import TerminalsImage from '../resources/terminals.png';
import LanguageToolingImage from '../resources/language-tooling.png';
import InlineCommentsImage from '../resources/inline-comments.png';
import PrebuiltWorkspacesImage from '../resources/prebuilt-workspaces.png';
import LinuxInYourBrowserImage from '../resources/linux-in-your-browser.png';
import * as icons from '../resources/icons';
import styled from '@emotion/styled';

interface FeaturesPageState {
    isModalOpen: boolean;
}

const HeaderLink = styled.a`
    width: 170px;
    padding: 0 20px;
    vertical-align: bottom;
    text-align: center;
    color: ${colors.fontColor1};
    text-decoration: none;

    :hover {
        color: ${colors.brand};
        text-decoration: none;
    }
`;

const FeatureColumn = styled.td`
    text-align: center;
    text-transform: uppercase;
    min-width: 120px;
    font-size: 12px;
`

export default class FeaturesPage extends React.Component<{}, FeaturesPageState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    render() {
        return <IndexLayout>
            <Page>
                <div style={{ zIndex: 99, position: "fixed", top: 50, left: 'auto' }}>
                    <ModalVideo channel='youtube' isModalOpen={this.state.isModalOpen} videoId='D41zSHJthZI' onClose={() => this.setState({ isModalOpen: false })} />
                </div>
                <Container>
                    <GitGraph left={-900} top={20} graph={[
                        { start: [0, 115] },
                        { right: 860 },
                        {},
                        { right: 10 },
                        { down: 200 },
                        {
                            fork: [
                                { right: 115 },
                                {
                                    onClick: () => { }
                                },
                                { right: 163 },
                                {
                                    onClick: () => { }
                                },
                                { right: 163 },
                                {
                                    onClick: () => { }
                                },
                                { right: 163 },
                                {
                                    onClick: () => { }
                                },
                                { right: 163 },
                                {
                                    onClick: () => { }
                                },
                                { right: 163 },
                                {
                                    onClick: () => { }
                                }
                            ]
                        },
                        // try an example
                        { down: 210 },
                        {},
                        // what do opthers say
                        { down: 570 },
                        {},
                        { down: 595 },
                        {},
                        { down: 575 },
                        {},
                        { down: 600 },
                        {},
                        { down: 1620 },
                        { right: 400 },
                        {}
                    ]} />
                    <Logos logos={[
                        [420, 70, 20],
                        [550, -20, 70],
                        [830, 70, 140],
                    ]} />
                    <div style={{ marginTop: 40 }}>
                        <h4 style={{ color: colors.fontColor2, textTransform: 'uppercase' }}>Features</h4>
                        <h1>Why Gitpod?</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5rem', marginBottom: '12rem', alignItems: 'flex-end' }}>
                        <HeaderLink href="#prebuilt-workspaces" >Prebuilt Workspaces</HeaderLink>
                        <HeaderLink href="#vs-code">VS Code</HeaderLink>
                        <HeaderLink href="#docker">Terminals</HeaderLink>
                        <HeaderLink href="#code-review-mode" >Code Reviews</HeaderLink>
                        <HeaderLink href="#collaboration" >Collaboration</HeaderLink>
                        <HeaderLink href="#supported-languages" >Supported Languages</HeaderLink>
                    </div>
                    <Feature
                        title="Prebuilt Workspaces"
                        button={<a href="https://medium.com/@csweichel/waiting-for-code-to-build-is-like-watching-paint-dry-a1c6b25fd601" target="_blank">
                            <button className='primary' onClick={this.openModal}>Learn More</button>
                        </a>}
                        visual={<img src={clean(PrebuiltWorkspacesImage)} alt="prebuilt workspaces" />}>
                        <p>Gitpod continuously builds your code and pull requests in the background to save your time.</p>
                    </Feature>
                    <Feature
                        title="VS Code"
                        button={<a href="https://www.theia-ide.org" target="_blank">
                            <button className='primary'>Visit theia-ide.org</button>
                        </a>}
                        visual={<img src={clean(LanguageToolingImage)} alt="language tooling" />} >
                        <p>Gitpod is based on Theia, the open-source, VS Code-powered IDE rearchitected for cloud-based development.<br/>
                        Get code intelligence and a full Linux shell in a browser tab.</p>
                    </Feature>
                    <Feature
                        title="Terminals"
                        button={<a href="https://docs.gitpod.io/40_Configuration.html" target="_blank">
                            <button className='primary'>Learn More</button>
                        </a>}
                        visual={<img src={clean(TerminalsImage)} alt="terminals" />}>
                        <p>Gitpod instantly starts a machine in the cloud, based on a Docker image supporting your project.
                        Get all your beloved tools instantly.</p>
                    </Feature>

                    <Feature
                        title="Code Reviews"
                        button={<button className='primary' onClick={this.openModal}>Play Video</button>}
                        visual={<img src={clean(InlineCommentsImage)} alt="inline comments" />}  >
                        <p>Opening a pull request in Gitpod makes it easy to review, navigate and validate the code.<br/>
                        Run it in a terminal, web preview, or virtual desktop &mdash; iterating on your app has never been so easy.</p>
                    </Feature>
                    <Feature
                        title="Linux in Your Browser"
                        button={<a href="https://docs.gitpod.io/42_Config_Docker.html" target="_blank">
                            <button className='primary' onClick={this.openModal}>Learn More</button>
                        </a>}
                        visual={<img src={clean(LinuxInYourBrowserImage)} alt="linux in your browser" />} >
                        <p>Instantly access a full terminal with all the tools you know and love, that reconnects on browser reload keeping the full history.</p>
                    </Feature>
                </Container>
                <div style={{ backgroundColor: colors.background2, zIndex: 2, boxShadow: "0px 0px 160px 0px rgba(5,5,5,0.57)", marginTop: 100 }}>
                    <Container>
                        <h3 id="supported-languages" style={{ textTransform: 'uppercase' }}>Supported programming languages</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <FeatureColumn>Syntax Coloring</FeatureColumn>
                                    <FeatureColumn>Code Completion</FeatureColumn>
                                    <FeatureColumn>Diagnostics</FeatureColumn>
                                    <FeatureColumn>Hovers</FeatureColumn>
                                    <FeatureColumn>Navigation</FeatureColumn>
                                    <FeatureColumn>Refactorings</FeatureColumn>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>JavaScript / TypeScript</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>Java</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>Python</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>Go</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>PHP</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>Ruby</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>Rust</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>C / C++</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>JSON</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>Dockerfile</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>CSS</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>HTML</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                                <tr style={{ borderTopColor: colors.background3 }}>
                                    <td style={{ paddingLeft: 0 }}>Clojure, Swift, C#, Groovy, Less, Lua, Objective-C, Perl and many more</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                            </tbody>
                        </table>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                            <p style={{ margin: "10px 0" }}>Missing your favorite programming language?</p>
                            <a href="https://github.com/gitpod-io/gitpod/issues" style={{ margin: 10 }} target="_blank">
                                <button className='primary'>Request Support</button>
                            </a>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div style={{ textAlign: 'center', margin: 150 }}>
                        <h3 style={{ marginBottom: '0.7rem' }}>Try It Out</h3>
                        <button className='primary'>Get Started Free</button>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}

interface FeatureProps {
    title: string;
    button?: JSX.Element;
    visual: JSX.Element;
}

class Feature extends React.Component<FeatureProps, {}> {

    slug(): string {
        return this.props.title.toLowerCase().replace(/[^a-z0.9]/g, '-');
    }

    render() {
        const p = this.props;
        return <div style={{ margin: 100 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                <div style={{ flexBasis: 0, flexGrow: 1 }}>
                    <h2 id={this.slug()} style={{ marginTop: 0, marginBottom: '2rem' }}>{p.title}</h2>
                    {p.children}
                </div>
                <div style={{ textAlign: 'right' }}>{p.button}</div>
            </div>
            <div style={{ flexBasis: 0, flexGrow: 1.2 }}>
                {p.visual}
            </div>
        </div>;
    }
}

