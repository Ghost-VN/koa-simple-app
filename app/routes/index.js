const Router = require('koa-router');

const privateRoutes = new Router();
const publicRoutes = new Router();

const service = require('../controllers/service');
const adverts = require('../controllers/adverts');
const users = require('../controllers/users');

publicRoutes
  .prefix('/public')
  .get('/adverts', adverts.get)
  .get('/users', users.get);

privateRoutes
  .get('/about', service.about);

module.exports = {
  privateRoutes() {
    return privateRoutes.routes();
  },
  publicRoutes() {
    return publicRoutes.routes();
  },
};
