import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import * as serviceWorker from './serviceWorker'
import AppStore from './store/AppStore/AppStore'
import App from './App'

import './scss/main.scss'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
  // eslint-disable-next-line
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React, { trackAllPureComponents: true, onlyLogs: true, titleColor: 'green', diffNameColor: 'aqua' })
}

if (process.env.GA_ID) {
  ReactGA.initialize(process.env.GA_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}

const appStore = new AppStore()
const appStoreContext = React.createContext(appStore)
export const useAppStore = (): AppStore => React.useContext(appStoreContext)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
