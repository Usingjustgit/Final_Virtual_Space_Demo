import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite' // Importing from electron-vite
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()] // Ensure externalizeDepsPlugin is properly imported
  },
  preload: {
    plugins: [externalizeDepsPlugin()] // Ensure externalizeDepsPlugin is properly imported
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
