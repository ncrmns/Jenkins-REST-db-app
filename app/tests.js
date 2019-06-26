'use strict';

const app = require('./app');
const test = require('tape');
const request = require('supertest');

test('get all endpoint', (t) => {
  request(app)
    .get('/api/items')
    .expect('Content-type', /json/)
    .end((err, res) => {
      const expected = {
        "id": 1,
        "title": "expensive stuff",
        "highestBid": 1234,
        "expiryDate": 1565568000,
        "highestBidderName": "Nathalie"
      };
      const actual = res.body;

      t.error(err, 'No error');
      t.same(actual, expected, 'Received expected answer');
      t.end();
    });
});
