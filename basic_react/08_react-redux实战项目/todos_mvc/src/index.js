import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { createRoot } from 'react-dom/client'
import store from './store'
import { Provider } from 'react-redux'

// ReactDom.render(<App></App>, document.getElementById('root'))
ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
