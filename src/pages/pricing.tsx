import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import StarGraph from '../components/StarGraph';
import 'react-modal-video/css/modal-video.min.css'
import { clean } from '../clean-url';
import Python from '../resources/Logo_Python.svg';
import Java from '../resources/Logo_Java.svg';
import JS from '../resources/Logo_JS.svg';
import { colors } from '../styles/variables';
import tick from '../resources/Tick_pricing.svg';


export default class PricingPage extends React.Component<{}, {}> {

    render() {
        return <IndexLayout>
            <Page>
                <Logos logos={[
                    [730, -20, 20],
                    [780, -40, 60],
                    [1020, 150, 40],
                ]} />
                <StarGraph graphs={[
                ]} />
                <Container>
                    <div style={{ marginTop: 60 }}>
                        <h4 style={{color: colors.fontColor2}}>Pricing</h4>
                        <h1>Which Pricing Options are Available?</h1>
                        <p>Choose from three different pricing options</p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                            <PricingBox
                                title="Open Source"
                                description="Get started for free and stay free for serious open-source development."
                                image={clean(Python)}
                                price="Free"
                                featureOne="100 hours / month"
                                features={[
                                    'Unlimited Workspaces',
                                    'Public repositories'
                                ]}
                                link="https://gitpod.io/#"/>
                            <PricingBox
                                title="Standard"
                                description="You are working on private and commercial software projects? Then this is your deal."
                                image={clean(Java)}
                                price="$19"
                                featureOne="100 hours / month"
                                features={[
                                    'Unlimited Workspaces',
                                    'Private & public repositories'
                                ]}
                                link="https://gitpod.io/#"/>
                            <PricingBox
                                title="Professional"
                                description="For professional software engineers who want to be able to code wherever and whenever they want."
                                image={clean(JS)}
                                price="$39"
                                featureOne="unlimited hours*"
                                features={[
                                    'Unlimited Workspaces',
                                    'Private & public repositories'
                                ]}
                                link="https://gitpod.io/#"/>
                        </div>
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
    image: string;
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
        borderRadius: 3,
        padding: 40
    }}>
        <p style={{color: colors.brand}}>{p.title}</p>
        <p style={{ textAlign: 'center', fontSize: 12, height: 70}}>
            {p.description}
        </p>
        <p style={{ textAlign: 'center', fontSize: 24, marginBottom: 0}}>
            {p.price}
        </p>
        <p style={{ textAlign: 'center', fontSize: 12, marginBottom: 30}}>
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

