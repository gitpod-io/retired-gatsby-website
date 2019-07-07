import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import GitGraph from '../components/GitGraph';
import Highlight from '../components/Highlight';
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';
import * as icons from '../resources/icons';
import styled from '@emotion/styled';
import PricingBox from '../components/PricingBox';
import iconChair from '../resources/icon-chair.svg';
import puzzleIcon from '../resources/puzzle.svg';

const Hero = styled.section`
    display: flex;
    margin-top: 60px;
    .text-box {
        width: 50%;
        @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            width: 100%;
        }
    }
    .svg-container {
        width: 50%;
        position: absolute;
        right: 0;
        margin-top: -160px;
        transform: rotate(12deg);

        @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            display: none;
        }
    }
    & svg {
        width: 500px;
    }
`

const SectionFeatures = styled.section`
    margin-top: 50px;
    .features {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        @media(max-width:${getEmSize(breakpoints.md - 1)}em) {
            flex-direction: column;
        }
    }
    .feature {
        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            flex: 3.33;
        }
        padding: 15px 25px 25px 25px;
    }
    h3 {
        margin-bottom: 60px;
    }
    h4 {
        text-align: center;
    }

`

const SectionPricing = styled.section`
    padding: 50px 0 0 0;
    .pricing-cards {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 50px;

        @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
            flex-direction: column;
            align-items: center;

            > :not(:last-child) {
                margin-bottom: 50px;
            }
        }
    }
`

const EducationPage: React.SFC<{}> = () => (
    <IndexLayout title="Gitpod - for Education" canonical="https://www.gitpod.io/education">
        <Page>
            <Container>
                <Logos logos={[
                    [-150, 270, 35],
                    [-110, 335, 55],
                ]} />
                <Hero>
                    <div className='text-box'>
                        <h4 style={{ color: colors.fontColor2 }}>Gitpod for Education</h4>
                        <h1 style={{ lineHeight: 1.5 }}>Let's Skip The Setup<br />And Teach Programming</h1>
                        <div style={{ height: 3, width: 95, backgroundColor: colors.brand, marginBottom: 30 }} />
                        <p>
                            Gitpod simplifies the onboarding process, makes coding accessible from any device and provides a productive learning environment.
                        </p>
                    </div>
                    <div className='svg-container'>
                       <img src={puzzleIcon} alt="Puzzle" />  
                    </div>             
                </Hero>
            </Container>
            <Container>
                <GitGraph left={-900} top={-1} graph={[
                    { start: [0, 150] },
                    { right: 860 },
                    { down: 225 },
                    { right: 207 },
                    {},
                    { right: 325 },
                    {},
                    { right: 328 },
                    {},
                    { right: 200 },
                    { up: 225 },
                    { right: 860 },
                    { start: [0, 150] },
                    { right: 860 },
                    { right: 230 },
                    {},
                    { right: 320 },
                    {},
                    { right: 330 },
                    {},
                    { right: 230 },
                    { right: 860 },
                ]} />
                <SectionFeatures>
                    <h2>How <a href="https://www.gitpod.io/">Gitpod.io</a> simplifies teaching and learning</h2>
                    <div className="features">
                        <div className="feature">
                            <h4>No setup</h4>
                            <p>Don't waste time on tedious setup. With Gitpod, developer environments are automated, reproducible and versioned.</p>
                        </div>
                        <div className="feature">
                            <h4>Works on every device</h4>
                            <p>With Gitpod coding gets accessible for everyone. Your students can contribute with a Chromebook or a tablet.</p>
                        </div>
                        <div className="feature">
                            <h4>Makes teaching easier</h4>
                            <p>Create customized lessons for your students with reproducible snapshots. Everyone can start working on new assignments within seconds.</p>
                        </div>
                    </div>
                    <div className="features">
                        <div className="feature">
                            <h4>Live tutoring</h4>
                            <p>Gitpod facilitates students-teacher interactions. Shareable environment snapshots and live tutoring make collaboration easy.</p>
                        </div>
                        <div className="feature">
                            <h4>Industry-standard workspaces</h4>
                            <p>Gitpod supports all major programming languages, and goes beyond playgrounds with modern developer tools and environments.</p>
                        </div>
                        <div className="feature">
                            <h4>____</h4>
                            <p>____ ____ ____ ____ ____ ____ ____ ____ ____ ____.</p>
                        </div>
                    </div>
                </SectionFeatures>
            </Container>
            <Highlight>Our mission is to convey our passion for coding by eliminating barriers for teachers and students</Highlight>
            <SectionPricing>
                <Container>
                    <h3>Pricing</h3>
                    <p>We love to support educational programs. That's why we have a special pricing for universities, colleges, schools and non-commercial courses. Students also have the opportunity to get an individual subscription for 75% off.</p>
                    <div className='pricing-cards'>
                        <PricingBox
                            title="Classroom"
                             description="For educators\nGet access for your whole class and assign seats to your students."
                            image={<img src={iconChair} style={{marginTop: 10}} />}
                            price="$9 per seat"
                            featureOne="Unlimited hours"
                            features={[
                                'Unlimited workspaces',
                                'Public & private repositories',
                                'Simplified team management'
                            ]}
                            link="https://gitpod.io/subscription"
                        />
                        <PricingBox
                            title="Student Unlimited"
                            description="Exclusive for Students\nThe Unlimited plan for $9 instead of $39"
                            image={icons.bag({ fill: 'none', stroke: colors.brand, width: 80 })}
                            price="$9"
                            featureOne="Unlimited hours"
                            features={[
                                'Unlimited workspaces',
                                'Public & private repositories',
                            ]}
                            link="https://gitpod.io/subscription"
                        />
                    </div>
                    <h3 style={{ marginTop: 120 }}>Let's teach software engineering, not just tweaking dependencies.</h3>
                    <p>If you're interested or have any question, we'd love to hear from you. &nbsp;&nbsp;&nbsp;
                             <a href='#'>
                            <button className='primary'>
                                Let's Talk
                                </button>
                        </a>
                    </p>
                </Container>
            </SectionPricing>
        </Page>
    </IndexLayout>
)

export default EducationPage
