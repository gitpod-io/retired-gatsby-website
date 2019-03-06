import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import 'react-modal-video/css/modal-video.min.css'
import { colors } from '../styles/variables';
import tick from '../resources/Tick_pricing.svg';

export default class PricingPage extends React.Component<{}, {}> {

    render() {
        return <IndexLayout>
            <Page>
                <Container>
                    <Logos logos={[
                        [730, -20, 20],
                        [780, -40, 60],
                        [1020, 150, 40],
                    ]} />
                    <div style={{ marginTop: 60 }}>
                        <h4 style={{ color: colors.fontColor2, textTransform: 'uppercase' }}>Pricing</h4>
                        <h1>Free for Open-Source</h1>
                        <p>Fair for commercial use. Choose from the following pricing options</p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                            <PricingBox
                                title="Open Source"
                                description="Get started for free and stay free for serious open-source development."
                                image={openSourceIcon({
                                    stroke: colors.brand,
                                    fill: 'none',
                                    width: 100,
                                    strokeWidth: 0.5,
                                })}
                                price="Free"
                                featureOne="100 hours / month"
                                features={[
                                    'Unlimited Workspaces',
                                    'Public repositories'
                                ]}
                                link="https://gitpod.io/#" />
                            <PricingBox
                                title="Standard"
                                description="You are working on private and commercial software projects? Then this is your deal."
                                image={standardIcon({
                                    stroke: colors.brand,
                                    fill: 'none',
                                    width: 100,
                                    strokeWidth: 0.5,
                                })}
                                price="$19"
                                featureOne="100 hours / month"
                                features={[
                                    'Unlimited Workspaces',
                                    'Private & public repositories'
                                ]}
                                link="https://gitpod.io/#" />
                            <PricingBox
                                title="Professional"
                                description="For professional software engineers who want to be able to code wherever and whenever they want."
                                image={profIcon({
                                    stroke: colors.brand,
                                    fill: 'none',
                                    width: 100,
                                    strokeWidth: 0.5,
                                })}
                                price="$39"
                                featureOne="unlimited hours*"
                                features={[
                                    'Unlimited Workspaces',
                                    'Private & public repositories'
                                ]}
                                link="https://gitpod.io/#" />
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <h4>Special Discount for Students</h4>
                        <p>We understand that students deserve a better deal. To use a discount make sure your student e-mail is set as your primary E-Mail on GitHub.</p>
                        <button className="secondary">I'm a Student</button>
                    </div>
                </Container>
                <Container>
                    <div>
                        <h2 style={{color: colors.brand}}>Coming Soon</h2>
                        <p>We understand that students deserve a better deal. To use a discount make sure your student e-mail is set as your primary E-Mail on GitHub.</p>
                        <button className="secondary">I'm a Student</button>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}

interface PricingBoxProps {
    title: string;
    description: string;
    price: string;
    featureOne: string;
    features: string[];
    image?: JSX.Element;
    link: string;
}

class PricingBox extends React.Component<PricingBoxProps, {}> {

    render() {
        const p = this.props;
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 260,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: colors.brand,
            borderRadius: 2,
            padding: 40
        }}>
            <h2 style={{ fontSize: 18, position: 'absolute', top: 224, padding: '0 10px',backgroundColor: colors.background1 }}>{p.title}</h2>
            <p style={{ textAlign: 'center', fontSize: 12, height: 70 }}>
                {p.description}
            </p>
            {p.image ? p.image : null}
            <p style={{ textAlign: 'center', fontSize: 24, marginBottom: 0 }}>
                {p.price}
            </p>
            <p style={{ textAlign: 'center', fontSize: 12, marginBottom: 30 }}>
                {p.featureOne}
            </p>
            <ul style={{
                textAlign: 'left',
                marginLeft: -45,
                marginBottom: 30,
                fontSize: 12,
                listStyleImage: `url('${tick}')`
            }}>
                {p.features.map(f => (
                    <li className="checked">{f}</li>
                ))}
            </ul>
            <a href={p.link}>
                <button className='secondary'>
                    Get Started
            </button>
            </a>
        </div>;
    }
}

