import { createBrowserRouter } from 'react-router-dom'
import App from './components/app/app'
import Gallery from './components/gallery/gallery'

export const router = createBrowserRouter([
  {
    path: '/Sundress_test/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Gallery />,
      },
    ],
  },
])
