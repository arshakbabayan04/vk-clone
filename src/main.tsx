import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesList from './components/routes/RoutesList'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesList/>
  </StrictMode>,
)

