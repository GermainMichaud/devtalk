import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { userAPI } from '../api'
import userStore from '../store/userStore'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState({})
  const setUserStore = userStore(state => state.setUser)

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await userAPI.get()
        setUser(data)
        setUserStore(data)
      } catch (error) {
        setUser(null)
        setUserStore(null)
      }
    }
    getUser()
    return () => {}
  }, [])

  return (
    <Route
      {...rest}
      render={props =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default ProtectedRoute
