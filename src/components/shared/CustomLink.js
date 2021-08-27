import styled from 'styled-components'

export const CustomLink = styled.a`
  display: inline-block;
  position: relative;
  color: #5380d5;

  :after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #5380d5;
    transition: all 0.2s ease-in;
  }

  :hover {
    :after {
      width: 100%;
      left: 0;
    }
  }
`
