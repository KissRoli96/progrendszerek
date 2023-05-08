const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
     const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
      res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post('/create', async (req, res) => {
  try {
    const { name, email, age, password, birthdate } = req.body;
    const newUser = new User({ name, email, age, password, birthdate });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/update/:id', async (req, res) => {
    try {
      const { name, email, age, password, birthdate } = req.body;
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { name, email, age, password, birthdate },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully!', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).send({ error: "User not found" });
    } else {
      res.send({ message: "User successfully deleted", user: deletedUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;