import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Hightlight from '../components/Highlight'
import { colors } from '../styles/variables'
import TypefoxLogo from '../resources/typefox.svg'
import styled from '@emotion/styled'
import { getEmSize } from '../styles/mixins'
import { breakpoints } from '../styles/variables'
import { Link } from 'gatsby'
import Team from '../resources/team.jpg'
import KeilHafen from '../resources/Kiel_hafen-compressor.svg'
import IBM from '../resources/ibm.svg'
import ARM from '../resources/2880px-Arm_logo_2017.svg'
import Bosch from '../resources/bosch.svg'
import Eclipse from '../resources/eclipse.svg'
import Ericsson from '../resources/ericsson.svg'
import GoogleCloud from '../resources/google-cloud.svg'
import Sap from '../resources/sap.svg'
import Redhat from '../resources/redhat.svg'
import GitGraph from '../components/GitGraph';

const About = styled.div`
    display: flex;
    margin: 100px 0 120px 0;

    @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
        flex-direction: column;

        & > div {
            width: 100% !important;
        }
    }

    .logo-container {
        display: flex;
        flex-direction: column;
        width: 25%;
        align-items: center;
        justify-content: center;
        transform: translateY(-20px);
        margin-right: 5%;

        @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            margin-bottom: 40px;
            margin-right: 0;
        }

        img {
            width: 115px;
            margin-bottom: 7px;
        }

        .logo-text {
            font-size: 37px;
            font-weight: 300;
            letter-spacing: 2px;
        }
    }

    .text-container {
        width: 75%;

        p + p {
            margin-top: 40px;
        }
    }
`

const Description = styled.div`
    display: flex;
    margin-bottom: 40px;

    @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
        flex-direction: column;
    }

    div {
        position: relative;
        width: 45%;

        @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            width: 80%;
            margin: 0 auto;
        }

        @media(min-width: ${getEmSize(breakpoints.md)}em) {
             &:not(:last-child) {
                margin-right: 15%;
            }
        }
    }

    .img-container {
        width: 300px;
        height: auto
        display: block;
        margin: 50px auto 70px;
        border: none;

        &--hafen {
            width: 195px;
            transform: translateY(-40px) translateX(-70px);
        }
    }

    .para {
        transform: translateY(-47px);
    }

    img {
        width: 300px;
        transform: translate(-14px, 16px);
    }

    .hafen {
        height: 250px;
        transform: translate(-16px, 20px);
    }
`

const Partners = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 50px;

    .img-container {
        text-align: center;
        width: 50%;
        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            width: 25%;
        }
    }

    img {
        height: 80px;
        width: 80px;
    }
`

const JourneyEntry = styled.div`
    display: flex;

    .date {
        width: 20%;
        height: 80px;
    }

    .description {
        width: 80%;
    }
