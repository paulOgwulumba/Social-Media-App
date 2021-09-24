/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../server');

describe('GET Endpoints of posts', () => {
  it('should acknowledge a get request', async () => {
    const response = await request(app).get('/api/posts/test');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('msg');
  });
});
