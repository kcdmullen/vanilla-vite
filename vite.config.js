import { defineConfig } from 'vite'
import { resolve } from 'path'
import { globSync } from 'tinyglobby'

// Add html files in root dir as entry points
const pages = Object.fromEntries(
  globSync('*.html').map((file) => [
    file.replace('.html', ''),
    resolve(__dirname, file)
  ])
)

export default defineConfig({
  build: {
    rollupOptions: {
      input: pages
    }
  }
})