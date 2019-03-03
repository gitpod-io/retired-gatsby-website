import * as React from 'react'
import { colors } from '../styles/variables';

interface ExampleBoxProps {
    title: string;
    description?: string;
    link: string;
    image: string;
}

const ExampleBox: React.SFC<ExampleBoxProps> = (p) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 200,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.fontColor1,
        borderRadius: 5,
        padding: '20px 0px'
    }}>
        <h3>{p.title}</h3>
        <img style={{ height: 100, maxWidth: 80, marginBottom: 20 }} src={p.image} />
        <a href={p.link}>
            <button className='secondary'>
                Start workspace
            </button>
        </a>
    </div>
)

export default ExampleBox;
