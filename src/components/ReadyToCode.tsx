import React from 'react'

import { Link } from 'gatsby'
import ReadyToCodeImg from '../resources/icon-automated-setup-default.svg'
import AutomatedSetupGraphicGitpod from '../resources/icon-automated-setup-gitpod.svg'
import AutomatedSetupGraphicOrdinary from '../resources/icon-automated-setup-no-gitpod.svg'

class ReadyToCode extends React.Component {
    state = {
        isGraphicGitpodRendered: false,
        isGraphicOridinaryRendered: false,
        isDefaultRendered: true
    }

    handleClick = (val: string) => {
        if (val === 'gitpod') {
            this.setState({
                isGraphicGitpodRendered: true,
                isGraphicOridinaryRendered: false,
                isDefaultRendered: false
            })
        }
        else if (val === 'ordinary') {
            this.setState({
                isGraphicGitpodRendered: false,
                isGraphicOridinaryRendered: true,
                isDefaultRendered: false
            })
        }
        else {
            this.setState({
                isGraphicGitpodRendered: false,
                isGraphicOridinaryRendered: false,
                isDefaultRendered: true
            })
        }
    }

    render() {
        const { isDefaultRendered, isGraphicGitpodRendered, isGraphicOridinaryRendered } = this.state

        const graphicGitpodStyles: React.CSSProperties = {
            display: isGraphicGitpodRendered ? 'block' : 'none'
        }

        const graphicOridnaryStyles: React.CSSProperties = {
            display: isGraphicOridinaryRendered ? 'block' : 'none'
        }

        const defaultStyles: React.CSSProperties = {
            display: isDefaultRendered ? 'block' : 'none'
        }

        return (
            <div className="why-gitpod__box why-gitpod__box--1">
                <div className="why-gitpod__text">
                    <h3>Are You Ready-to-Code?</h3>
                    <p>Gitpod is to your traditional local dev environment what Netflix is to a dusty shelf of DVDs.</p>
                    <p>Skip the friction and get beamed into a fully <strong>setup, compiled and tested dev environment</strong> with one click.</p>
                    <p>Read more about <Link to="/blog/continuous-dev-environment-in-devops/">Continuous Dev Environments.</Link></p>
                    <div className="buttons">
                        <button
                            className="toggle toggle--active"
                            onClick={() => this.handleClick('gitpod')}
                            onMouseEnter={() => this.handleClick('gitpod')}
                            onMouseLeave={() => this.handleClick('')}
                        >
                            With Gitpod
                        </button>
                        <button
                            className="toggle"
                            onClick={() => this.handleClick('ordinary')}
                            onMouseEnter={() => this.handleClick('ordinary')}
                            onMouseLeave={() => this.handleClick('')}
                        >
                            Ordinary Way
                        </button>
                    </div>
                </div>
                <div className="why-gitpod__img-container">
                    <div style={{ display: 'flex', width: '90%', height: '100%', justifyContent: 'center' }}>
                        <object tabIndex={-1}             
                            data={AutomatedSetupGraphicOrdinary}
                            style={{ ...graphicOridnaryStyles, width: '100%' }}
                            className="why-gitpod__img"
                        />
                        <object tabIndex={-1}
                            data={ReadyToCodeImg}
                            style={defaultStyles}
                            className="why-gitpod__img"
                        />
                        <object tabIndex={-1}
                            data={AutomatedSetupGraphicGitpod}
                            style={graphicGitpodStyles}
                            className="why-gitpod__img why-gitpod__img--3"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ReadyToCode
