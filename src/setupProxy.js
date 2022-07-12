const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/itgirlschool', {
      target: 'http://itgirlschool.justmakeit.ru',
      changeOrigin: true,
      pathRewrite: {
        '/itgirlschool': '',
      },
    })
  );
  app.use(
    createProxyMiddleware('/formastic', {
      target: 'https://forismatic-proxy.herokuapp.com/',
      changeOrigin: true,
      pathRewrite: {
        '/formastic': '',
      },
    })
  );
};
// https://cors-everywhere.herokuapp.com
