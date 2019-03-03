import * as React from 'react'
import Container from './Container';
import { colors } from '../styles/variables';

export interface Position {
    x: number;
    y: number;
    inactive?: boolean;
}

interface StarGraphProps {
    graphs: Position[][];
}

const StarGraph: React.SFC<StarGraphProps> = ({ graphs }) => (
    <Container>
    <div style={{ position: 'absolute', left: -40, top: -50, zIndex: -1, width: '1200px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 2600">
            <g>
                {
                    graphs.map(positions =>
                        <path d={"M " + positions.map(({x, y}) => '' + x + ',' + y).join(' ')} fill="none" stroke={colors.fontColor2} stroke-width="1" />
                    )
                }
                {
                    graphs.map(positions =>
                        positions.map(({x, y, inactive}) => <circle key={`${x}_${y}`} r="4" transform={`translate(${x} ${y})`} fill={inactive ? colors.fontColor2 : colors.brand} />)
                    )
                }
            </g>
        </svg>
    </div>
    </Container>
)

export default StarGraph;
