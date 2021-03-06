import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.less'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    const AppWithAuth = require('./App').default
    render(AppWithAuth)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister()
