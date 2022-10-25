import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <HashRouter>
    <App />
  </HashRouter>,
)
