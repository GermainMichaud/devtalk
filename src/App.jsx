import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './components/Register'
import TalksList from './components/TalksList'

function App() {
  return (
    <Router>
      <Navigation />
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/" exact component={TalksList} />
          </Switch>
        )}
      />
    </Router>
  )
}

export default App
