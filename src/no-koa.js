/**
 * Created by daigb on 2018/9/27.
 * 不使用koa时
 */
let http = require('http')

let server = http.createServer((req, res) => {
    res.end('hello world')
})

server.listen(3000)