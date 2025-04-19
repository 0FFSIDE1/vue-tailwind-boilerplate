import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['https://f10a-105-112-203-218.ngrok-free.app'],
    host: true,
  },
  
})