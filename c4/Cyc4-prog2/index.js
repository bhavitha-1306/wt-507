const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middleware 
app.use(bodyParser.json());

const router = require('./route/bookRoute');

//Route
app.use('/books', router);

//Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});