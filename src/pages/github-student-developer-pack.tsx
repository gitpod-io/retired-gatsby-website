import * as React from 'react'

import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { colors, breakpoints } from '../styles/variables'
import { UnderLine } from '../styles/typography'
import BackPack from '../resources/backpack.svg'
import { getEmSize } from '../styles/mixins'
import Briefcase from '../resources/briefcase.svg'
import Student from '../resources/student.svg'
import Tick from '../resources/tick.svg'
import Heart from '../resources/heart.svg'
import twitter from '../resources/twitter.svg'
import spectrum from '../resources/spectrum.svg'
import Envolpe from '../resources/envolpe.svg'

const BackPackImg = styled.image`
    img {
        position: absolute;
        top: 70px;
        right: 30px;
        height: 360px;
         @media(max-width: 800px) {
             top: 360px;
             height: 250px;
             right: 50%;
             transform: translateX(50%);
        }
    }
`

const Offers = styled.div`
    display: flex;
    margin-top: 80px;

      @media(max-width: ${getEmSize(breakpoints.md) - 1}em) {
          flex-direction: column;
      }

    & > div {
        position: relative;
        padding: 10px 40px 10px;
        max-width: 340px;
        border: 1px solid;
        text-align: center;
        margin: 2rem auto;

        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            flex: 3.33%;
            &:not(:last-child) {
                margin-right: 5rem;
            }
        }
    }

    span {
        display: block;
    }

    .caption {
        display: block;
        padding: 0 15px;
        font-size: 18px;
        background: ${colors.background1};
        transform: translateY(-22px);
    }

    .title {
        font-size: 28px;

        & > span {
            display: inline;
            margin-right: 8px;
            text-decoration: line-through;
            opacity: .5;
        }
    }

    img {
        width: 60px;
        height: 60px;
        margin: 20px 0 20px;
    }

    .usual-price {
        font-size: 14px;
        margin-bottom: 25px;
        opacity: .5;
    }

    .features {
        text-align: left;
        margin: 35px 20px;

        & span {
            position: relative;

            &:not(:last-child) {
                margin-bottom: 5px;
            }

            &::before {
                content: url('${Tick}');
                display: inline-block;
                position: absolute;
                top: 50%;
                left: -18%;
                transform: translateY(-50%);
                height: 18px !important;
                width: 18px !important;
            }
        }
    }
`

const Styled = styled.div`
    margin-top: 50px;

    &::after {
        content: '';
        display: block;
        clear: both;
    }

    p {
        float: left;
        text-align: center;
        border-top: 3px solid;
        padding-top: 20px;
        font-size: 18px;

        &:first-child {
            width: 29%;
        }

        &:last-child {
            transform: translateX(4%);
            width: 65%;
        }

        &:not(:last-child) {
            margin-right: 5%;
        }
    }
`
const Highlight = styled.h2`
    line-height: 42px;
    text-align: center;
    background-color: ${colors.background2};
    padding: 50px;
    box-shadow: 0 10px 20px rgba(0,0,0, .3);
`

const SectionInfo = styled.section`
    display: flex;

    @media(max-width: ${getEmSize(breakpoints.md - 1)}em) {
        flex-direction: column;
    }

    & > div {
        @media(min-width: ${getEmSize(breakpoints.md)}em) {
            flex: 5;

            &:not(:last-child) {
                margin-right: 100px;
            }
        }
    }
`

const SocialImg = styled.img`
  height: 30px;
  margin: 8px;
`

