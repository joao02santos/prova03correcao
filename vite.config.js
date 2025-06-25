//import { defineConfig } from 'vite'
//import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
//export default defineConfig({
  //plugins: [vue()],
//})


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 🔥 Substitua 'gX' pelo seu grupo (ex: g1, g2, ..., g10)
const GROUP_NAME = 'g9' // 👈 Altere aqui!

export default defineConfig({
  plugins: [vue()],
  base: `/${GROUP_NAME}/`, // ✅ Caminho correto para subdiretório
})