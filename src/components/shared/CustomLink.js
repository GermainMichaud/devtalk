import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CustomLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  position: relative;
  color: ${props => props.color || '#5380d5'};

  :after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: ${props => props.color || '#5380d5'};
    transition: all 0.2s ease-in;
  }

  :hover {
    :after {
      width: 100%;
      left: 0;
    }
  }

  ${props =>
    props.isactive
      ? `
  :after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: ${props => props.color || '#5380d5'};
    transition: all 0.2s ease-in;
  }`
      : ''}
`
