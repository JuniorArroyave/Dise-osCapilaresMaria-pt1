import { createHashRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout.jsx'
import { Home } from '../pages/Home/home.jsx'
import { Services } from '../pages/Services/Services.jsx'
import { Products } from '../pages/Products/Products.jsx'
import { CreateTask } from '../pages/Createtask/createtaskform.jsx'
import { ErrorPage } from '../pages/Errorpage.jsx'


export const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'Services',
        Component: Services
      },
      {
        path: 'Products',
        Component: Products
      },
      {    
        path: 'createtask',
        Component: CreateTask
      }
    ],
    ErrorBoundary: ErrorPage
  }
])
