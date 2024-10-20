import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Imagem from './components/Imagem'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Imagem/>
  </StrictMode>,
)
