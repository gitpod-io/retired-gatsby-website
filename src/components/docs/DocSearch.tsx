import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import MagGlass from '../../resources/mag-glass.svg'

const StyledInput = styled.input`
  padding: 7px 18px 7px 38px;
  margin: 10px 10px 30px 10px;
  border-radius: 100px;
  border: solid 1px ${colors.white};
  box-shadow: 1px 3px 8px ${colors.offWhite2};

  background: url(${MagGlass}) no-repeat 10px ${colors.white};
  background-size: 20px 20px;
  &:focus {
    border: solid 1px ${colors.link};
    outline: none;
  }
`

export const Docsearch = (props: { name: string }) => {
  useEffect(() => {
    ;(window as any).docsearch({
      apiKey: '1a880f3060e9ff81ff84087fc90878fc',
      indexName: 'gitpod',
      inputSelector: `#${props.name}`
    })
  }, [])

  return <StyledInput type="search" placeholder="Search the docs..." id={props.name} />
}
