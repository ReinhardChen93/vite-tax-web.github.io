import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'path'
function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      '@': _resolve('src'), // 配置别名
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
})