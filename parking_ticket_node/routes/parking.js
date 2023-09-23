const express = require('express');
const Parking = require('../models/parking');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const parkings = await Parking.find();
    res.status(200).send(parkings);
  } catch (err) {
    console.log(err);
  }
});

router.get('/available-parking', async (req, res) => {
  try {
    const parkings = await Parking.find({ occupied: false });
    res.status(200).send(parkings);
  } catch (err) {
    console.log(err);
  }
});

router.patch('/:pTitle', async (req, res) => {
  try {
    const parking = await Parking.findOne({ title: req.params.pTitle });

    parking.carPlate = req.body.carPlate ? req.body.carPlate : parking.carPlate;
    parking.phone = req.body.phone ? req.body.phone : parking.phone;
    parking.duration = req.body.duration ? req.body.duration : parking.duration;
    parking.expiresAt = req.body.expiresAt
      ? req.body.expiresAt
      : parking.expiresAt;
    parking.occupied = req.body.occupied ? req.body.occupied : parking.occupied;

    await parking.save();

    res.status(200).send(parking);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
