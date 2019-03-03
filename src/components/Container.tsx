import * as React from 'react'
import styled from '@emotion/styled'

import { widths, dimensions } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: ${getEmSize(widths.lg)}em;
  padding: ${dimensions.containerPadding}rem;
`

interface ContainerProps {
  className?: string
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
