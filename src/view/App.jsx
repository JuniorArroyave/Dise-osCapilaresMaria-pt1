import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'

export const App = () => {
  return (
    
      <RouterProvider router={router} />
    
  )
}
