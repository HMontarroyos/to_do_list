import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App'
import { GlobalStyle } from '../src/styles/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
    <ToastContainer />
  </React.StrictMode>)
