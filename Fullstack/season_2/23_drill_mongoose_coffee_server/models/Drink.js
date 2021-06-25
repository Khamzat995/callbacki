const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  coffeeName: {
    type: String,
    required: true
  },
  coffeePrice: {
    type: Number,
    required: true
  },
  coffeeAvailable: {
    type: Boolean,
    required: false
  },
  coffeeCaffeine: {
    type: Boolean,
    required: false
  },
  coffeeVolume: {
    type: Number,
    required: false
  },
  coffeeDescription: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Drink', coffeeSchema);