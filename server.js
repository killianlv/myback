const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuring bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuring CORS middleware
app.use(cors());

// Defining the API endpoint
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the API!'
  };
  res.json(data);
});

// Starting the server
app.listen(80, () => {
  console.log('Server started on port 80');
});