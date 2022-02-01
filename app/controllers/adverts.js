const advertMngr = require('../managers/adverts');

module.exports = {
  get: (ctx, next) => {
    try {
      ctx.body = advertMngr.getAll();
      ctx.status = 200;
    } catch (e) {
      console.error(`ERROR -> ${e?.message}, PATH -> ${__filename}, METHOD -> get`);
      ctx.status = 500;
    }
    return next();
  },
};
