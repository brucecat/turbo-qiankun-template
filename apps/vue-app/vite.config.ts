import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  base: '/sub-vue', // 和基座中配置的activeRule一致
  server: {
    port: 3002,
    cors: true,
    origin: 'http://localhost:3002'
  },
  plugins: [
    vue(),
    qiankun('sub-vue', { // 配置qiankun插件
      useDevMode: true
    })
  ]
})
