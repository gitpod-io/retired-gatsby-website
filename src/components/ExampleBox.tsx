import * as React from 'react'
import Box from './Box';

interface ExampleBoxProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

const ExampleBox: React.SFC<ExampleBoxProps> = (p) => (
    <Box title={p.title} style={{
        width: 200,
        height: 310
    }}>
        <p style={{marginTop: 10, maxWidth: '90%', textAlign: 'center'}}>{p.description}</p>
        <img alt={`${p.title} Logo`} style={{ height: 100, maxWidth: 80, flexGrow: 2 }} src={p.image} />
        <a href={p.link} target='_blank'>
            <button className='primary'>
                Start Workspace
            </button>
        </a>
    </Box>
)

export default ExampleBox;
