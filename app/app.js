const Koa = require('koa');
const config = require('config');

const { privateRoutes, publicRoutes } = require('./routes/index');

const app = new Koa();

app.use(publicRoutes());
app.use(privateRoutes());

app.use((ctx, next) => {
    console.info('start M1, upstream to M2');
    next();
    console.info('continue to M1, downstream finish')
    const resTime = ctx.response.get('X-Response-Time');
    if(ctx.url !== '/favicon.ico')
    console.info(`METHOD -> "${ctx.method}" URL -> "${ctx.url}" RESPONSE_TIME -> "${resTime}"`);
});

app.use((ctx, next) => {
    console.info('start M2, upstream to M3')
    const startPoint = Date.now();
    next();
    console.info('continue to M2, downstream to M1')
    const duration = Date.now() - startPoint;
    ctx.set('X-Response-Time', `${duration} ms.`)
});

app.use((ctx) => {
    console.info('start M3, downstream to M2')
    const osName = ctx.request.headers['x-mobile-os-name'] || 'unknown';
    console.info(`request from ${osName.toUpperCase()}`);
})

const {port} = config.server;
app.listen(port, () =>
  console.log(`server start at -> http://127.0.0.1:${port}`)
);