function openSourceIcon(style: React.CSSProperties) {
    return <svg viewBox="0 0 50 50" version="1.1" style={style || null}>
        <g transform="translate(-150.000000, -285.000000)">
            <path d="M189.057,307.415 L191.274,305.201 C195.094,301.386 193.206,296.232 190.128,292.923 C189.113,291.832 187.955,290.886 186.754,290.214 C185.191,289.337 180.29,288.054 177.085,291.174 L170.433,297.793 C168.637,299.58 173.168,301.309 175.462,299.049 L177.137,297.397 C179.613,295.152 182.724,299.651 186.601,296.592 L189.057,307.415 Z" />
            <path d="M163.164,306.367 L160.951,304.158 C153.575,296.793 166.349,284.148 173.836,291.435 L175.327,292.919 L163.164,306.367 Z M180.678,299.001 L189.243,307.98 C190.992,309.814 188.396,313.304 186.152,310.989 L182.137,306.85 L180.678,299.001 Z M178.638,309.639 L183.051,314.174 C184.818,315.988 188.396,313.305 186.152,310.989 L181.838,306.538 L178.638,309.639 Z" />
            <path d="M177.297,314.65 L179.501,316.872 C181.286,318.671 184.749,316.104 182.524,313.767 L177.297,314.65 Z" />
            <path d="M168.418,304.545 L168.654,304.781 C169.449,305.576 169.447,306.885 168.653,307.678 L165.603,310.731 C164.809,311.524 163.501,311.526 162.706,310.731 L162.47,310.495 C161.675,309.7 161.673,308.395 162.47,307.597 L165.52,304.545 C166.317,303.748 167.623,303.75 168.418,304.545 Z" />
            <path d="M173.55,305.942 L173.785,306.177 C174.582,306.974 174.58,308.281 173.785,309.075 L168.926,313.934 C168.131,314.729 166.823,314.729 166.028,313.934 L165.793,313.699 C164.998,312.904 164.996,311.598 165.793,310.801 L170.652,305.942 C171.449,305.145 172.753,305.145 173.55,305.942 Z" />
            <path d="M175.536,310.482 L175.771,310.718 C176.568,311.515 176.567,312.82 175.771,313.616 L172.44,316.947 C171.644,317.743 170.338,317.743 169.542,316.947 L169.307,316.711 C168.511,315.916 168.51,314.611 169.307,313.814 L172.638,310.482 C173.435,309.685 174.739,309.685 175.536,310.482 Z" />
            <path d="M177.678,314.814 L177.913,315.05 C178.709,315.846 178.707,317.154 177.913,317.948 L175.867,319.993 C175.074,320.787 173.764,320.788 172.97,319.993 L172.735,319.758 C171.94,318.963 171.937,317.657 172.734,316.86 L174.78,314.814 C175.577,314.017 176.881,314.018 177.678,314.814 Z" />
        </g>
    </svg>;
}

function standardIcon(style: React.CSSProperties) {
    return <svg viewBox="0 0 50 50" version="1.1" style={style || null}>
        <g transform="translate(-150.000000, -285.000000)">
            <path d="M189.057,307.415 L191.274,305.201 C195.094,301.386 193.206,296.232 190.128,292.923 C189.113,291.832 187.955,290.886 186.754,290.214 C185.191,289.337 180.29,288.054 177.085,291.174 L170.433,297.793 C168.637,299.58 173.168,301.309 175.462,299.049 L177.137,297.397 C179.613,295.152 182.724,299.651 186.601,296.592 L189.057,307.415 Z" />
            <path d="M163.164,306.367 L160.951,304.158 C153.575,296.793 166.349,284.148 173.836,291.435 L175.327,292.919 L163.164,306.367 Z M180.678,299.001 L189.243,307.98 C190.992,309.814 188.396,313.304 186.152,310.989 L182.137,306.85 L180.678,299.001 Z M178.638,309.639 L183.051,314.174 C184.818,315.988 188.396,313.305 186.152,310.989 L181.838,306.538 L178.638,309.639 Z" />
            <path d="M177.297,314.65 L179.501,316.872 C181.286,318.671 184.749,316.104 182.524,313.767 L177.297,314.65 Z" />
            <path d="M168.418,304.545 L168.654,304.781 C169.449,305.576 169.447,306.885 168.653,307.678 L165.603,310.731 C164.809,311.524 163.501,311.526 162.706,310.731 L162.47,310.495 C161.675,309.7 161.673,308.395 162.47,307.597 L165.52,304.545 C166.317,303.748 167.623,303.75 168.418,304.545 Z" />
            <path d="M173.55,305.942 L173.785,306.177 C174.582,306.974 174.58,308.281 173.785,309.075 L168.926,313.934 C168.131,314.729 166.823,314.729 166.028,313.934 L165.793,313.699 C164.998,312.904 164.996,311.598 165.793,310.801 L170.652,305.942 C171.449,305.145 172.753,305.145 173.55,305.942 Z" />
            <path d="M175.536,310.482 L175.771,310.718 C176.568,311.515 176.567,312.82 175.771,313.616 L172.44,316.947 C171.644,317.743 170.338,317.743 169.542,316.947 L169.307,316.711 C168.511,315.916 168.51,314.611 169.307,313.814 L172.638,310.482 C173.435,309.685 174.739,309.685 175.536,310.482 Z" />
            <path d="M177.678,314.814 L177.913,315.05 C178.709,315.846 178.707,317.154 177.913,317.948 L175.867,319.993 C175.074,320.787 173.764,320.788 172.97,319.993 L172.735,319.758 C171.94,318.963 171.937,317.657 172.734,316.86 L174.78,314.814 C175.577,314.017 176.881,314.018 177.678,314.814 Z" />
        </g>
    </svg>;
}

