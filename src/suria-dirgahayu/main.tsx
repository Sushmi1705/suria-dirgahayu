import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css' // Import global base styles
import './App.css'    // Import isolated Suria Dirgahayu styles
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
