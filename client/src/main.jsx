import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import { PomodoroProvider } from './Context'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <PomodoroProvider>
    <App />
    </PomodoroProvider>
  </React.StrictMode>,
)
