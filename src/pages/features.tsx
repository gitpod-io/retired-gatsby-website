import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import GitGraph from '../components/GitGraph';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';
import TerminalsImage from '../resources/terminals.png';
import LanguageToolingImage from '../resources/language-tooling.png';
import InlineCommentsImage from '../resources/inline-comments.png';
import PrebuiltWorkspacesImage from '../resources/prebuilt-workspaces.png';
import CollaborationImage from '../resources/collaboration.png';
import * as icons from '../resources/icons';
import styled from '@emotion/styled';
import GatsbyLink from 'gatsby-link';

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

const SupportedLanguages = styled.section`
    background-color: ${colors.background2};
    z-index: 2;
    box-shadow: 0px 0px 160px 0px rgba(5,5,5,0.57);
    margin-top: 100px;
`

const MissingLanguage = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;

    p {
       margin: 10px 0;
    }
    a {
        margin: 10px;
        margin-left: 30px;
    }

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        flex-direction: column;
        a {
            margin: 0;
        }
    }
`

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
        return <IndexLayout title="Gitpod - Features" canonical="https://www.gitpod.io/features">
            <Page>
                <div style={{ zIndex: 99, position: "fixed", top: 50, left: 'auto' }}>
                    <ModalVideo channel='youtube' autoplay={true} isOpen={this.state.isModalOpen} videoId='D41zSHJthZI' onClose={() => this.setState({ isModalOpen: false })} />
                </div>
                <Container>
                    <GitGraph left={-900} top={40} graph={[
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
                        { down: 205 },
                        {},
                        { down: 600 },
                        {},
                        { down: 600 },
                        {},
                        { down: 600 },
                        {},
                        { down: 600 },
                        {},
                        { down: 1725 },
                        { right: 400 },
                        {}
                    ]} />
                    <Logos logos={[
                        [420, 70, 20],
                        [550, -20, 70],
                        [830, 70, 140],
                    ]} />
                    <div style={{ marginTop: 60 }}>
                        <h4 style={{ color: colors.fontColor2 }}>Features</h4>
                        <h1>A Complete Dev Environment In Your Browser</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                        </div>
                    </div>
                    <div className='flex hidden-md-down' style={{ justifyContent: 'space-between', marginTop: '5rem', marginBottom: '12rem', alignItems: 'flex-end' }}>
                        <HeaderLink href="#prebuilt-workspaces" >Prebuilt Workspaces</HeaderLink>
                        <HeaderLink href="#vs-code">VS Code</HeaderLink>
                        <HeaderLink href="#terminals">Terminals</HeaderLink>
                        <HeaderLink href="#code-reviews" >Code Reviews</HeaderLink>
                        <HeaderLink href="#collaboration" >Collaboration</HeaderLink>
                        <HeaderLink href="#supported-languages" >Supported Languages</HeaderLink>
                    </div>
                    <Feature
                        title="Prebuilt Workspaces"
                        button={<a href="https://github.com/marketplace/gitpod-io" target="_blank">
                            <button className='primary'>GitHub Marketplace</button>
                        </a>}
                        visual={<img src={PrebuiltWorkspacesImage} alt="prebuilt workspaces" />}>
                        <p>Gitpod continuously builds your code and pull requests in the background to save your time.</p>
                    </Feature>
                    <Feature
                        title="VS Code"
                        button={<a href="https://www.theia-ide.org" target="_blank">
                            <button className='primary'>Visit theia-ide.org</button>
                        </a>}
                        visual={<img src={LanguageToolingImage} alt="language tooling" />} >
                        <p>Gitpod is based on <a href="https://www.theia-ide.org" target="_blank">Theia</a>, the open-source VS Code-powered IDE optimized for developing in the cloud.
                            Get code intelligence and a Linux shell in a browser tab.</p>
                    </Feature>
                    <Feature
                        title="Terminals"
                        button={<GatsbyLink to="/docs/42_Config_Docker/">
                            <button className='primary'>Read docs</button>
                        </GatsbyLink>}
                        visual={<img src={TerminalsImage} alt="terminals" />}>
                        <p>Gitpod instantly starts a machine in the cloud based on a Docker image supporting your project.
                        All required tools are readily installed and configured.</p>
                    </Feature>

                    <Feature
                        title="Code Reviews"
                        button={<button className='primary' onClick={this.openModal}>Play video</button>}
                        visual={<img src={InlineCommentsImage} alt="inline comments" />}  >
                        <p>Open pull requests in Gitpod to run, navigate, and review the code from within the IDE.<br />
                            Reply to comments and publish code reviews without switching back to GitHub.</p>
                    </Feature>
                    <Feature
                        title="Collaboration"
                        visual={<img src={CollaborationImage} alt="collaboration" />} >
                        <div>
                            <p>Gitpod has two different collaboration modes:</p>
                            <ul className='tick-list'>
                                <li><GatsbyLink to="/docs/33_Sharing_and_Collaboration#sharing-running-workspaces">Share a live session</GatsbyLink> with your remote co-worker and hunt down bugs together.</li>
                                <li><GatsbyLink to="/blog/workspace-snapshots/">Create a snapshot</GatsbyLink> of your work and share it with the world.</li>
                            </ul>
                        </div>
                    </Feature>
                </Container>
                <SupportedLanguages>
                    <a id="supported-languages" style={{position: 'relative', top: 100}}/>
                    <Container>
                        <h2>Supported Programming Languages</h2>
                        <p>Gitpod comes pre-configured with support for many programming languages. Very soon you can even install VS Code extensions.</p>
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
                        <MissingLanguage>
                            <p>Missing your favorite programming language?</p>
                            <a href="https://github.com/gitpod-io/gitpod/issues/new?template=feature_request.md" target="_blank">
                                <button className='primary'>Request Support</button>
                            </a>
                        </MissingLanguage>
                    </Container>
                </SupportedLanguages>
                <Container>
                    <div style={{ textAlign: 'center', marginTop: 150, marginBottom: 150 }}>
                        <h3 style={{ marginBottom: '0.7rem' }}>Try It Out</h3>
                        <a href="https://gitpod.io/api/login">
                            <button className='primary'>Get Started Free</button>
                        </a>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}

const FeatureInner = styled.div`
    margin: 100px;
    height: 500px;
    h2 {
        margin-top: 0;
        margin-bottom: 2rem;
    }
    p {
        margin-bottom: 1.5rem;
    }

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        margin: 0;
        display: flex;
        height: 400px;
        flex-direction: column;

        & :not(:last-child) {
            margin-bottom: 60px;
        }

        h2, p {
            margin-bottom: 0.5rem;
        }
        p {
            margin-top: 0.2rem;
        }

        > :nth-of-type(2) {
            flex-direction: column;
            order: 1;

            button {
                width: 100%;
            }
        }
    }
`

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
        return <FeatureInner>
            <h2 id={this.slug()}>{p.title}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginTop: 6 }}>
                    {p.children}
                </div>
                <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>{p.button}</div>
            </div>
            <div style={{ flexBasis: 0, flexGrow: 1.2, marginTop: 10 }}>
                {p.visual}
            </div>
        </FeatureInner>;
    }
}

