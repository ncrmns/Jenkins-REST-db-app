'use strict';

const app = require('./app');
const test = require('tape');
const request = require('supertest');

test('get all endpoint', (t) => {
  request(app)
    .get('/api/items')
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = { errno: 'ENOTFOUND', code: 'ENOTFOUND', syscall: 'getaddrinfo', hostname: 'db', host: 'db', port: 3306, fatal: true };
      const actual = res.body;

      t.error(err, 'error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});
