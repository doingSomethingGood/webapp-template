module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  publicPath: './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  /* 代码保存时进行eslint检测 */
  lintOnSave: false,
  /** 是否使用包含运行时编译器的Vue核心版本。将其设置为true会允许您使用templateVue组件中的选项，但是会为您的应用带来10kb的额外负载 */
  runtimeCompiler: true,
  /* webpack-dev-server 相关配置 */
  devServer: {
    port: 8080,
    /* 使用代理 */
    proxy: {
      'cors-api': {
        /* 目标代理服务器地址 */
        target: 'http://172.16.80.47:8080/',
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          'cors-api': ''
        }
      }
    }
  }
}