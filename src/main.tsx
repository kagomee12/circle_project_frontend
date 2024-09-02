import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StoreProvider } from './stores/index.tsx'
import { CommentProvider } from './stores/useComments.tsx';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <CommentProvider>
        <App />
        <ToastContainer />
      </CommentProvider>
    </StoreProvider>
  </React.StrictMode>,
)
