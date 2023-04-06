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
      target: 'http://api.forismatic.com/api/1.0/',
      changeOrigin: true,
      pathRewrite: {
        '/formastic': '',
      },
    })
  );
};
// https://cors-everywhere.herokuapp.com
