'use strict'

const {
    wrapHandlerModule
} = require('../util')

const {
    authorize
} = require('../auth/authorize')

const handler = wrapHandlerModule(require('./handler'))
const Router = require('koa-router')

const router = new Router({
    prefix: '/users'
})

router.use(authorize);
router.get('/', handler.getUserDetails)
router.get('/:email/projects', handler.fetchMyProjects);
router.get('/:email/projects/:projectId', handler.fetchProject);

module.exports = router