function profIcon(style: React.CSSProperties) {
    return <svg viewBox="0 0 50 50" version="1.1" style={style || null}>
        <g transform="translate(-150.000000, -285.000000)">
            <path d="M189.057,307.415 L191.274,305.201 C195.094,301.386 193.206,296.232 190.128,292.923 C189.113,291.832 187.955,290.886 186.754,290.214 C185.191,289.337 180.29,288.054 177.085,291.174 L170.433,297.793 C168.637,299.58 173.168,301.309 175.462,299.049 L177.137,297.397 C179.613,295.152 182.724,299.651 186.601,296.592 L189.057,307.415 Z" />
            <path d="M163.164,306.367 L160.951,304.158 C153.575,296.793 166.349,284.148 173.836,291.435 L175.327,292.919 L163.164,306.367 Z M180.678,299.001 L189.243,307.98 C190.992,309.814 188.396,313.304 186.152,310.989 L182.137,306.85 L180.678,299.001 Z M178.638,309.639 L183.051,314.174 C184.818,315.988 188.396,313.305 186.152,310.989 L181.838,306.538 L178.638,309.639 Z" />
            <path d="M177.297,314.65 L179.501,316.872 C181.286,318.671 184.749,316.104 182.524,313.767 L177.297,314.65 Z" />
            <path d="M168.418,304.545 L168.654,304.781 C169.449,305.576 169.447,306.885 168.653,307.678 L165.603,310.731 C164.809,311.524 163.501,311.526 162.706,310.731 L162.47,310.495 C161.675,309.7 161.673,308.395 162.47,307.597 L165.52,304.545 C166.317,303.748 167.623,303.75 168.418,304.545 Z" />
            <path d="M173.55,305.942 L173.785,306.177 C174.582,306.974 174.58,308.281 173.785,309.075 L168.926,313.934 C168.131,314.729 166.823,314.729 166.028,313.934 L165.793,313.699 C164.998,312.904 164.996,311.598 165.793,310.801 L170.652,305.942 C171.449,305.145 172.753,305.145 173.55,305.942 Z" />
            <path d="M175.536,310.482 L175.771,310.718 C176.568,311.515 176.567,312.82 175.771,313.616 L172.44,316.947 C171.644,317.743 170.338,317.743 169.542,316.947 L169.307,316.711 C168.511,315.916 168.51,314.611 169.307,313.814 L172.638,310.482 C173.435,309.685 174.739,309.685 175.536,310.482 Z" />
            <path d="M177.678,314.814 L177.913,315.05 C178.709,315.846 178.707,317.154 177.913,317.948 L175.867,319.993 C175.074,320.787 173.764,320.788 172.97,319.993 L172.735,319.758 C171.94,318.963 171.937,317.657 172.734,316.86 L174.78,314.814 C175.577,314.017 176.881,314.018 177.678,314.814 Z" />
        </g>
    </svg>;
}
