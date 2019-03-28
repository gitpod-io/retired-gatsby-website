import * as React from 'react'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import 'react-modal-video/css/modal-video.min.css'
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';
import * as icons from '../resources/icons';
import Box from '../components/Box';
import { Teaser } from '../components/Teaser';

const PricingOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        flex-direction: column;
        align-items: center;

        > :not(:last-child) {
            margin-bottom: 50px;
        }
    }
`

const StudentOffer = styled.div`
    display: flex;
    flex-direction: row;

    > :not(:first-child) {
        margin-left: 30px;
    }

    & svg {
        width: 100px;
    }

    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        flex-direction: column;
        align-items: center;

        > :not(:first-child) {
            text-align: center;
            margin-left: 0;
        }

        & svg {
            width: 80px;
        }

        & button {
            width: 100%;
        }
    }
`

const EnterpriseOffer = styled.div`
    @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
        table {
            font-size: 75%;

            td:first-child {
                padding-left: 10px;
            }
        }

        & h2 {
            text-align: center;
        }

        & button {
            width: 100%
        }
    }
`

export default class PricingPage extends React.Component<{}, {}> {

    render() {
        return <IndexLayout>
            <Page>
                <Container>
                    <Logos logos={[
                        [600, 50, 20],
                        [680, -10, 60],
                        [1020, 150, 40],
                    ]} />
                    <div style={{ marginTop: 60 }}>
                        <h4 style={{ color: colors.fontColor2 }}>Pricing</h4>
                        <h1>Free for Open Source</h1>
                        <p>Choose the subscription that fits you best. Find team subscriptions below.</p>
                        <PricingOptions>
                            <PricingBox
                                title="Open Source"
                                description="For open-source developers."
                                image={icons.heart({
                                    stroke: colors.brand,
                                    fill: 'none',
                                    width: 80
                                })}
                                price="Free"
                                featureOne="100 hours / month"
                                features={[
                                    'Unlimited Workspaces',
                                    'Public Repositories'
                                ]}
                                link="https://gitpod.io/#" />
                            <PricingBox
                                title="Standard"
                                description="For developers working on private software projects."
                                image={icons.lamp({
                                    stroke: colors.brand,
                                    fill: 'none',
                                    width: 80
                                })}
                                price="$19"
                                featureOne="100 hours / month"
                                features={[
                                    'Unlimited Workspaces',
                                    'Private & Public Repos'
                                ]}
                                link="https://gitpod.io/#" />
                            <PricingBox
                                title="Unlimited"
                                description="For professional developers."
                                image={icons.rocket({
                                    stroke: colors.brand,
                                    fill: 'none',
                                    width: 80
                                })}
                                price="$39"
                                featureOne="unlimited hours"
                                features={[
                                    'Unlimited Workspaces',
                                    'Private & Public Repos'
                                ]}
                                link="https://gitpod.io/#" />
                        </PricingOptions>
                    </div>
                </Container>
                <Teaser>
                    <Container>
                        <StudentOffer>
                            {icons.bag({ fill: 'none', stroke: colors.brand, margin: '0 30px' })}
                            <div>
                                <h3>Are You a Student?</h3>
                                <p>Students get the <strong>unlimited</strong> subscription for $10. </p>
                                <p>Make sure your student e-mail is set as your primary E-Mail on GitHub. And let us know if your educational institution is not correctly recognized.</p>
                                <button className="primary">I'm a Student</button>
                            </div>
                        </StudentOffer>
                    </Container>
                </Teaser>
                <Container>
                    <Box
                        title="Team Subscriptions"
                        style={{
                            paddingLeft: 30,
                            paddingRight: 30,
                            textAlign: 'center',
                        }}>
                        <h3>
                            Increase the productivity of an entire team!
                        </h3>
                        <div style={{ height: 3, width: 95, backgroundColor: colors.brand, marginBottom: 30 }} />
                        <p>
                            Manage the subscriptions of teams at once.
                        </p>
                        <a href="https://gitpod.io/team-subscriptions">
                            <button className="primary">Team Subscriptions</button>
                        </a>
                    </Box>
                </Container>

                <Container>
                    <EnterpriseOffer>
                        <a id="enterprise" />
                        <h2 style={{ rotate: '12', textShadow: '0 0 2px', fontWeight: 100, fontSize: '1.3em', color: colors.brand }}>Coming Soon!</h2>
                        <h2>Gitpod Enterprise</h2>
                        <p><strong>Gitpod Enterprise</strong> will be available shortly and allows to run and host Gitpod on your own servers. Self hosted installations can be configured to works with any <strong>GitHub Enterprise</strong> or <strong>GitLab</strong> instance.</p>

                        <table>
                            <thead>
                                <tr>
                                    <td style={{ width: 400 }}></td>
                                    <td style={{ textAlign: 'center' }}>Gitpod.io</td>
                                    <td style={{ textAlign: 'center' }}>Gitpod Enterprise</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Automated Setups</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr>
                                    <td>Prebuilt Workspaces</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr>
                                    <td>GitHub Integration</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr>
                                    <td>GitLab Integration</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr>
                                    <td>Custom Extensions*</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr>
                                    <td>Self-Hosting &amp; Private Cloud</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr>
                                    <td>White Labeling</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                                <tr>
                                    <td>Crazy Hardware (up to 96 CPUs, 360GB RAM)</td>
                                    <td style={{ textAlign: 'center' }}></td>
                                    <td style={{ textAlign: 'center' }}>{icons.tick()}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>
                            Interested?
                        </h3>
                        <p>
                            Please <a href="mailto:info@gitpod.io">contact us</a> and we will inform you as soon as <strong>Gitpod Enterprise</strong> is available.
                        </p>
                        <button className='primary'>
                            Let's Talk
                        </button>
                    </EnterpriseOffer>
                </Container>
            </Page>
        </IndexLayout>;
    }
}

interface PricingBoxProps {
    title: string;
    description: string;
    price: string;
    featureOne: string;
    features: string[];
    image?: JSX.Element;
    link: string;
}

class PricingBox extends React.Component<PricingBoxProps, {}> {

    render() {
        const p = this.props;
        return <Box title={this.props.title} style={{
            width: 260
        }}>
            <h2 style={{ fontSize: 18, position: 'absolute', top: -34, padding: '0 10px', backgroundColor: colors.background1 }}>{p.title}</h2>
            <p style={{ textAlign: 'center', fontSize: 14, height: 70, paddingTop: 18 }}>
                {p.description}
            </p>
            {p.image ? p.image : null}
            <p style={{ textAlign: 'center', fontSize: 24, margin: '20px 0 0 0' }}>
                {p.price}
            </p>
            <p style={{ textAlign: 'center', fontSize: 18, marginBottom: 30 }}>
                {p.featureOne}
            </p>
            <ul style={{
                textAlign: 'left',
                marginLeft: -45,
                marginBottom: 30,
                fontSize: 13,
                listStyle: 'none',
            }}>
                {p.features.map(f => (
                    <li style={{ display: 'flex' }}>{icons.tick({ width: 20, height: 20, padding: 4 })}{f}</li>
                ))}
            </ul>
            <a href={p.link}>
                <button className='primary'>
                    Get Started
            </button>
            </a>
        </Box>;
    }
}
