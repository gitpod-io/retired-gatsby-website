import styled from '@emotion/styled';
import {colors} from './variables';

const UnderLine = styled.span`
    &::after {
        content: '';
        display: block;
        height: 3px;
        width: 95px;
        margin-bottom: 30px;
        background-color: ${colors.brand};
    }
`

export {UnderLine}