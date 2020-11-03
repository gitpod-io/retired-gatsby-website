import styled from '@emotion/styled'

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1140px) {
    justify-content: space-around;
  }
`
