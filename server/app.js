'use strict'

const koa = require('koa')
const compress = require('koa-compress')
const router = require('./router')
const cors = require('kcors')
const util = require('./util')
const KeyGrip = require("keygrip")

const koaBody = require('koa-body')({
    multipart: true
})

const app = new koa()

global.base_dir = __dirname;
global.abs_path = function (path) {
    return base_dir + path;
}
global.include = function (file) {
    return require(abs_path('/' + file));
}

app.keys = new KeyGrip ([util.generateRandomString(25)], "sha256")

app.use(cors())
app.use(compress({
    level: 3
}))
app.use(koaBody)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3001)
console.log("server is ready");