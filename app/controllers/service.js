const config = require('config');

const timer = require('../helpers/timer')();

const { name, version, description } = config.app;

module.exports = {
  about: (ctx, next) => {
    ctx.body = {
      name,
      version,
      description,
      uptime: `${String(timer())} ms.`,
      now: new Date(),
      env: process.env.NODE_ENV || 'development',
    };
    return next();
  },
};
