import React from 'react'

import { Link } from 'gatsby'
import ReadyToCodeImg from '../resources/ready-to-code.png'
import AutomatedSetupGraphicGitpod from '../resources/automatedsetup-graphic-gitpod.png'
import AutomatedSetupGraphicOrdinary from '../resources/automatedsetup-graphic-ordinary.svg'

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
            transform: 'scale(.9)',
            bottom: '-11.7rem',
            left: '1rem',
            height: isGraphicGitpodRendered ? '100%' : 0,
            opacity: isGraphicGitpodRendered ? 1 : 0
        }

        const graphicOridnaryStyles: React.CSSProperties = {
            transform: 'scale(1.25)',
            bottom: '.5rem',
            left: '1rem',
            height: isGraphicOridinaryRendered ? '100%' : 0,
            opacity: isGraphicOridinaryRendered ? 1 : 0
        }

        const defaultStyles: React.CSSProperties = {
            bottom: '-4rem',
            opacity: isDefaultRendered ? 1 : 0,
            height: isDefaultRendered ? '100%': 0,
        }

        return (
            <div className="why-gitpod__box why-gitpod__box--1">
                <div className="why-gitpod__text">
                    <h3>Ready-to-Code Dev Environments</h3>
                    <p>Gitpod prepares ephemeral dev environments for teams, that come entirely prebuilt with your projects, dependencies and tools.</p>
                    <p>Read more about <Link to="/blog/continuous-dev-environment-in-devops/">Continuous Dev Environments.</Link></p>
                    <div>
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
                    <img
                        alt="Automated Setup"
                        src={AutomatedSetupGraphicGitpod}
                        style={graphicGitpodStyles}
                        className="why-gitpod__img"
                    />
                    <img
                        src={AutomatedSetupGraphicOrdinary}
                        style={{...graphicOridnaryStyles, width: '100%'}}
                    />
                    <img
                        alt="Automated Setup"
                        src={ReadyToCodeImg}
                        style={defaultStyles}
                        className="why-gitpod__img"
                    />
                </div>
            </div>
        )
    }
}

export default ReadyToCode
