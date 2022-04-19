'use strict'

const { createDecipheriv } = require("crypto");
const mysql = require("mysql");
const utils = require('util')
const util = require('../util')


const db = util.db;

async function authorize(ctx, next) {
    console.log("authorized");
    if (!ctx.request.header['authorization']) {
        ctx.status = 401
        ctx.body = {
            data: {
                errMsg: 'You are not authorized'
            }
        }
        return ctx
    }
    const authToken = ctx.request.header['authorization'];
    try {
        const user = await db.query("SELECT * FROM users where auth_token = ?", [authToken]);
        
        if(!user[0]) {
            ctx.status = 401
            ctx.body = {
                data: {
                    errMsg: 'You are not authorized'
                }
            }
            return ctx;
        }
        else {
            console.log("Found a valid user with auth token");
            ctx.user = user[0];
            return await next()
        }
    }
    catch(err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    authorize
}