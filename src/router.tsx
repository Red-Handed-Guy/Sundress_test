import { createHashRouter } from 'react-router-dom'
import App from './components/app/app'
import Gallery from './pages/gallery/gallery'
import CardPage from './pages/card_page/card_page'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Gallery />,
      },
      {
        path: ':card',
        element: <CardPage />,
      },
    ],
  },
])
