const express = require('express');

const app = express()

app.get('/', (request, response) => {
  response.send('<h1 style="color: maroon; text-align: center; margin: 5rem;">Bad gateway</h1>')
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})