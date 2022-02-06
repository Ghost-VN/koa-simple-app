const Koa = require('koa');
const config = require('config');

const { privateRoutes, publicRoutes } = require('./routes/index');

const app = new Koa();

app.use(publicRoutes());
app.use(privateRoutes());

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

const {port} = config.server;
app.listen(port, () =>
  console.log(`server start at -> http://127.0.0.1:${port}`)
);
