import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
// import GitGraph from '../components/GitGraph';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'
import { colors } from '../styles/variables';
import styled from '@emotion/styled';
// import GatsbyLink from 'gatsby-link';

interface CareersPageState {
    isModalOpen: boolean;
}


const UnderlinedHeading = styled.h1`
    &::after {
        content: "";
        height: 2px;
        width: 100px;
        background: #0095e6;
    }
`

const FeatureList = styled.ul`
    list-style: none;
    text-align: center;
`

const TeamIcon = styled.div`
    svg {
        display: inline-block;
        margin: 0 auto;
    }

    @media(min-width: 768px) {

    }
`

export default class CareersPage extends React.Component<{}, CareersPageState> {

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
        return <IndexLayout title="Gitpod - Careers" canonical="https://www.gitpod.io/careers">
            <Page>
                <div style={{ zIndex: 99, position: "fixed", top: 50, left: 'auto' }}>
                    <ModalVideo channel='youtube' autoplay={true} isOpen={this.state.isModalOpen} videoId='D41zSHJthZI' onClose={() => this.setState({ isModalOpen: false })} />
                </div>
                <Container>
                    <Logos logos={[
                        [1050, 125, 40],
                    ]} />
                    <div style={{ marginTop: 60 }}>
                        <h4 style={{ color: colors.fontColor2 }}>We're Hiring</h4>
                        <UnderlinedHeading>Become Part of the Team</UnderlinedHeading>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                        </div>
                    </div>
                    <p>
                        Our Employees are the core of Gitpod and sharing its future.
                        <br />
                        We're convinced that great results are built on culture of trust, empathy and productivity. That's why working with us means
                    </p>
                    <FeatureList className='flex hidden-md-down' style={{ justifyContent: 'space-between', marginTop: '5rem', marginBottom: '12rem', alignItems: 'flex-end' }}>
                        <li>
                            Flat Hierarchy 
                            <br/>
                            &
                            <br/>
                            short-decision paths 
                        </li>
                        <li>
                            Flexible working hours 
                            <br/>
                            &
                            <br/>
                            Home Office 
                        </li>
                        <li>
                            Great team sprit
                            <br/>
                            &
                            <br/>
                            Regular Events
                        </li>
                        <li>
                            Organic fruit Baskets
                            <br/>
                            &
                            <br/>
                            Soft Drinks
                        </li>
                        <li>
                            Central Office
                            <br/>
                            &
                            <br/>
                            An view kiel harbor
                        </li>
                    </FeatureList>
                </Container>
                <Container>
                    <TeamIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="181.016" height="124.664"><g fill="#1e1e1e" stroke="#26a4dd" stroke-width="2"><g><path d="M75.275 110.249s-9.629-64.824 22.57-65.9 20.844 65.9 20.844 65.9"/><g transform="translate(80.335 12.757)"><ellipse cx="16.98" cy="16.432" rx="16.98" ry="16.432" stroke="none"/><ellipse cx="16.98" cy="16.432" rx="15.98" ry="15.432" fill="none"/></g></g><g><path d="M122.268 123.96s-12.242-82.425 28.7-83.789 26.506 83.789 26.506 83.789"/><g transform="translate(128.7)"><ellipse cx="21.589" cy="20.892" rx="21.589" ry="20.892" stroke="none"/><ellipse cx="21.589" cy="20.892" rx="20.589" ry="19.892" fill="none"/></g></g><g><path d="M105.752 124.496s-9.58-64.473 22.439-65.539 20.738 65.539 20.738 65.539"/><g transform="translate(110.781 27.535)"><ellipse cx="16.887" cy="16.342" rx="16.887" ry="16.342" stroke="none"/><ellipse cx="16.887" cy="16.342" rx="15.887" ry="15.342" fill="none"/></g></g><g><path d="M2.433 110.44s-9.631-64.828 22.568-65.9 20.844 65.9 20.844 65.9"/><g transform="translate(7.495 12.946)"><ellipse cx="16.98" cy="16.432" rx="16.98" ry="16.432" stroke="none"/><ellipse cx="16.98" cy="16.432" rx="15.98" ry="15.432" fill="none"/></g></g><g><path d="M38.698 123.96s-12.242-82.425 28.7-83.789 26.506 83.789 26.506 83.789"/><g transform="translate(45.13)"><ellipse cx="21.589" cy="20.892" rx="21.589" ry="20.892" stroke="none"/><ellipse cx="21.589" cy="20.892" rx="20.589" ry="19.892" fill="none"/></g></g></g></svg>
                    </TeamIcon>

                    <p>
                        We're a young and tech-driven team with a mission of creating developers tools for everyone. In our team we seek for an open an honest mindset, as well as an effective pragmatism. We lead, collaborate and contribute for open source projects and would love to share that with you. We're convinced that continous learning and exploring is the way to go for sustainably building the best solutions therefore we're always curious about new approaches.
                    </p>
                </Container>
            </Page>
        </IndexLayout>;
    }
}


