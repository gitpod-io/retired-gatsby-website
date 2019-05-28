import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import GitGraph from '../components/GitGraph';
import { colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';
import * as icons from '../resources/icons';
import styled from '@emotion/styled';
import PricingBox from '../components/PricingBox';
import iconChair from '../resources/icon-chair.svg';

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

const HeadingMission = styled.h2`
    line-height: 42px;
    text-align: center;
    background-color: ${colors.background2};
    padding: 50px;
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1417.32 1984.25" fill="#1e1e1e" stroke="#1aa6e4" strokeWidth={6}>
                            <path className="st0" d="M297.79,815.06l102.53-148.29l54.19,37.47c7.28,2.3,15.7-0.75,20.45-8c9.11-13.91-8.28-26.77,8.59-51.17	c13.99-20.23,41.73-25.29,61.96-11.3c20.23,13.99,25.29,41.73,11.3,61.96c-15.38,22.25-33.24,13.21-42.67,27.6	c-3.46,5.29-3.7,14.98-1.9,20.83l53.66,37.1l-39.99,57.84c-4.85,0.13-10.07-0.77-13.47-3c-14.39-9.43-5.35-27.29-27.6-42.67	c-20.23-13.99-47.97-8.93-61.96,11.3c-13.99,20.24-8.93,47.97,11.3,61.96c24.4,16.87,37.25-0.52,51.16,8.58	c4.13,2.7,6.89,6.59,8.08,10.79l-42.02,60.77L303.13,844.32C293.61,837.74,291.21,824.57,297.79,815.06L297.79,815.06z"
                            />
                            <path className="st0" d="M934.94,1118.05l-98.04,151.29c-6.29,9.71-19.38,12.51-29.09,6.21l-151.29-98.04"
                            />
                            <path className="st0" d="M1032.99,966.76l-98.04,151.29l-55.29-35.83c-7.34-2.08-15.67,1.22-20.2,8.61c-8.68,14.18,9.08,26.51-7.05,51.4	c-13.38,20.64-40.95,26.53-61.6,13.15c-20.64-13.38-26.53-40.95-13.15-61.59c14.71-22.7,32.83-14.2,41.82-28.87	c3.3-5.39,3.25-15.08,1.27-20.87L766,1008.57l38.24-59.01c4.84-0.27,10.09,0.47,13.55,2.59c14.66,8.99,6.17,27.11,28.86,41.82	c20.64,13.38,48.22,7.49,61.59-13.15c13.38-20.65,7.49-48.22-13.15-61.6c-24.89-16.13-37.22,1.64-51.4-7.05	c-4.2-2.58-7.08-6.39-8.4-10.54l40.18-62l151.29,98.04C1036.49,943.96,1039.28,957.05,1032.99,966.76L1032.99,966.76z"
                            />
                            <path className="st0" d="M758.72,531.24l152.68,95.87l-35.04,55.8c-1.98,7.37,1.45,15.65,8.89,20.08c14.3,8.48,26.38-9.46,51.5,6.31	c20.83,13.08,27.12,40.57,14.03,61.4c-13.08,20.83-40.57,27.12-61.4,14.03c-22.91-14.38-14.67-32.62-29.46-41.41	c-5.43-3.23-15.13-3.04-20.89-0.97l-34.69,55.25l-59.56-37.39c-0.34-4.84,0.32-10.09,2.4-13.59c8.78-14.79,27.02-6.55,41.4-29.46	c13.08-20.83,6.8-48.32-14.03-61.4c-20.84-13.08-48.32-6.8-61.4,14.03c-15.77,25.12,2.17,37.19-6.31,51.49	c-2.52,4.24-6.28,7.17-10.42,8.55l-62.57-39.29l95.87-152.68C735.87,528.07,748.92,525.09,758.72,531.24L758.72,531.24z"
                            />
                            <path className="st0" d="M656.52,1177.51l35.26-56.18c2.14-7.32-1.1-15.68-8.44-20.27c-14.11-8.8-26.58,8.87-51.34-7.46	c-20.54-13.54-26.2-41.16-12.66-61.7c13.54-20.54,41.16-26.2,61.7-12.66c22.58,14.89,13.94,32.94,28.53,42.05	c5.36,3.35,15.06,3.37,20.86,1.44l35.57-54.16"
                            />
                        </svg>
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
            <HeadingMission>Our mission is to convey our passion for coding by eliminating barriers for teachers and students</HeadingMission>
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
