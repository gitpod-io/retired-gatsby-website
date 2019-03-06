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
        height: 280,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.fontColor1,
        borderRadius: 2,
        padding: '20px 0px'
    }}>
        <h3 style={{position: 'absolute', top: 140, backgroundColor: colors.background2, padding: '0 10px'}}>{p.title}</h3>
        <p style={{marginTop: 10}}>{p.description}</p>
        <img style={{ height: 100, maxWidth: 80, marginBottom: 20 }} src={p.image} />
        <a href={p.link}>
            <button className='secondary'>
                Start workspace
            </button>
        </a>
    </div>
)

export default ExampleBox;
