/* eslint-disable linebreak-style */
const express = require('express');

const { MongoClient } = require('mongodb');

const app = express();

// Import routes
const users = require('./routes/api/users').router;
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//  DB config
const { mongoURI } = require('./config/keys');

//  Connect to MongoDB
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async (err) => {
  if (err) console.error(err);
  // const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});

app.get('/', (request, response) => {
  response.send('<h1 style="color: maroon; text-align: center; margin: 5rem;">You have taken a wrong turn</h1>');
});

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
