const Router = require('koa-router');

const routesPrivate = new Router();

const service = require('../controllers/service');

routesPrivate
  .get('/about', service.about);

module.exports = {
  routesPrivate() {
    return routesPrivate.routes();
  },
};
