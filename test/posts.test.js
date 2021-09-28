/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const { MongoClient } = require('mongodb');

const request = require('supertest');

const app = require('../server');

const mongoURI = require('../config/keys');

describe('GET Endpoints of posts', () => {
  it('should acknowledge a get request', async () => {
    const response = await request(app).get('/api/posts/test');
    expect(response.statusCode).toEqual(200);
  });

  it('should read message carried in request body', async () => {
    const response = await request(app).get('/api/posts/test');
    expect(response.body).toHaveProperty('message');
  });
});

describe('Test mongodb to see if it works.', () => {
  let connection;
  let db;
  let userDB;

  beforeAll(async () => {
    // eslint-disable-next-line max-len
    connection = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    db = await connection.db('test');

    userDB = db.collection('users');
  });

  afterAll(async () => {
    await connection.close();

    await db.close();
  });

  it('Should insert a user into the database.', async () => {
    const newUser = { name: 'Paul Ogwulumba', age: 25 };
    await userDB.insertOne({ _id: 'test_user', name: newUser.name, age: newUser.age });

    const checkUser = await userDB.findOne({ _id: 'test_user' });

    expect(newUser).toEqual(checkUser);
  });
});
