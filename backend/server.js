import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
// Initialize http server
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/entries');



// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
