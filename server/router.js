'use strict'
const Router = require('koa-router')
const _ = require('ramda')
const router = new Router()

const authRoutes = require('./auth/router')
const adminRoutes = require('./admin/router')
const usersRoutes = require('./users/router')
const projectRoutes = require('./projects/router')


router.use(authRoutes.routes(), authRoutes.allowedMethods())
router.use(adminRoutes.routes(), adminRoutes.allowedMethods())
router.use(usersRoutes.routes(), usersRoutes.allowedMethods())
router.use(projectRoutes.routes(), projectRoutes.allowedMethods())
module.exports = router