const path = require('path');//引入path模块

module.exports={
  chainWebpack: config => {
    console.log(config,'chainWebpack')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    
  },
  devServer:{
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
