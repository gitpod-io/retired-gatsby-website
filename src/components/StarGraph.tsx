import * as React from 'react'
import Container from './Container';
import { clean } from '../clean-url';

interface StarGraphProps {
  src: string
  left?: number,
  top?: number
}

const StarGraph: React.SFC<StarGraphProps> = ({ src , left, top}) => (
  <Container>
    <img
        src={clean(src)}
        style={{
            zIndex: -2,
            position: 'absolute',
            left: left || 0,
            top: top || 0,
            width: '50%'
        }} />
  </Container>
)

export default StarGraph;
