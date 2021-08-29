import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        )}
      />
    </Router>
  )
}

export default App
