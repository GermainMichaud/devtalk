import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  background: #f7f7f7;
  box-shadow: 2px 0 10px rgba(33, 33, 33, 0.3);
`

export const NavBrand = styled(Link)`
  display: inline-block;
`

export const Nav = styled.nav``

export const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`
export const NavLi = styled.li`
  list-style: none;
  margin: 0 5px;
`
