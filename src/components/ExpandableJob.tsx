import * as React from 'react'

import styled from '@emotion/styled';
import { colors } from '../styles/variables';


const Job = styled.div`
    position: relative;
    background: ${colors.background2};
    padding: 15px 35px;
    margin-bottom: 40px;
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
            top: 50%;
            left: -40px;
            display: block;
            background: #1aa6e4;
            height: 2px;
            width: 22px;
        }
    }
    svg {
        position: absolute;
        top: 25px;
        right: -210px;
        height: 40px;
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
                <h3>{jobTitle}</h3>
                <div onClick={this.toggleIsDisplayed}>
                    {this.state.isDisplayed && (<svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 59.414 59.414" style={{ enableBackground: 'new 0 0 59.414 59.414' }} xmlSpace="preserve" width="512px" height="512px"><g transform="matrix(-1, 1.22465e-16, -1.22465e-16, -1, 59.414, 59.414)"><link type="text/css" id="dark-mode" rel="stylesheet" /><polygon points="29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561  " data-original="#48A0DC" className="active-path" data-old_color="#6d6d6d" fill="#6d6d6d" /></g></svg>
                    ) || (<svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 59.414 59.414" style={{ enableBackground: 'new 0 0 59.414 59.414' }} xmlSpace="preserve" width="512px" height="512px"><link type="text/css" id="dark-mode" rel="stylesheet" /><polygon points="29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561  " data-original="#48A0DC" className="active-path" data-old_color="#6d6d6d" fill="#6d6d6d" /></svg>)}
                </div>
                {this.state.isDisplayed && (children)}
            </Job>
        )
    }
}

export default ExpandableJob
