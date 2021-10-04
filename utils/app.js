/* eslint-disable linebreak-style */
/* eslint-disable global-require */
class Server {
  constructor() {
    const express = require('express');

    const { MongoClient } = require('mongodb');

    this.app = express();

    // Import routes
    const users = require('../routes/api/users').router;
    const profile = require('../routes/api/profile');
    const posts = require('../routes/api/posts');

    //  DB config
    const { mongoURI } = require('../config/keys');

    //  Connect to MongoDB
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async (err) => {
      if (err) console.error(err);
      // const collection = client.db('test').collection('devices');
      // perform actions on the collection object
      client.close();
    });

    this.app.get('/', (request, response) => {
      response.send('<h1 style="color: maroon; text-align: center; margin: 5rem;">You have taken a wrong turn</h1>');
    });

    // Use routes
    this.app.use('/api/users', users);
    this.app.use('/api/profile', profile);
    this.app.use('/api/posts', posts);
  }

  /**
   * @desc Starts the express http server.
   * @param  port Specifies the port server will be listening at. Default value is 3000.
   * @returns httpServer object.
   */
  async listen(port = '3000') {
    this.httpServer = await this.app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
    return this.httpServer;
  }

  /**
   * @desc Stops the express http server.
   */
  async close() {
    await this.httpServer.close((error) => {
      if (error) console.log(error);
    });
  }
}

module.exports = Server;
