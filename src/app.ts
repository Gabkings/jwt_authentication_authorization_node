require('dotenv').config();
import express from 'express';
import config from './config/default';
import connectDB from './utils/connectDB'

const app = express();

const port = config.port;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
  connectDB();
});
