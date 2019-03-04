import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Logos from '../components/Logos';
import StarGraph from '../components/StarGraph';
import 'react-modal-video/css/modal-video.min.css'
import { clean } from '../clean-url';
import ExampleBox from '../components/ExampleBox';
import Python from '../resources/Logo_Python.svg';
import Java from '../resources/Logo_Java.svg';
import Go from '../resources/Logo_Go.svg';
import JS from '../resources/Logo_JS.svg';


export default class PricingPage extends React.Component<{}, {}> {

    render() {
        return <IndexLayout>
            <Page>
                <Logos logos={[
                    [80, 60, 25],
                    [280, 90, 70],
                    [480, 30, 120],
                    [950, 150, 160],
                ]} />
                <StarGraph graphs={[
                ]} />
                <Container>
                    <div style={{ height: 380, marginTop: 60 }}>
                        <h1>Pricing</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                            <ExampleBox title="Python" image={clean(Python)} link="https://gitpod.io/#"/>
                            <ExampleBox title="Java" image={clean(Java)} link="https://gitpod.io/#"/>
                            <ExampleBox title="JavaScript" image={clean(JS)} link="https://gitpod.io/#"/>
                            <ExampleBox title="Go" image={clean(Go)} link="https://gitpod.io/#"/>
                        </div>
                    </div>
                </Container>
            </Page>
        </IndexLayout>;
    }
}
