import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
  </>
)

// another way:  ReactDOM.render(<App />, document.getElementById("root"))