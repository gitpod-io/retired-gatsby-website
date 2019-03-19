import * as React from 'react'
import { colors } from '../styles/variables';

interface ExampleBoxProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

const ExampleBox: React.SFC<ExampleBoxProps> = (p) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        height: 310,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.brand,
        borderRadius: 2,
        padding: '20px 0px',
        boxShadow: ` 0 0 1px ${colors.brand}`,
        position: 'relative'
    }}>
        <h3 style={{position: 'absolute', top: -35, backgroundColor: colors.background1, padding: '0 15px'}}>{p.title}</h3>
        <p style={{marginTop: 10, maxWidth: '90%', textAlign: 'center'}}>{p.description}</p>
        <img style={{ height: 100, maxWidth: 80, flexGrow: 2 }} src={p.image} />
        <a href={p.link}>
            <button className='secondary'>
                Start Workspace
            </button>
        </a>
    </div>
)

export default ExampleBox;
