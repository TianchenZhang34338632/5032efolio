module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/5032efolio/'
      : '/'
  }

  export default defineConfig({
    base: '',
    build: {
      outDir: 'dist'
    },
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })