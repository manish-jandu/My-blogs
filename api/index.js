const express = require('express')
const app = express()
const cors = require('cors');
const { connectMongoose } = require('./connection/dbConnection');
const port = 4000
require("dotenv").config();

app.use(cors());
app.use(express.json());

connectMongoose();

app.post('/register', (req, res) => {
  const {username,password} = req.body;

  res.json({"Result":{username,password}})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})