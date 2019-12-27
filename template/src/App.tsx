import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MAPPED_ROUTES, RouteValue } from './routes';

import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="shell">
        <div className="shell__nav">{renderNavLinks()}</div>
        <div className="shell__body">
          <Switch>
            {MAPPED_ROUTES.map((route, index) => (
              <Route key={`route-${index}`} exact path={route.pattern} component={LazyComponent(route.component)} />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );

  function LazyComponent(Component: React.ComponentType) {
    return (props: any) => (
      <Suspense fallback="Loading ...">
        <Component {...props} />
      </Suspense>
    );
  }

  function renderNavLinks() {
    return <ul className="shell__nav-items">{MAPPED_ROUTES.map(renderNavLink)}</ul>;
  }

  function renderNavLink({ name, pattern }: RouteValue, index: number) {
    return (
      <li key={`nav-${index}`}>
        <Link to={pattern}>{name}</Link>
      </li>
    );
  }
};

export default App;
