import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/index.css"
import "./style/fonts.css"
import App from './App.tsx'
import './i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


