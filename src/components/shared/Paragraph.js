import styled from 'styled-components'

export const Paragraph = styled.p`
  max-width: ${props => props.maxWidth || '100%'};
  padding: ${props => props.pv + ' ' + props.ph || '1rem'};
  font-size: 1.2rem;
  align-items: center;
  text-align: ${props => (props.textLeft ? 'left' : 'center')};

  @media screen and (min-width: 780px) {
    padding: ${props => props.pv + ' ' + props.ph || '1rem 1.8rem'};
    font-size: 1.6rem;
  }
`
