const Koa = require('koa');

const { routesPrivate } = require('./routes/index');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    const resTime = ctx.response.get('X-Response-Time');
    if(ctx.url !== '/favicon.ico')
    console.log(`${ctx.method} ${ctx.url} -> ${resTime}`);
});

app.use(async (ctx, next) => {
    const startPoint = Date.now();
    await next();
    const duration = Date.now() - startPoint;
    ctx.set('X-Response-Time', `${duration} ms.`)
});

app.use(routesPrivate());

app.listen(9999, () =>
  console.log('server start at -> http://127.0.0.1:9999')
);
