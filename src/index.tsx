import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/app.scss'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {store} from './redux/store'
import {Provider} from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);
