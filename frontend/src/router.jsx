import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import ArtworkDetailPage from './pages/ArtworkDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'artwork/:id', element: <ArtworkDetailPage /> },
    ],
  },
])

export default router