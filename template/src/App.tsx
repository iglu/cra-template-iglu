import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { MAPPED_ROUTES, RouteValue } from './routes'

import './App.scss'

const App: React.FC = () => {
  return (
    <Router>
      <div className="shell">
        <nav className="shell__nav" role="navigation">
          {renderNavLinks()}
        </nav>
        <main className="shell__body" role="main">
          <Switch>
            {MAPPED_ROUTES.map((route, index) => (
              <Route key={`route-${index}`} exact path={route.pattern} component={LazyComponent(route.component)} />
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  )

  function LazyComponent(Component: React.ComponentType): React.ComponentType {
    return function wrappedWithSuspense(props) {
      return (
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Component {...props} />
        </Suspense>
      )
    }
  }

  function renderNavLinks(): React.ReactNode {
    return <ul className="shell__nav-items">{MAPPED_ROUTES.map(renderNavLink)}</ul>
  }

  function renderNavLink({ name, pattern }: RouteValue, index: number): React.ReactNode {
    return (
      <li key={`nav-${index}`}>
        <Link to={pattern}>{name}</Link>
      </li>
    )
  }
}

export default App
