import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.8rem 0.9rem;
  background-color: ${props => (props.bgColor ? props.bgColor : 'blue')};
  color: ${props => (props.color ? props.color : 'white')};
  border-radius: 0.3rem;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: ${props =>
      props.bgColorHover
        ? props.bgColorHover
        : props.bgColor
        ? props.bgColor
        : 'darkblue'};
  }
`
