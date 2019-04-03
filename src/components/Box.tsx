import * as React from 'react'
import { colors } from '../styles/variables';

interface BoxProps {
    title: string;
    style?: React.CSSProperties;
}

const Box: React.SFC<BoxProps> = (p) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.fontColor1,
        borderRadius: 2,
        padding: '20px 0px',
        boxShadow: ` 0 0 1px ${colors.brand}`,
        position: 'relative',
        ...p.style
    }}>
        <h3 style={{fontSize: 19, position: 'absolute', top: -35, backgroundColor: colors.background1, padding: '0 15px'}}>{p.title}</h3>
        {p.children}
    </div>
)

export default Box;
