const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  ground_id: {
    type: String,
    required: true,
  },
  date: {
    type: String, // Format: YYYY-MM-DD
    required: true,
  },
  slots: {
    type: [String], 
    required: true,
  },
  book: {
    booking_id: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model('Booking', bookingSchema);

