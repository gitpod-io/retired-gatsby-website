import * as React from 'react'
import Container from './Container';

import greyLogo from '../resources/Logo_Gitpod_grey.svg';
import { clean } from '../clean-url';

interface LogosProps {
    logos: [number, number, number][];
}

const Logos: React.SFC<LogosProps> = ({ logos }) => (
    <Container>
        {logos.map(logoPlacement => {
            const [left, top, width] = logoPlacement;
            return <img key={''+left+top+width} src={clean(greyLogo)} style={{
                position: 'absolute',
                left,
                top,
                width
            }}
            />
        })}
    </Container>
)

export default Logos;
