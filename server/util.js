// Utility Functions
'use strict'
const _ = require('ramda')
const crypto = require('crypto')
const mysql = require("mysql");
const utils = require('util')


function makeDb() {
    const connection = mysql.createConnection({
        host: '0.0.0.0',
        user: 'sh_admin',
        password: 'admin', 
        database: 'student_helper'
      });
    return {
      query( sql, args ) {
        return utils.promisify( connection.query )
          .call( connection, sql, args );
      },
      close() {
        return utils.promisify( connection.end ).call( connection );
      }
    };
  }

function wrapHandler(handler) {
    return async function (ctx, next) {
        try {
            const response = await handler(ctx.request.body, _.merge(ctx, {}), next)
            if (response.redirect)
                ctx.redirect(response.redirect)
            for (const key in response) {
                ctx[key] = response[key]
            }
        } catch (error) {
            ctx.status = 500
            ctx.body = {
            data: {
                error: error,
                errMsg: ' Internal Server Error. Please contact administrator.'
            }
        }
        }
    }
}

const wrapHandlerModule = (module) => _.fromPairs(
    _.map(([name, fun]) => [name, wrapHandler(fun)],
        _.toPairs(module)))

const sha512 = (password, salt) => {
    const hash = crypto.createHmac('sha512', salt)
    hash.update(password)
    const value = hash.digest('hex')
    return value
}

const httpResponse = (status, body) => {
    return {
        status,
        body: body ? body : {}
    }
}


const errorResp = (message) => {
    return {
        message: message ? message : {}
    }
}

const generateRandomString = (length = 10) => crypto.randomBytes(length).toString('hex')
const db = makeDb()
module.exports = {
    db,
    wrapHandlerModule,
    httpResponse,
    sha512,
    generateRandomString
}