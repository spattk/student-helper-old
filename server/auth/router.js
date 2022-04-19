'use strict'

const {
    wrapHandlerModule
} = require('../util')

const {
    authorize
} = require('./authorize')

const handler = wrapHandlerModule(require('./handler'))
const Router = require('koa-router')

const router = new Router({
    prefix: '/auth'
})



router.post('/login', handler.login)
router.post('/register', handler.register)
router.use(authorize);

module.exports = router