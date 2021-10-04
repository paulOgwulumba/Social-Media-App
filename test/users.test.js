/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const { MongoClient } = require('mongodb');

const request = require('supertest');

const Server = require('../utils/app');

const { mongoURI } = require('../config/keys');

const { validateData } = require('../routes/api/users');

const server = new Server();

const { app } = server;

describe('Register new user to database on call to POST request @ /api/users/register', () => {
  let connection;
  let db;
  let userDB;

  beforeAll(async () => {
    // eslint-disable-next-line max-len
    await server.listen();

    connection = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    db = await connection.db('test');

    userDB = db.collection('users');

    // await userDB.deleteMany();
  });

  it('should receive and acknowledge post request', async () => {
    const response = await request(app).post('/api/users/register');
    expect(response.statusCode).not.toBe(404);
  });

  afterAll(async () => {
    await server.close();
    await connection.close();
  });
});
