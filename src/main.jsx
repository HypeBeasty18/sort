import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.css'
import { Provider } from 'react-redux'
import store from './store/store'
import Layout from './components/layout/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout/>
    </Provider>
  </React.StrictMode>,
)
