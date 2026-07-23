import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import RouterApp from './routerApp.tsx'
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <RouterApp /> */}
    <App />
  </StrictMode>,
)
