import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente (como API_KEY do Cloudflare)
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Isso substitui process.env.API_KEY no seu código pelo valor real na hora do build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})