require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/parking', require('./routes/parking'));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server on port 5000'));
  })
  .catch((err) => console.log('Server Error'));
