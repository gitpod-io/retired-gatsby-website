import * as React from 'react'
import DownArrow from '../resources/down-arrow.svg';
import UpArrow from '../resources/up-arrow.svg';
import styled from '@emotion/styled';
import { colors } from '../styles/variables';

const Job = styled.div`
    position: relative;
    background: ${colors.background2};
    padding: 15px 35px;
    margin-bottom: 35px;
    p {
        margin-bottom: 40px;
    }
    h3 {
        margin: 20px 0;
    }
    h4 {
        margin-top: 50px;
        font-weight: bold;
    }
    li {
        position: relative;
        margin-bottom: 12px;
        list-style: none;
        &::before {
            content: '';
            position: absolute;
            top: 11px;
            left: -40px;
            display: block;
            background: #1aa6e4;
            height: 2px;
            width: 22px;
        }
    }
    svg {
        position: absolute;
        top: 30px;
        right: -205px;
        height: 40px;
    }

    img {
        height: 25px;
    }
`

interface ExpandableJobProps {
    isDisplayed?: boolean,
    jobTitle: string,
}

interface ExpandableJobState {
    isDisplayed: boolean
}

class ExpandableJob extends React.Component<ExpandableJobProps, ExpandableJobState> {
    state = {
        isDisplayed: this.props.isDisplayed || false
    }

    toggleIsDisplayed = () => {
        this.setState(() => ({ isDisplayed: !this.state.isDisplayed }))
    }

    render() {
        const { jobTitle, children } = this.props
        return (
            <Job>
                <h3 onClick={this.toggleIsDisplayed} style={{ cursor: 'pointer' }}><span>{jobTitle}</span> <span style={{ float: 'right', fontWeight: 600 }}>{this.state.isDisplayed && <img src={UpArrow} alt="Hide description Arrow" aria-label="Hide description button" /> || <img src={DownArrow} alt="Show description Arrow" aria-label="Show description button" />}</span></h3>
                <div style={this.state.isDisplayed ? {} : { display: 'none' }}>{children}</div>
                <div style={this.state.isDisplayed ? {} : { display: 'none' }}>
                    <h4>Interested? <a href={"mailto:contact@gitpod.io?subject=Application as " + jobTitle}>Send us a mail!</a></h4>
                </div>
            </Job>
        )
    }
}

export default ExpandableJob
