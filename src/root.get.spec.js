'use strict'

const request = require('super-request')
const server = require('./server.js')

describe('root', function () {
  describe('get endpoint', function () {
    it('should reply with the text hello', function () {
      return request(server)
        .get('/')
        .expect(200, 'hello')
    })
  })
})
