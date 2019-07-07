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
import KeilImage from '../resources/placeholder.jpg'
import IBM from '../resources/ibm.svg'

const About = styled.div`
    display: flex;
    margin: 80px 0 100px 0;

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
        width: 45%;

        @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
            width: 80%;
            margin: 0 auto;
        }

        &:not(:last-child) {
            margin-right: 10%;
        }
    }

    .img-container {
        width: 300px;
        height: 200px;
        display: block;
        margin: 50px auto 70px;
        border: 1px solid #eee;
    }

    img {
       transform: translate(-20px, 20px);
    }
`

const Timeline = styled.div`
    margin: 50px 0 100px 0;

    & > div {
        display: flex;

        div {
            padding: 50px;
            font-size: 18px;
        }
    }

    .date {
        position: relative;
        border-right: 1px solid #aaa;

        &::after {
            position absolute;
            right: -6%;
            top: 50%;
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
        font-weight: bold;

        & span {
            font-weight: normal;
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
            text-align: left;
            width: 25%;
        }
    }
`

const AboutPage: React.SFC<{}> = () => (
    <IndexLayout title="Gitpod - About" canonical="https://www.gitpod.io/about">
        <Page>
            <Container>
               <div style={{ marginTop: 100 }}>
                    <h4 style={{ color: colors.fontColor2 }}>About us</h4>
                    <h1>The Company behind Gitpod</h1>
                </div>
                <About>
                    <div className='logo-container'>
                        <img  src={TypefoxLogo} alt="Typefox Logo"/>
                        <div className="logo-text">Type<span style={{fontWeight: 'bolder'}}>Fox</span></div>
                    </div>
                    <div className="text-container">
                        <p>
                            Gitpod is developed Typefox, a team of developer tool specialists and longtime contributors to many open-source projects. We are a driving force behind the language server protocol and the initiators of Eclipse Theia, the next generation IDE that powers Gitpod.
                        </p>
                        <p>
                            Open-source projects like Kubernetes, Theia, Typescript, VS Code and thousands of other libraries are the gaint shoulders Gitpod is standing on. The typefox team is happy and truly thankful to live in a time where we can participate in such lively and creative communties with so many cool ideas and so much passion. Without those, developing Gitpod would not have been possible.
                        </p>
                    </div>
                </About>
            </Container>
            <Container>
                <h2>From developers for developers</h2>
                <Description>
                    <div>
                        <div className="img-container">
                            <img src={KeilImage}/>
                        </div>
                        <p>
                            Typefox was founded in 2016 by Sven Efftinge, Mortiz Eysholt and Dr. Jan Koehnlein. They founded Typefox with the mission of creating developer tools for eveyone. The headquarters is located in Kiel, Germany.
                        </p>
                    </div>
                    <div>
                        <div className="img-container">
                            <img src={KeilImage}/>
                        </div>
                        <p>
                            We're a team of less than 20 people which has over 10 years experience in language design, IDE and tool development. If you'd like to join the team, have a look at the <Link to='/careers'>careers</Link> page. We're always curious to hear from talented and commited tech lovers
                        </p>
                    </div>
                </Description>
            </Container>
            <Hightlight>
                Open-source let us take part in building the future. Let's do it together.
            </Hightlight>
            <Container>
                <h2>Our Journey</h2>
                <Timeline>
                    <div>
                        <div className="date">04/2019</div>
                        <div className="description">Launch of Gitpod.</div>
                    </div>
                    <div>
                        <div className="date">08/2018</div>
                        <div className="description">Announcement of beta Gitpod <span>| online IDE for Github based on Theia</span></div>
                    </div>
                    <div>
                        <div className="date">03/2017</div>
                        <div className="description">Creation of Theia <span>| open-source IDE in cooperation with Erricson</span></div>
                    </div>
                    <div>
                        <div className="date">01/2016</div>
                        <div className="description">Founding Typefox <span>| tool development, language design, consulting</span></div>
                    </div>
                </Timeline>
            </Container>
            <Container>
                <h2>Our Partners</h2>
                <Partners>
                    <div className='img-container'>
                        <img src={IBM} alt="IBM Logo"/>
                    </div>
                    <div className='img-container'>
                        <img src={IBM} alt="IBM Logo"/>
                    </div>
                    <div className='img-container'>
                        <img src={IBM} alt="IBM Logo"/>
                    </div>
                    <div className='img-container'>
                        <img src={IBM} alt="IBM Logo"/>
                    </div>
                    <div className='img-container'>
                        <img src={IBM} alt="IBM Logo"/>
                    </div>
                    <div className='img-container'>
                        <img src={IBM} alt="IBM Logo"/>
                    </div>
                    <div className='img-container'>
                        <img src={IBM} alt="IBM Logo"/>
                    </div>
                    <div className='img-container'>
                        <img src={IBM} alt="IBM Logo"/>
                    </div>
                </Partners>
            </Container>
        </Page>
    </IndexLayout >
)

export default AboutPage
