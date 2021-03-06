import React from 'react'
import { withRouter } from 'react-router-dom'
import Logo from '../Logo'
import userStore from '../store/userStore'
import { CustomLink, Nav, NavBar, NavBrand, NavLi, NavUl } from './shared'

const Navigation = ({ location }) => {
  const user = userStore(state => state.user)

  return (
    <NavBar>
      <NavBrand to="/">
        <Logo color="#333" />
      </NavBrand>
      <Nav>
        <NavUl>
          {user ? (
            <>
              <NavLi>
                <CustomLink
                  to="/"
                  isactive={location.pathname === '/'}
                  color="#d01e1e"
                >
                  Sujets
                </CustomLink>
              </NavLi>
              <NavLi>Bonjour, {user.pseudo}!</NavLi>
            </>
          ) : (
            <>
              <NavLi>
                <CustomLink
                  to="/login"
                  isactive={location.pathname === '/login'}
                  color="#d01e1e"
                >
                  Se connecter
                </CustomLink>
              </NavLi>
              <NavLi>
                <CustomLink
                  to="/register"
                  isactive={location.pathname === '/register'}
                  color="#d01e1e"
                >
                  S'enregistrer
                </CustomLink>
              </NavLi>
            </>
          )}
        </NavUl>
      </Nav>
    </NavBar>
  )
}

export default withRouter(Navigation)
