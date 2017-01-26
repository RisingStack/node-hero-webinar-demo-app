'use strict'

const express = require('express')

const getRoot = require('./root.get')

const app = express()

app.get('/', getRoot)

module.exports = app
