/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const { MongoClient } = require('mongodb');

const request = require('supertest');

const app = require('../server');

const { MongoURI } = require('../config/keys');

describe('Successfully registers new user and succesfully does so.', async () => {
  let connection;
  let db;
  let userDB;

  beforeAll(async () => {
    // eslint-disable-next-line max-len
    connection = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    db = await connection.db('test');

    userDB = db.collection('users');

    // await userDB.deleteMany();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('')
});