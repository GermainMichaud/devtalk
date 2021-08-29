import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.line ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))'};
  grid-gap: 0.7rem;
  padding: 1rem 0;
  width: 100%;
`
