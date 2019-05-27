import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import Card from '../components/Card';
import { getEmSize } from '../styles/mixins';
import { colors, breakpoints } from '../styles/variables';
import styled from '@emotion/styled';

const Cards = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    @media (min-width: ${getEmSize(breakpoints.md)}em) {
        flex-direction: row;
        justify-content: space-between;
    }
    & > div {
        @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
            &:not(:last-child) {
                margin-bottom: 40px;
            }
        }
    }
`

const PartnershipsPage: React.SFC<{}> = () => (
    <IndexLayout title="Gitpod - Careers" canonical="https://www.gitpod.io/partnerships">
        <div style={{ borderBottom: `2px solid ${colors.brand}` }}>
            <Page>
                <Container>
                    <Logos logos={[
                        [1050, 125, 40],
                    ]} />
                    <div style={{ marginTop: 60 }}>
                        <h4 style={{ color: colors.fontColor2 }}>Become a partner</h4>
                        <h1>Let's share experiences</h1>
                        <div style={{ height: 3, width: 95, backgroundColor: colors.brand, marginBottom: 30 }} />
                        <p>We're happy to combine expertise. Let's see what we can create together.</p>
                    </div>
                    <Cards>
                        <Card
                            title="Commercial courses"
                            description="Increase your productivity by integrating Gitpod into your ecosystem"
                            features={[
                                'Facilitate your onboarding process',
                                'Enable reproducible workspaces',
                                'Enhance collaboration'
                            ]}
                            link="#"
                            btnText="Contact"
                        />
                        <Card
                            title="Classroom"
                            description="Do you think your customers can profit from Gitpod?"
                            message="Let's get in contact, so we can discuss how we can work together"
                            link="#"
                            btnText="Contact"
                        />
                        <Card
                            title="Classroom"
                            description="For educators \n get access to your whole class and"
                            features={[
                                'Unlimited Workspaces',
                                'Public & private Repositories',
                                'Continous Support'
                            ]}
                            link="#"
                            btnText="Education Program"
                        />
                    </Cards>
                    <p style={{ marginTop: 140 }}>
                        If you'd like to use Gitpod for commercial courses, please have a look at our partner program. &nbsp;&nbsp;&nbsp;
                        <button className='primary'>
                                Partner program
                        </button>
                    </p>
                </Container>
            </Page>
        </div>
    </IndexLayout>
)

export default PartnershipsPage
