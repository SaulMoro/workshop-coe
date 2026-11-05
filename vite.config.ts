import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mockApi } from './mock/mockApi'

export default defineConfig({
  plugins: [react(), tailwindcss(), mockApi()],
})
