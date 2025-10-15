import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Abouts from './pages/about/index.tsx'
import Product from './pages/products/index.tsx'
import LayoutPage from './components/fragment/layout.tsx'
import Details from './pages/details/index.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  }
  ,
  {
    path: "/about",
    element : <Abouts/>
  },
  {
    path:"/products",
    element:<Product/>
  },
  {
    path:"/products/:id",
    element:<Details/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LayoutPage>
    <RouterProvider router={router}/>
    </LayoutPage>
  </StrictMode>,
)
