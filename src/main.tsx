import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StoreProvider } from './stores/index.tsx'
import { CommentProvider } from './stores/useComments.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <CommentProvider>
        <App />
      </CommentProvider>
    </StoreProvider>
  </React.StrictMode>,
)
