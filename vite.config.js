import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import path, { resolve } from 'path'
import Inspect from 'vite-plugin-inspect'

export default {
  // base: process.env.NODE_ENV === 'development' ? './' : '/vite-twig-project/',
  base: './',
  plugins: [
    Inspect(),
    vituum(),
    twig({
      root: './src'
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name)) {
            return 'css/[name].css'
          }
          else if (/\.woff2$/.test(name)) {
            return 'fonts/[name].[ext]'
          } else {
            return 'img/[name].[ext]'
          }
        },
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@nm': path.resolve(__dirname, './node_modules')
    }
  }
}