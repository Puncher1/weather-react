import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary"

import App from './App.tsx'
import './styles/main.css'


interface FallbackParamsType {
  error: any,
}

function Fallback({ error }: FallbackParamsType) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode >,
)
