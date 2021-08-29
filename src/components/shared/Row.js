import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${props => props.gap || '0'};
`
