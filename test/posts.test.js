/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const { MongoClient } = require('mongodb');

const request = require('supertest');

const Server = require('../utils/app');

const { mongoURI } = require('../config/keys');

const server = new Server();

const { app } = server;

describe('GET Endpoints of posts', () => {
  beforeAll(async () => {
    server.listen();
  });

  it('should acknowledge a get request', async () => {
    const response = await request(app).get('/api/posts/test');
    expect(response.statusCode).toEqual(200);
  });

  it('should read message carried in request body', async () => {
    const response = await request(app).get('/api/posts/test');
    expect(response.body).toHaveProperty('message');
  });

  afterAll(async () => {
    server.close();
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

    await userDB.deleteMany();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Should insert a user into the database.', async () => {
    const newUser = { _id: 'test_user_2', name: 'Pius Odili', age: 19 };
    await userDB.insertOne(newUser);

    const checkUser = await userDB.findOne({ _id: 'test_user_2' });

    expect(newUser).toEqual(checkUser);
  });

  it('Should delete a user from the database.', async () => {
    const newUser = { _id: 'test_user_3', name: 'Philibus Dogwai', age: 22 };
    await userDB.insertOne(newUser);

    await userDB.deleteOne({ _id: 'test_user_3' });

    const checkUser = await userDB.findOne({ _id: 'test_user_3' });

    expect(checkUser).toBeNull();
  });
});
