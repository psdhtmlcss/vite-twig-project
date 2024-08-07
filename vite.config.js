import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import path, { resolve } from 'path'

export default {
  plugins: [
    vituum(),
    twig({
      root: './src'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@nm': path.resolve(__dirname, './node_modules')
    }
  }
}