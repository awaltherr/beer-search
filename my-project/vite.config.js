import {
  defineConfig
} from 'vite'
import {
  VitePWA
} from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        display: 'standalone',
        icon: [{
          purpose: 'any',
          sizes: '128x128',
          src: "favicon-196.png"
        }],
        name: "BeerSearch",
        short_name: "BeerSearch",
        start_url: '/',
        theme_color: '#dda15e'
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
        runtimeCaching: [{
          handler: 'NetworkFirst',
          urlPattern: 'https://api.punkapi.com/v2/beers/random'
        }]
      }
    }),
    vue()
  ]
})