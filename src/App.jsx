import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Navigation from './components/Navigation'
import Register from './components/Register'

function App() {
  return (
    <Router>
      <Navigation />
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" exact render={() => <h1>Talks</h1>} />
          </Switch>
        )}
      />
    </Router>
  )
}

export default App
