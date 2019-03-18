import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import StarGraph from '../components/StarGraph';
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

interface FeaturesPageState {
    isModalOpen: boolean;
}

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
                    <StarGraph left={-70} top={200} graphs={[
                        [
                            { x: 23, y: 335 },
                            { x: 93, y: 170 },
                        ], [
                            { x: 23, y: 335 },
                            { x: 198, y: 170 },
                        ], [
                            { x: 23, y: 335 },
                            { x: 344, y: 170 },
                        ], [
                            { x: 23, y: 335 },
                            { x: 530, y: 170 },
                        ], [
                            { x: 23, y: 335 },
                            { x: 713, y: 170 },
                        ], [
                            { x: 23, y: 335 },
                            { x: 914, y: 170 },
                        ], [
                            { x: 23, y: 335 },
                            { x: 50, y: 650 },
                            { x: 18, y: 960 },
                            { x: 46, y: 1275 },
                            { x: 18, y: 1586 },
                            { x: 529, y: 2707 }
                        ]
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5rem', marginBottom: '12rem' }}>
                        <a href="#docker" style={{color: colors.fontColor1, textDecoration: 'none'}}>Docker</a>
                        <a href="#vs-code" style={{color: colors.fontColor1, textDecoration: 'none'}}>VS Code</a>
                        <a href="#code-review-mode" style={{color: colors.fontColor1, textDecoration: 'none'}}>Code Review Mode</a>
                        <a href="#prebuilt-workspaces" style={{color: colors.fontColor1, textDecoration: 'none'}}>Prebuilt Workspaces</a>
                        <a href="#linux-in-your-browser" style={{color: colors.fontColor1, textDecoration: 'none'}}>Linux in Your Browser</a>
                        <a href="#supported-languages" style={{color: colors.fontColor1, textDecoration: 'none'}}>Supported Languages</a>
                    </div>
                    <Feature
                        title="Docker"
                        description="Gitpod instantly starts a machine in the cloud, based on a Docker image supporting your project.\nInstalling dependencies is boring&mdash;just use our standard development image or automate your own setup."
                        button={<a href="https://docs.gitpod.io/40_Configuration.html" target="_blank">
                            <button className='primary'>Learn More</button>
                        </a>}
                        visual={<img src={clean(TerminalsImage)} alt="terminals" />} />
                    <Feature
                        title="VS Code"
                        description="Gitpod is based on Theia, the open-source, VS Code-powered IDE rearchitected for cloud-based development.\nGet code intelligence and a full Linux shell in a browser tab."
                        button={<a href="https://www.theia-ide.org" target="_blank">
                            <button className='primary'>Visit theia-ide.org</button>
                        </a>}
                        visual={<img src={clean(LanguageToolingImage)} alt="language tooling" />} />
                    <Feature
                        title="Code Review Mode"
                        description="Opening a pull request in Gitpod makes it easy to review, navigate and validate the code.\nRun it in a terminal, web preview, or virtual desktop&mdash;iterating on your app has never been so easy."
                        button={<button className='primary' onClick={this.openModal}>Play Video</button>}
                        visual={<img src={clean(InlineCommentsImage)} alt="inline comments" />} />
                    <Feature
                        title="Prebuilt Workspaces"
                        description="Gitpod continuously builds your code and pull requests in the background to save your time."
                        button={<a href="https://medium.com/@csweichel/waiting-for-code-to-build-is-like-watching-paint-dry-a1c6b25fd601" target="_blank">
                            <button className='primary' onClick={this.openModal}>Learn More</button>
                        </a>}
                        visual={<img src={clean(PrebuiltWorkspacesImage)} alt="prebuilt workspaces" />} />
                    <Feature
                        title="Linux in Your Browser"
                        description="Instantly access a full terminal with all the tools you know and love, that reconnects on browser reload keeping the full history."
                        button={<a href="https://docs.gitpod.io/42_Config_Docker.html" target="_blank">
                            <button className='primary' onClick={this.openModal}>Learn More</button>
                        </a>}
                        visual={<img src={clean(LinuxInYourBrowserImage)} alt="linux in your browser" />} />
                </Container>
                <div style={{ backgroundColor: colors.background2, zIndex: 2, boxShadow: "0px 0px 160px 0px rgba(5,5,5,0.57)", marginTop: 100 }}>
                <Container>
                    <h3 id="supported-languages" style={{ textTransform: 'uppercase' }}>Supported programming languages</h3>
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td style={{textAlign: 'center'}}>Syntax Coloring</td>
                                <td style={{textAlign: 'center'}}>Code Completion</td>
                                <td style={{textAlign: 'center'}}>Diagnostics</td>
                                <td style={{textAlign: 'center'}}>Hovers</td>
                                <td style={{textAlign: 'center'}}>Navigation</td>
                                <td style={{textAlign: 'center'}}>Refactorings</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>JavaScript / TypeScript</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>Java</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>Python</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>Go</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>PHP</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>Ruby</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>Rust</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>C / C++</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>JSON</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>Dockerfile</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>CSS</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>HTML</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                            <tr style={{ borderTopColor: colors.background3 }}>
                                <td>Clojure, Swift, C#, Groovy, Less, Lua, Objective-C, Perl and many more</td>
                                <td style={{textAlign: 'center'}}>{icons.tick()}</td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                                <td style={{textAlign: 'center'}}></td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                        <p style={{margin: "10px 20px"}}>Missing your favorite programming language?</p>
                        <a href="https://github.com/gitpod-io/gitpod/issues" style={{margin: 10}} target="_blank">
                          <button className='primary'>Request Support</button>
                        </a>
                    </div>
                </Container>
                </div>
                <Container>
                <div style={{textAlign: 'center', margin: 150}}>
                    <h3 style={{marginBottom: '0.7rem'}}>Try It Out</h3>
                    <button className='primary'>Get Started Free</button>
                </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}

interface FeatureProps {
    title: string;
    description: string;
    button?: JSX.Element;
    visual: JSX.Element;
}

class Feature extends React.Component<FeatureProps, {}> {

    slug(): string {
        return this.props.title.toLowerCase().replace(/[^a-z0.9]/g, '-');
    }

    render() {
        const p = this.props;
        return <div style={{ display: 'flex', flexDirection: 'row', marginTop: 100 }}>
            <div style={{ flexBasis: 0, flexGrow: 1, paddingRight: 60 }}>
                <h3 id={this.slug()} style={{marginTop: 0, marginBottom: '2rem'}}>{p.title}</h3>
                {p.description.split(/\n|\\n|<br\s*\/?>/).map(line => <p>{line}</p>)}
                <div style={{textAlign: 'right'}}>{p.button}</div>
            </div>
            <div style={{ flexBasis: 0, flexGrow: 1.2 }}>
                {p.visual}
            </div>
        </div>;
    }
}

