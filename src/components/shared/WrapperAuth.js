import styled from 'styled-components'

export const WrapperAuth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 1rem;

  @media screen and (min-width: 780px) {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    justify-content: center;
    padding: 1rem 2rem;
  }
`
