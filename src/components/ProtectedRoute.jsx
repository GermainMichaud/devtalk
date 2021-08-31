import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { userAPI } from '../api'
import userStore from '../store/userStore'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState({})
  const setUserStore = userStore(state => state.setUser)
  const userLoading = userStore(state => state.loading)
  const setUserLoading = userStore(state => state.setLoading)

  useEffect(() => {
    const getUser = async () => {
      setUserLoading(true)
      try {
        const { data } = await userAPI.get()
        setUser(data)
        setUserStore(data)
      } catch (error) {
        setUser(null)
        setUserStore(null)
      } finally {
        setUserLoading(false)
      }
    }
    getUser()
    return () => {}
  }, [])

  if (userLoading) return <h1>Loading...</h1>

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
