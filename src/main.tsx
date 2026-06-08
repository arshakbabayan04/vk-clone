import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesList from './components/routes/RoutesList'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesList/>
  </StrictMode>,
)

// https://www.youtube.com/watch?v=OyE49CsSdiU&t=0s, 01:08:00

// esor arelenq avelacrel enq inputin onChange vorpeszi grelu jamanak text@ haytnvi state-um, ev onKeyDown-um avelacrel enq addPostHandler vorpeszi avelacnenq post@ posts state-um, vor@ Home componentum petq e lini, u avelacrel enq typer@.
