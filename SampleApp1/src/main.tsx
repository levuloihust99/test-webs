import { createRoot } from 'react-dom/client'
import { AppRoutes } from './AppRoutes.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './assets/sass/style.scss'

createRoot(document.getElementById('root')!).render(AppRoutes)
