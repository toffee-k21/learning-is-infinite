import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoContextProvider } from './utils/Context.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <TodoContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TodoContextProvider>
  </BrowserRouter>
)
