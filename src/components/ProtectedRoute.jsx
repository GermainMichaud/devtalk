import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { userAPI } from '../api'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await userAPI.get()
        setUser(data)
      } catch (error) {
        setUser(null)
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
