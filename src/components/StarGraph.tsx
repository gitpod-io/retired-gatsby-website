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
    width?: number;
}

function computeHeight(graphs: Position[][]) {
    let maxHeight = 0;
    for (const graph of graphs) {
        for (const position of graph) {
            if (position.y > maxHeight) {
                maxHeight = position.y;
            }
        }
    }
    return maxHeight + 10;
}

const StarGraph: React.SFC<StarGraphProps> = ({ graphs, width }) => {
    const theWidth = width || 1200;
    return <Container>
        <div style={{ position: 'absolute', left: -40, top: -50, zIndex: -1, width: theWidth+'px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${theWidth} ${computeHeight(graphs)}`}>
                <g>
                    {
                        graphs.map(positions =>
                            <path key={`${positions}`} d={"M " + positions.map(({ x, y }) => '' + x + ',' + y).join(' ')} fill="none" stroke={colors.fontColor2} strokeWidth="1" />
                        )
                    }
                    {
                        graphs.map(positions =>
                            positions.map(({ x, y, inactive }) => <circle key={`${x}_${y}`} r="4" transform={`translate(${x} ${y})`} fill={inactive ? colors.fontColor2 : colors.brand} />)
                        )
                    }
                </g>
            </svg>
        </div>
    </Container>;
}

export default StarGraph;
