const path = require('path');//引入path模块

module.exports={
  chainWebpack: config => {
    console.log(config,'chainWebpack')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    
  },
  devServer:{
    host: '0.0.0.0',
    port: 8089,
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
    
    
  }
