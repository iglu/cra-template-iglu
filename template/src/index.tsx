import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import * as serviceWorker from './serviceWorker'
import App from './App'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

if (process.env.GA_ID) {
  ReactGA.initialize(process.env.GA_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
