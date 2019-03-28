import * as React from 'react'

import greyLogo from '../resources/Logo_Gitpod_grey.svg';

interface LogosProps {
    logos: number[][];
}

const Logos: React.SFC<LogosProps> = ({ logos }) => (
    <>
        {logos.map(logoPlacement => {
            const [left, top, width] = logoPlacement;
            return <img key={''+left+top+width} src={greyLogo} className='hidden-md-down' style={{
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
