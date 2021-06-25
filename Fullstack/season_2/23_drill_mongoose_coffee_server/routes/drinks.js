const { Router } = require('express');
const Coffee = require('../models/Coffee');

const router = Router();

router.get('/drinks', async (req, res) => {
  const drinks = await Coffee.find();
  res.send(drinks);
})

// router.get('/drinks/in-stock', async (req, res) => {
//   const drinks = await Coffee.find();
//    res.send(drinks.coffeeAvailable);
// })

router.get('/drinks/:id', async (req, res) => {
  const drinks = await Coffee.findById({"_id": req.params.id});
  res.send(drinks);
})

router.post('/drinks', async (req, res) => {
  const drinks = await new Coffee({
    coffeeName: req.body.coffeeName,
    coffeePrice: req.body.coffeePrice,
    coffeeAvailable: req.body.coffeeAvailable,
    coffeeCaffeine: req.body.coffeeCaffeine,
    coffeeVolume: req.body.coffeeVolume,
    coffeeDescription: req.body.coffeeDescription
  })
  drinks.save()
  res.json(drinks);
})

router.delete('/drinks/:id', async (req, res) => {
  const drinks = await Coffee.findById({"_id": req.params.id});
  drinks.delete()
  res.send(`Coffee with ID: ${req.params.id} deleted`);
})

router.patch('/drinks/:id', async (req, res) => {
  const drinks = await Coffee.findById({"_id": req.params.id});
  coffee.coffeeName = req.body.coffeeName,
    coffee.coffeePrice = req.body.coffeePrice,
    coffee.coffeeAvailable = req.body.coffeeAvailable,
    coffee.coffeeCaffeine = req.body.coffeeCaffeine,
    coffee.coffeeVolume = req.body.coffeeVolume,
    coffee.coffeeDescription = req.body.coffeeDescription

  drinks.save()
  res.send(`Coffee with ID: ${req.params.id} changed`);
})

module.exports = router