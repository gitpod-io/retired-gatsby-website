import * as React from 'react'
import styled from '@emotion/styled'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 2;
  min-height: 50vh;
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className} role="main">
    {children}
  </StyledLayoutMain>
)

export default LayoutMain
