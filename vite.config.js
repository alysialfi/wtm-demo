import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8080
	},
    preview: {
		port: 8080
	},
	build: {
		output: {
			dir: 'dist'
		}
	}
})
