const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    proxy: {
      '/api': {
        // 代理路径配置
        target: 'http://localhost:5000',
        // 用于重写路径
        pathRewrite: { '^/api': '' },
        // 用于支持websocket
        ws: true,
        // 用于控制请求头的host
        changeOrigin: false
      }
    }
  }
})
