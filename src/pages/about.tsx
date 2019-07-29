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

const Timeline = styled.div`
    margin: 50px 0 100px 0;

    @media(min-width: ${getEmSize(breakpoints.md)}em) {
        transform: translateX(-85px);
    }

    & > div {
        display: flex;

        div {
            padding: 35px 80px;
            font-size: 18px;
        }
    }

    .date {
        width: 30%;
        @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            width: 40%;
        }
        position: relative;
        border-right: 1px solid #aaa;

        &::after {
            position absolute;
            right: -3.6%;
            top: 40%;
            @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
                right: -7%;
                top: 45px;
            }
            transform: translateY(-50%);
            content: '';
            display: block;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: ${colors.brand};
        }

    }

    .description {
        width: 70%;
        @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            width: 60%;
        }
        font-weight: normal;
    }

    .last {
        position: relative;
        &::after {
            position: absolute;
            top: 2;
            left: 17%;
            content: '';
            transform: translateY(59%);
            display: block;
            height: 100%;
            width: 8%;
            background: ${colors.background1};

            @media(max-width: 850px) {
                transform: translateY(57%);
            }
        }
    }

    .since {
        color: #797979;

        .date {
            span {
                position: relative;
                color: transparent;

                &::before {
                    content: "Since";
                    position: absolute;
                    left: -22px;
                    display: inline-block;
                    color: #797979;
                }
            }
        }
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
                            Gitpod is developed by <a href="https://typefox.io" target="_blank" >TypeFox</a>, a team of developer tool specialists and longtime contributors to many open-source projects. We are a driving force behind the <a href="https://microsoft.github.io/language-server-protocol/" target="_blank" >language server protocol</a> and the initiators of <a href="https://www.theia-ide.org/" target="_blank" >Eclipse Theia</a>, the next generation IDE that powers Gitpod.
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
                            <img src={KeilHafen} className="hafen" />
                        </div>
                        <p className="para">
                            TypeFox was founded in 2016 by <a href="https://www.linkedin.com/in/efftinge/" target="_blank">Sven Efftinge</a>, <a href="https://www.linkedin.com/in/moritzeysholdt" target="_blank" >Moritz Eysholdt</a> and <a href="https://www.linkedin.com/in/dr-jan-k%C3%B6hnlein-7895038/" target="_blank">Dr. Jan Koehnlein</a>, with the mission to build smart tools for smart people. The headquarters are located in Kiel, Germany.
                        </p>
                    </div>
                    <br />
                    <div>
                        <div className="img-container">
                            <img src={Team} />
                        </div>
                        <p>
                            We're a small team with collectively over 50 years of experience in language design, IDEs and tool development. If you're interested in joining us, please have a look at the <Link to='/careers/'>careers page</Link>.
                        </p>
                    </div>
                </Description>
            </Container>
            <Hightlight>
                <h2 style={{ marginBottom: 40 }}>Some of Our Clients &amp; Partners</h2>
                <Partners>
                    <div className='img-container'>
                        <a href="https://arm.com" target="_blank"><img src={ARM} alt="ARM Logo" /></a>
                    </div>
                    <div className='img-container'>
                        <a href="https://bosch.com" target="_blank"><img src={Bosch} alt="Bosch Logo" style={{ transform: 'scale(2) translateY(-5px)' }} /></a>
                    </div>
                    <div className='img-container'>
                        <a href="https://eclipse.org" target="_blank"><img src={Eclipse} alt="Eclipse Logo" style={{ transform: 'scale(1.6)' }} /></a>
                    </div>
                    <div className='img-container'>
                        <a href="https://ericsson.com" target="_blank"><img src={Ericsson} alt="Ericsson Logo" style={{ transform: 'scale(2)' }} /></a>
                    </div>
                    <div className='img-container'>
                       <a href="https://cloud.google.com" target="_blank"> <img src={GoogleCloud} alt="Google Cloud Logo" style={{ transform: 'scale(2.2)' }} /></a>
                    </div>
                    <div className='img-container'>
                        <a href="https://redhat.com" target="_blank"><img src={Redhat} alt="Redhat Logo" style={{ transform: 'scale(1.5)' }} /></a>
                    </div>
                    <div className='img-container'>
                        <a href="https://sap.com" target="_blank"><img src={Sap} alt="SAP Logo" /></a>
                    </div>
                    <div className='img-container'>
                        <a href="https://ibm.com" target="_blank"><img src={IBM} alt="IBM Logo" style={{ transform: 'scale(1.4)' }} /></a>
                    </div>
                </Partners>
            </Hightlight>
            <Container>
                <h2 style={{ marginTop: 100 }}>Our Journey</h2>
                <Timeline>
                    <div>
                        <div className="date">04/2019</div>
                        <div className="description">Launch of Gitpod.io</div>
                    </div>
                    <div>
                        <div className="date">08/2018</div>
                        <div className="description">Announcement of Gitpod Beta, an online IDE for Github based on Theia</div>
                    </div>
                    <div>
                        <div className="date">03/2017</div>
                        <div className="description">Creation of Theia , an open-source IDE in cooperation with Ericsson</div>
                    </div>
                    <div>
                        <div className="date">Since 2016</div>
                        <div className="description">Development of Xtext, Sprotty &amp; various Language Servers for our international clients</div>
                    </div>
                    <div className="last">
                        <div className="date">01/2016</div>
                        <div className="description">Founding of TypeFox for tool development, language design and consulting</div>
                    </div>
                </Timeline>
            </Container>
        </Page>
    </IndexLayout >
)

export default AboutPage
