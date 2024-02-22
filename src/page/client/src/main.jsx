import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import { AppErrorProvider } from './Context/AppErrors'
import { ModalProvider } from './Context/Modal'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AppErrorProvider>
      <ModalProvider>
    <App />
      </ModalProvider>
    </AppErrorProvider>
  </React.StrictMode>,
)