`;

const AboutPage: React.SFC<{}> = () => (
    <IndexLayout title="Gitpod - About" canonical="https://www.gitpod.io/about/">
        <Page>
            <Container>
                <div style={{ marginTop: 120 }}>
                    <h4 style={{ color: colors.fontColor2 }}>About Us</h4>
                    <h1>Better Software Engineering</h1>
                </div>
                <About>
                    <div className='logo-container'>
                        <img src={TypefoxLogo} alt="Typefox Logo" />
                        <div className="logo-text">Type<span style={{ fontWeight: 'bolder' }}>Fox</span></div>
                    </div>
                    <div className="text-container">
                        <p>
                            Gitpod is developed by <a href="https://typefox.io" target="_blank" >TypeFox</a>, a team of developer tool specialists and longtime contributors to many open-source projects.
                            We are a driving force behind the <a href="https://microsoft.github.io/language-server-protocol/" target="_blank" rel="noopener">language server protocol</a> and the initiators of <a href="https://www.theia-ide.org/" target="_blank" >Eclipse Theia</a>, the next generation IDE that powers Gitpod.
                        </p>
                        <p>
                            With Gitpod, we set out to streamline how software is written today. We democratize software development by minimizing onboarding effort and context switches through instant, automated, ready-to-code development environments.
                        </p>
                    </div>
                </About>
            </Container>
            <Container>
                <h2>By Developers For Developers</h2>
                <Description>
                    <div>
                        <div className="img-container img-container--hafen" >
                            <img src={KeilHafen} className="hafen" alt="TypeFox office" />
                        </div>
                        <p className="para">
                            TypeFox was founded in 2016 by <a href="https://www.linkedin.com/in/efftinge/" target="_blank" rel="noopener">Sven Efftinge</a>, <a href="https://www.linkedin.com/in/moritzeysholdt" target="_blank" rel="noopener">Moritz Eysholdt</a> and <a href="https://www.linkedin.com/in/dr-jan-k%C3%B6hnlein-7895038/" target="_blank" rel="noopener">Dr. Jan Koehnlein</a>, with the mission to build smart tools for smart people. The headquarters are located in Kiel, Germany.
                        </p>
                    </div>
                    <br />
                    <div>
                        <div className="img-container">
                            <img src={Team} alt="TypeFox team" />
                        </div>
                        <p>
                            We're a small team with collectively over 50 years of experience in language design, IDEs and tool development. If you're interested in joining us, please have a look at the <Link to='/careers/'>careers page</Link>.
                        </p>
                    </div>
                </Description>
            </Container>
            <Hightlight>
                <Container>
                    <h2 style={{ marginBottom: 40 }}>Some of Our Clients &amp; Partners</h2>
                    <Partners>
                        <div className='img-container'>
                            <a href="https://arm.com" target="_blank" rel="noopener"><img src={ARM} alt="ARM Logo" /></a>
                        </div>
                        <div className='img-container'>
                            <a href="https://bosch.com" target="_blank" rel="noopener"><img src={Bosch} alt="Bosch Logo" style={{ transform: 'scale(2) translateY(-5px)' }} /></a>
                        </div>
                        <div className='img-container'>
                            <a href="https://eclipse.org" target="_blank" rel="noopener"><img src={Eclipse} alt="Eclipse Logo" style={{ transform: 'scale(1.6)' }} /></a>
                        </div>
                        <div className='img-container'>
                            <a href="https://ericsson.com" target="_blank" rel="noopener"><img src={Ericsson} alt="Ericsson Logo" style={{ transform: 'scale(2)' }} /></a>
                        </div>
                        <div className='img-container'>
                            <a href="https://cloud.google.com" target="_blank" rel="noopener"> <img src={GoogleCloud} alt="Google Cloud Logo" style={{ transform: 'scale(2.2)' }} /></a>
                        </div>
                        <div className='img-container'>
                            <a href="https://redhat.com" target="_blank" rel="noopener"><img src={Redhat} alt="Redhat Logo" style={{ transform: 'scale(1.5)' }} /></a>
                        </div>
                        <div className='img-container'>
                            <a href="https://sap.com" target="_blank" rel="noopener"><img src={Sap} alt="SAP Logo" /></a>
                        </div>
                        <div className='img-container'>
                            <a href="https://ibm.com" target="_blank" rel="noopener"><img src={IBM} alt="IBM Logo" style={{ transform: 'scale(1.4)' }} /></a>
                        </div>
                    </Partners>
                </Container>
            </Hightlight>
            <Container>
                <GitGraph left={-900} top={0} graph={[
                        { start: [0, 115] },
                        { right: 860 },
                        { right: 15 },
                        { down: 128 },
                        {},
                        { down: 25 },
                        { right: 120 },
                        { down: 35 },
                        {},
                        { down: 80 },
                        {},
                        { down: 80 },
                        {},
                        { down: 80 },
                        {},
                        { down: 200 },
                    ]} />
                <h2 style={{ marginTop: 100 }}>Our Journey</h2>
                <div>
                    <JourneyEntry>
                        <div className="date">04/2019</div>
                        <div className="description">Launch of Gitpod.io</div>
                    </JourneyEntry>
                    <JourneyEntry>
                        <div className="date">08/2018</div>
                        <div className="description">Announcement of Gitpod Beta, an online IDE for Github based on Theia</div>
                    </JourneyEntry>
                    <JourneyEntry>
                        <div className="date">03/2017</div>
                        <div className="description">Creation of Theia , an open-source IDE in cooperation with Ericsson</div>
                    </JourneyEntry>
                    <JourneyEntry>
                        <div className="date">Since 2016</div>
                        <div className="description">Development of Xtext, Sprotty &amp; various Language Servers for our international clients</div>
                    </JourneyEntry>
                    <JourneyEntry>
                        <div className="date">01/2016</div>
                        <div className="description">Founding of TypeFox for tool development, language design and consulting</div>
                    </JourneyEntry>
                </div>
            </Container>
        </Page>
    </IndexLayout >
)

export default AboutPage
