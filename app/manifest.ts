import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Agencia Brújula',
    short_name: 'Brújula',
    description: 'Agencia de branding, diseño y desarrollo web',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#551273',
    icons: [
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
