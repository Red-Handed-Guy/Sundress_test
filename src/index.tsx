import './index.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}
const container = createRoot(root)

container.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
