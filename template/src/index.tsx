import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

interface RouteValue {
  name: string
  pattern: string
  component: React.ComponentType
}

const ROUTES: RouteValue[] = [
  {
    name: 'Home',
    pattern: '/',
    component: HomeView,
  },
  {
    name: 'Contact',
    pattern: '/contact',
    component: ContactView,
  },
]

const App: React.FC = () => {
  return (
    <Router>
      {renderNavLinks()}
      <Switch>
        {ROUTES.map((route, index) => (
          <Route key={`route-${index}`} exact path={route.pattern} component={route.component} />
        ))}
      </Switch>
    </Router>
  )

  function renderNavLinks() {
    return <ul>{ROUTES.map(renderNavLink)}</ul>
  }

  function renderNavLink({ name, pattern }: RouteValue, index: number) {
    return (
      <li key={`nav-${index}`}>
        <Link to={pattern}>{name}</Link>
      </li>
    )
  }
}

function HomeView() {
  return <div>Home</div>
}

function ContactView() {
  return <div>Contact</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
