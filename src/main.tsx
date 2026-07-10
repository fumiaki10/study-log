import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterApp from './routerApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
