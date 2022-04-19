'use strict'

const utils = require('util')
const _ = require('ramda')
const util = require('../util')
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const crypto = require('crypto')
const generateRandomString = (length = 10) => crypto.randomBytes(length).toString('hex')
const jwt = require('jsonwebtoken')
const db = util.db;


const jwtKey = generateRandomString(25)
const jwtExp = 24 * 60 * 60;

async function register({
    username,
    password, 
    email, 
    phone, 
    fname, 
    lname, 
    role
}) {
    console.log("Register api handler");

    if (!username) {
        return util.httpResponse(400, {
            message: 'Insufficient Info'
        })
    }
    if (!password) {
        return util.httpResponse(400, {
            message: 'Insufficient Info'
        })
    }
    try {
        const result = await db.query("INSERT INTO users (user_id,password,first_name,last_name, email_id, phone, role ) VALUES (?,?,?,?, ?, ?, ?)",
             [username,password,fname,lname, email, phone, role]);
    } catch ( err ) {
        throw err;
    }
    return util.httpResponse(200, {
            message: 'success'
    })
}

async function login({ username, password }, ctx) {
    console.log("login api handler");
    try {
        const result = await db.query("SELECT * from users where user_id = ? AND password = ?",
        [username,password]);
        console.log(result);
        if (result.length == 0)
        {
            return util.httpResponse(400, {
                message: 'Invalid username or password'
            })
        }
        const token = jwt.sign({ 
            email: result.email_id,
            userId: result.username,
            name: result.first_name
        }, jwtKey, {
            algorithm: 'HS256',
            expiresIn: jwtExp
        })
    
        try {
            const result1 = await db.query("UPDATE users SET auth_token = ? WHERE user_id = ?",
                    [token,username]);
            ctx.user = result[0];
            ctx.user.auth_token = token;
            return util.httpResponse(200, {
                user: ctx.user
            })
        }
        catch ( err ) {
            console.log(err);
            throw err;
        }
    } catch ( err ) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    login,
    register
}