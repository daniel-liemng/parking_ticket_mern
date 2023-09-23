require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Parking = require('./models/parking');

const parkingData = [
  { title: 'A1', occupied: false },
  { title: 'A2', occupied: false },
  { title: 'A3', occupied: false },
  { title: 'A4', occupied: false },
  { title: 'A5', occupied: false },
  { title: 'B1', occupied: false },
  { title: 'B2', occupied: false },
  { title: 'B3', occupied: false },
  { title: 'B4', occupied: false },
  { title: 'B5', occupied: false },
];

const seedDB = async () => {
  await Parking.deleteMany({});
  await Parking.insertMany(parkingData);
};

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

// seedDB().then(() => mongoose.connection.close());
