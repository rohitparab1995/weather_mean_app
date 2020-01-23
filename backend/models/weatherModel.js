const mongoose = require('mongoose');

const weatherSchema = mongoose.Schema({
  city: String,
  temp: String,
  lat: String,
  lon: String,
  curdate: Date
});

module.exports = mongoose.model('Weather', weatherSchema);
