const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema(
  {
    title: String,
    carPlate: String,
    phone: String,
    duration: String,
    expiresAt: String,
    occupied: Boolean,
  },
  { timestamps: true }
);

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;
