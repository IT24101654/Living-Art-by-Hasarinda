// Local asset imports — Vite processes these and gives correct hashed URLs at build time
import img_FamBW from '../assets/FamBW.jpg'
import img_FamC from '../assets/FamC.jpg'
import img_1839 from '../assets/IMG_1839.JPG.jpeg'
import img_1844 from '../assets/IMG_1844.JPG.jpeg'
import img_1851 from '../assets/IMG_1851.JPG.jpeg'
import img_1854 from '../assets/IMG_1854.JPG.jpeg'
import img_1871 from '../assets/IMG_1871.JPG.jpeg'
import img_1873 from '../assets/IMG_1873.JPG.jpeg'
import img_1874 from '../assets/IMG_1874.JPG.jpeg'
import img_1995 from '../assets/IMG_1995.jpg'
import img_3464 from '../assets/IMG_3464.jpg'
import img_0264 from '../assets/IMG_0264.JPG.jpeg'

export const featuredArtworks = [
  {
    id: 'floral-portrait',
    title: 'Floral Portrait',
    subtitle: 'Pencil Drawing on A3 Paper • 2026',
    image: img_3464,
  },
  {
    id: 'vibrant-wall-mural',
    title: 'Vibrant Harmony',
    subtitle: 'School Wall Mural • 2024',
    image: img_0264,
  },
  {
    id: 'baby-innocence',
    title: 'Innocent Gaze',
    subtitle: 'Graphite on A3 Paper • 2020',
    image: img_1844,
  },
]

export const galleryCollections = {
  a3: {
    featured: {
      title: 'Ethereal Grace',
      meta: 'A3 Single Portrait • Oil on Canvas',
      image: img_FamC,
    },
    secondary: {
      title: 'The Union',
      meta: 'A3 Couple • Acrylic Blend',
      image: img_1995,
    },
  },
  a4: [
    {
      title: 'Golden Hour',
      meta: 'A4 Single',
      image: img_1851,
    },
    {
      title: 'Morning Mist',
      meta: 'A4 Single',
      image: img_1854,
    },
    {
      title: 'In Sync',
      meta: 'A4 Couple',
      image: img_0264,
    },
  ],
  a5: [
    img_1839,
    img_1873,
    img_1874,
    img_3464,
  ],
}