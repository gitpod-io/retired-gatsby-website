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
            transform: 'scale(.95)',
            height:'61px',
            display: isGraphicGitpodRendered ? 'block' : 'none'
        }

        const graphicOridnaryStyles: React.CSSProperties = {
            transform: 'scale(.944)',
            display: isGraphicOridinaryRendered ? 'block' : 'none'
        }

        const defaultStyles: React.CSSProperties = {
            position: 'relative',
            display: isDefaultRendered ? 'block' : 'none',
            width: '95%'
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
                    <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
                        <object
                            data={AutomatedSetupGraphicGitpod}
                            style={graphicGitpodStyles}
                            className="why-gitpod__img"
                        />
                        <object
                            data={AutomatedSetupGraphicOrdinary}
                            style={{ ...graphicOridnaryStyles, width: '100%' }}
                            className="why-gitpod__img"
                        />
                        <object
                            data={ReadyToCodeImg}
                            style={defaultStyles}
                            className="why-gitpod__img"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ReadyToCode
