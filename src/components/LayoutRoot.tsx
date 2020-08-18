import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import base from '../styles/base'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(base)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export default LayoutRoot
