import React from 'react'

import IndexLayout from '../layouts'
import styled from '@emotion/styled'
import FeaturesSection from '../components/FeaturesSection'
import { FeatureItemProps } from '../components/FeatureItem'
import Line from '../resources/line.svg'
import People from '../resources/people.svg'
import Remote from '../resources/remote.svg'
import Mission from '../resources/mission.svg'
import Team from '../resources/team.jpg'
import { sizes } from '../styles/variables'
import ExpandableJob, { ExpandableJobProps } from '../components/careers/ExpandableJob'

const StyledCareersPage = styled.div`
    /* --------------------------------------------- */
    /* ----- Intro ----- */
    /* --------------------------------------------- */

    .intro {
        text-align: center;

        p {
            margin: 2rem 0;
        }
    }

    /* --------------------------------------------- */
    /* ----- Team ----- */
    /* --------------------------------------------- */

    .team {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(max-width: 1040px) {
            flex-direction: column;
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
        }

        .img-container {
            flex: 0 0 50%;
        }

        img {
            max-width: 100%;
            border-radius: 3px;

            @media(max-width: 1040px) {
                margin-bottom: 4rem;
            }
        }

        .text {
            flex: 0 0 40%;
            font-size: ${sizes.font.h4};
        }
    }

    /* --------------------------------------------- */
    /* ----- Jobs ----- */
    /* --------------------------------------------- */

    .jobs {
        h2 {
            text-align: center;
        }

        .pattern-bg {
            margin-top: 12rem;
        }
    }

    .no-fit {
        padding: 10rem 0;
        max-width: 880px;
        margin: 0 auto;
        text-align: center;
        font-size: ${sizes.font.h4};
    }
`

const features: FeatureItemProps[] = [
    {
        title: "Flat Hierarchy",
        text: "We don’t like hierarchies. At Gitpod everyone's opinion counts.",
        img: Line,
        alt: 'Line'
    },
    {
        title: "People Who Care",
        text: "We support each other and grow to new strengths together. On regular team events, we’re empowering this bond.",
        img: People,
        alt: 'People connected to each other'
    },
    {
        title: "Work Remotely",
        text: "You can work from anywhere and schedule your working hours the way it fits best for you.",
        img: Remote,
        alt: 'Wifi'
    },
    {
        title: "Worthy Mission",
        text: "Together we want to make developers' lives easier by providing the best software tools.",
        img: Mission,
        alt: 'Two Mountains: One with a flag on it.'
    },
]

const jobs: ExpandableJobProps[] = [
    {
        title: 'Senior DevOps Engineer',
        intro:
`If you were ever frustrated with a development tool you used and decided to build a better one yourself, this offer is for you.`,
        paragraphs:
`We at Gitpod specialize in building tools and we are looking to expand our team.
Our mission is to make software development fun and remove all tedious friction. We are a highly motivated team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. In this fashion, we present at international conferences and collaborate openly around the globe.`,
        lists: [
            {
                title: 'What you will do:',
                items: [
                    'Architect and develop observability measures for the product (metrics, logging, tracing, alerting).',
                    'Operate and automate production, staging and preview deployments including gradual feature rollouts.',
                    'Establish best practices for operating production SaaS systems.',
                    'Support clients with operating Gitpod Self-Hosted.']
            },
            {
                title: 'What you should bring:',
                items: [
                    'Ability to deploy and manage applications with Kubernetes and Helm Charts.',
                    'Experience in automating infrastructure using Terraform.',
                    'Ability to understand code written in Go, Node.js (ideally TypeScript) and bash.',
                    'Experience with industry standard observability tools (Prometheus, Jaeger / OpenTracing, etc.).',
                    'Experience with cloud providers (AWS, GCP, Azure).',
                ]
            },
            {
                title: 'We offer:',
                items: [
                    'Space for creativity - feel free to create the non-existing.',
                    'Collaborate with a highly motivated team with a strong technical background.',
                    'Flexible working hours.',
                    'Work remotely.'
                ]
            }
        ],
        textAfterTheLists: 'We celebrate diversity, and we are committed to an equal and inclusive employment environment.',
        rendered: true
    },
]

const Careers = () => (
    <IndexLayout
        canonical="/careers"
        title="Careers"
    >
        <StyledCareersPage>
            <div className="row">
                <section className="intro pattern">
                    <h1><strong>Join the Team</strong></h1>
                    <p>Gitpod is built on a culture of trust and empathy.</p>
                    <a href="#jobs" className="btn btn--cta">See Job Openings</a>
                </section>
            </div>

            <FeaturesSection features={features} />

            <section className="pattern-bg">
                <h2 className="visually-hidden">Gitpod Team</h2>
                <div className="row">
                    <div className="team">
                        <div className="img-container">
                            <img src={Team} alt="Gitpod Team" />
                        </div>
                        <div className="text">
                            <p>Come join a young tech-driven team, with the mission of making software development better for everyone, and strong values around openness, honesty, and effective pragmatism. </p>
                            <p>We're convinced that continuous learning and exploring is the way to build the best solutions sustainably.</p>
                            <p><strong>Help us shape Gitpod’s future from Berlin, Paris, or anywhere in the world!</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="jobs" id="jobs">
                <div className="row">
                    <h2>Current <strong>Job Openings</strong></h2>
                    <div>
                        {jobs.map((job, i) => <ExpandableJob key={i + job.title} {...job} />)}
                    </div>
                </div>

                <div className="pattern-bg">
                    <div className="row">
                        <div className="no-fit">
                            <p>If no current Job offer fits your qualifications, but you're totally in love with Gitpod and want to help us improving it, please send your application at <a href="mailto:career@gitpod.io">career@gitpod.io</a> anyway.</p>
                            <p><strong>We're curious to hear about you.</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        </StyledCareersPage>
    </IndexLayout>
)

export default Careers
