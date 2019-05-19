const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://localhost:1348/',
        pathRewrite: {
            "^/api": "/"
        }
    }));
    app.use(proxy('/auth', {
        target: 'http://127.0.0.1:4002/',
        pathRewrite: {
            "^/auth": "/"
        }
    }));
};