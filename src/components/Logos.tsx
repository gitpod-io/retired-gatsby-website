import * as React from 'react'

import greyLogo from '../resources/Logo_Gitpod_grey.svg';
import { clean } from '../clean-url';

interface LogosProps {
    logos: [number, number, number][];
}

const Logos: React.SFC<LogosProps> = ({ logos }) => (
    <>
        {logos.map(logoPlacement => {
            const [left, top, width] = logoPlacement;
            return <img key={''+left+top+width} src={clean(greyLogo)} className='hidden-md-down' style={{
                position: 'absolute',
                left,
                top,
                width
            }}
            />
        })}
    </>
)

export default Logos;
