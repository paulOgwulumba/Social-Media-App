/* eslint-disable linebreak-style */
const express = require('express');

const { MongoClient } = require('mongodb');

const app = express();

//  DB config
const { mongoURI } = require('./config/keys');

//  Connect to MongoDB
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async (err) => {
  if (err) console.error(err);
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  const data = await collection.find().toArray();
  console.log(data)
  client.close();
});

app.get('/', (request, response) => {
  response.send('<h1 style="color: maroon; text-align: center; margin: 5rem;">You have taken a wrong turn</h1>');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
