// vue.config.js

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/cli-github-pages/' : '/',
  configureWebpack: {
    performance: {
      hints: false,
    },
  },
};
