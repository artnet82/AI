import { defineConfig } from 'vite'
import { nemtyrev_ai } from '@nemtyrev_ai/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/ws': {
        target: 'ws://127.0.0.1:3000',
        ws: true,
      },
      '/api': 'http://127.0.0.1:3000'
    }
  }
})
