'use strict'

const {
    wrapHandlerModule
} = require('../util')

const handler = wrapHandlerModule(require('./handler'))
const Router = require('koa-router')

const router = new Router({
    prefix: '/projects'
})
const util = require('../util')
const { authorize } = require('../auth/authorize')
const db = util.db;

router.use(authorize)
router.post('/', handler.createProject)
router.get('/', handler.showAllProjects)
router.get('/searchProjects/:projectName', handler.searchProjects)
router.patch('/:projectId', handler.likeProject);

module.exports = router