const CareersPage: React.SFC<{}> = () => (
    <IndexLayout title="Gitpod - Github Student Developer Pack" canonical="https://www.gitpod.io/github-student-developer-pack">
        <Page>
            <Container>
                <div style={{ marginTop: 60, position: 'relative' }}>
                    <h4 style={{ color: colors.fontColor2 }}>Github Student Developer Pack</h4>
                    <h1>Make your life easier with Gitpod</h1>
                    <UnderLine />
                    <p>With Gitpod you have no more tedious setups,<br /> you save hours of compiling code,<br /> and you can start coding from any device, immediately.</p>
                    <Link to="/#try">
                        <button className='primary'>Try now</button>
                    </Link>
                    <BackPackImg>
                        <img src={BackPack} alt="Github Backpack" />
                    </BackPackImg>
                </div>
                <h2 style={{ marginTop: 280 }}>Github Student Offer</h2>
                <p>With the <a href="https://education.github.com/pack" style={{ color: 'inherit', textDecoration: 'underline' }}>Github Student Developer Pack</a>, you get the same features as with our usual subscription but at a much better price. It's great to support students!</p>
                <Offers>
                    <div className="offer" style={{ opacity: .5 }}>
                        <span className="caption">Open-source</span>
                        <img src={Heart} alt="Handshake" />
                        <span className="title">Free</span>
                        <span className="subtitle">100 hours/month</span>
                        <span className="features">
                            <span>Unlimited&nbsp;workspaces</span><span><b>Public</b> &amp; <b>Private</b></span>
                        </span>
                        <a href="https://gitpod.io/subscription">
                            <button className='primary'>
                                Get started
                            </button>
                        </a>
                    </div>
                    <div className="offer">
                        <span className="caption">Students</span>
                        <img src={Student} alt="Student sitting on a desk." />
                        <span className="title">
                            <span>$9</span>
                            Free
                        </span>
                        <span className="subtitle">100 hours/month</span>
                        <span className="features">
                            <span>Unlimited&nbsp;workspaces</span><span><b>Public</b> &amp; <b>Private</b></span>
                        </span>
                        <a href="https://education.github.com/pack">
                            <button className='primary'>
                                Get Student Pack
                            </button>
                        </a>
                    </div>
                    <div className="offer">
                        <span className="caption">Students Unlimited</span>
                        <img src={Briefcase} alt="briefcase" />
                        <span className="title">
                            <span>$39</span>
                            $9
                        </span>
                        <span className="subtitle"><b>Unlimited hours</b>/month</span>
                        <span className="features">
                            <span>Unlimited&nbsp;workspaces</span><span><b>Public</b> &amp; <b>Private</b></span>
                        </span>
                        <a href=" https://education.github.com/pack">
                            <button className='primary'>
                                Get Student Pack
                            </button>
                        </a>
                    </div>
                </Offers>
                <Styled>
                    <p>Always Free for open-source</p>
                    <p style={{ borderColor: '#FDB02F' }}><a href="https://education.github.com/pack" style={{ color: 'inherit', textDecoration: 'underline' }}>Github Student Developer Pack</a></p>
                </Styled>
            </Container>
            <Highlight>
                Stop Wasting Time with tedious setups, learn amazing programming skills instead!
            </Highlight>
            <Container>
                <SectionInfo>
                    <div>
                        <h3>Getting started with Gitpod</h3>
                        <p>You can simply start coding in Gitpod by prefixing any Github URL with              <b>gitpod.io#</b></p>
                        <p>If you'd like to have a detailed description about Gitpod and it's IDE, Theia, please have a look at our documentation.</p>
                        <Link to="/docs/10_Getting_Started/">
                            <button className="primary">Gitpod Docs</button>
                        </Link>
                    </div>
                    <div>
                        <h3>Do you need help?</h3>
                        <p>If you have any quwstions, issues and feedback, please get in touch. We love to hear your feedback and help you out</p>
                        <div>
                            <a href="https://twitter.com/gitpod"><SocialImg alt="Twitter Icon" src={twitter} /></a>
                            <a href="https://spectrum.chat/gitpod"><SocialImg alt="Spectrum Icon" src={spectrum} /></a>
                            <a href="mailto:contact@gitpod.io?subject=Github%20Student%20Pack%20question"><SocialImg alt="GitHub Icon" src={Envolpe} style={{ fill: "#fff" }} /></a>
                        </div>
                    </div>
                </SectionInfo>
            </Container>
        </Page>
    </IndexLayout>
)

export default CareersPage
