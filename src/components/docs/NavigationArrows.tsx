import React from 'react'

import { Link } from 'gatsby'
import { MenuContext } from '../../docs/menu'
import styled from '@emotion/styled'
import Arrow from '../Arrow'

const StyledNavigationArrows = styled.div`
    width: 100%;
    text-align: center;
    padding: 10rem 0;
`

const NavigationArrows = ({ menuCtx }: { menuCtx: MenuContext }) => (
    <StyledNavigationArrows>
        {menuCtx.prev ?
            <Link
                to={menuCtx.prev.path}
                title={`Prev: ${menuCtx.prev.title}`}
            >
                <Arrow
                    styles={{transform: 'rotate(-180deg)'}}
                />
            </Link> : <div />}
        {menuCtx.next ?
            <Link
                to={menuCtx.next.path}
                title={`Next: ${menuCtx.next.title}`}
            >
                <Arrow
                    styles={{marginLeft: menuCtx.prev ? '6rem' : '0rem'}}
                />
            </Link> : <div />}
    </StyledNavigationArrows>
)

export default NavigationArrows
