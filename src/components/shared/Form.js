import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 480px;
  padding: 2rem;
  background-color: ${props => props.bgColor || '#fff'};
  border-radius: 15px;
  box-shadow: 0 0 0.2rem rgba(33, 33, 33, 0.3);
`
