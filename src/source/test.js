/**
 * Created by daigb on 2018/9/27.
 */
let Koa = require('./application')
let app = new Koa()

/*app.use((ctx, next) => {
    //res.end('hello world yourself koa')
    console.log('========Start========')
    console.log(ctx.req.url)
    console.log(ctx.request.req.url)
    console.log(ctx.response.req.url)
    console.log(ctx.request.url)
    console.log(ctx.request.path)
    console.log(ctx.url)
    console.log(ctx.path)
    console.log('========End========')
    ctx.body = 'hello world'
    console.log(ctx.body)
})*/

app.use((crx, next) => {
    console.log(1)
    next()
    console.log(2)
})
app.use((crx, next) => {
    console.log(3)
    next()
    console.log(4)
})
app.use((crx, next) => {
    console.log(5)
    next()
    console.log(6)
})

app.listen(3000)