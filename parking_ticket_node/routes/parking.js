const express = require('express');
const Parking = require('../models/parking');

const router = express.Router();

router.get('/', async (req, res) => {
  const parkings = await Parking.find();

  res.status(200).send(parkings);
});

router.patch('/:pTitle', async (req, res) => {
  const parking = await Parking.findOne({ title: req.params.pTitle });

  parking.carPlate = req.body.carPlate;
  parking.phone = req.body.phone;
  parking.duration = req.body.duration;
  parking.expiresAt = req.body.expiresAt;
  parking.occupied = req.body.occupied;

  await parking.save();

  res.status(200).send(parking);
});

module.exports = router;
