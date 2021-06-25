const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
})

router.get('/users/:id', async (req, res) => {
  const user = await User.findById({"_id": req.params.id});
  res.send(user);
})

router.post('/users', async (req, res) => {
  const user = await new User({
    userName: req.body.userName,
    userAge: req.body.userAge,
    gender: req.body.gender
  })
  user.save()
  res.json(user);
})

router.delete('/users/:id', async (req, res) => {
  const user = await User.findById({"_id": req.params.id});
  user.delete()
  res.send(`User with ID: ${req.params.id} deleted`);
})

router.patch('/users/:id', async (req, res) => {
  const user = await User.findById({"_id": req.params.id});
  user.userName = req.body.userName,
    user.userAge = req.body.userAge,
    user.gender = req.body.gender

  user.save()
  res.send(`User with ID: ${req.params.id} changed`);
})

module.exports = router