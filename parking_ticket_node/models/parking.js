const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    carPlate: String,
    phone: String,
    charge: Number,
    duration: String,
    expiresAt: String,
    occupied: Boolean,
  },
  { timestamps: true }
);

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;
