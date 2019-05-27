import * as React from 'react'

import Box from '../components/Box';
import * as icons from '../resources/icons';

interface CardProps {
    title: string;
    description: string;
    price?: string;
    featureOne?: string;
    features?: string[];
    image?: JSX.Element;
    link: string;
    btnText?: string;
    message?: string;
}

export default class Card extends React.Component<CardProps, {}> {

    render() {
        const p = this.props;
        return <Box title={this.props.title} style={{
            width: 260
        }}>
            <p style={{ textAlign: 'center', fontSize: 14, height: 70, paddingTop: 18 }}>
                {p.description.split(/\n|\\n|<br\s*\/?>/).map((line, i) => <p key={i} style={{ margin: 0 }}>{line}</p>)}
            </p>
            {p.image ? p.image : null}
            <p style={{ textAlign: 'center', fontSize: 24, margin: '20px 0 0 0' }}>
                {p.price}
            </p>
            <p style={{ textAlign: 'center', fontSize: 18, marginBottom: 30 }}>
                {p.featureOne}
            </p>
            {p.message && (
                <p style={{ textAlign: 'center', fontSize: 14 , paddingBottom: 30}}>
                    {p.message}
                </p>
            )}
            {
                p.features && (
                    <ul style={{
                        textAlign: 'left',
                        marginLeft: -45,
                        marginBottom: 30,
                        minHeight: 60,
                        fontSize: 13,
                        listStyle: 'none',
                    }}>
                        {p.features && p.features.map(f => (
                            <li style={{ display: 'flex' }}>{icons.tick({ width: 20, height: 20, padding: 4 })}{f}</li>
                        ))}
                    </ul>
                )
            }
            <a href={p.link}>
                <button className='primary'>
                    {p.btnText && p.btnText || "Get started"}
                </button>
            </a>
        </Box>;
    }
}
