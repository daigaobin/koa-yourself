/**
 * Created by daigb on 2018/9/27.
 * 使用koa时
 */
const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
    ctx.body = 'Hello World';
});

app.listen(3000);
