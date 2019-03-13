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
    top?: number;
    left?: number;
    width?: number;
    debug?: boolean;
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

function computeMousePosition(evt: MouseEvent) {
    const svg = document.querySelector('.stargraph');
    const CTM = svg.getScreenCTM();
    return {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
    };
}

let draggedElement: Element | undefined;

function startDrag(evt: MouseEvent) {
    if ((evt.target as Element).classList.contains('draggable')) {
        draggedElement = evt.target as Element;
    }
}

function drag(evt: MouseEvent) {
    if (draggedElement) {
        evt.preventDefault();
        const {x, y} = computeMousePosition(evt);
        draggedElement.setAttributeNS(null, 'transform', `translate(${x} ${y})`);
        draggedElement.firstElementChild.textContent = `(X:${x}, Y:${y})`;
    }
}

function endDrag() {
    draggedElement = undefined;
}

const StarGraph: React.SFC<StarGraphProps> = (p) => {
    const theWidth = p.width || 1200;
    const debug = p.debug || false;
    return <Container>
        <div style={{
            position: 'absolute',
            left: p.left || -50,
            top: p.top || -50,
            zIndex: debug ? 1000 : -1,
            width: theWidth+'px'
            }}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox={`0 0 ${theWidth} ${computeHeight(p.graphs)}`}
                 className="stargraph"
                 onMouseDown={debug ? startDrag : undefined}
                 onMouseMove={debug ? drag : undefined}
                 onMouseUp={debug ? endDrag : undefined}
                 onMouseLeave={debug ? endDrag : undefined}
                 >
                <g>
                    {
                        p.graphs.map(positions =>
                            <path
                                key={`${positions}`}
                                d={"M " + positions.map(({ x, y }) => '' + x + ',' + y).join(' ')}
                                fill="none"
                                stroke={colors.fontColor2} strokeWidth="1"
                                />
                        )
                    }
                    {
                        p.graphs.map(positions =>
                            positions.map(({ x, y, inactive }) =>
                                <circle
                                    key={`${x}_${y}`}
                                    r="4"
                                    transform={`translate(${x} ${y})`}
                                    fill={inactive ? colors.fontColor2 : colors.brand}
                                    className={debug ? 'draggable' : undefined}
                                    >
                                    {debug ? <title>(X:{x}, Y:{y})</title> : undefined}
                                </circle>
                            )
                        )
                    }
                </g>
            </svg>
        </div>
    </Container>;
}

export default StarGraph;
