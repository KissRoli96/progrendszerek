const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
     const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
      res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post('/create', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully!', product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/update/:id', async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        { name, price, description },
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product updated successfully!', product });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).send({ error: "Product not found" });
    } else {
      res.send({ message: "Product successfully deleted", product: deletedProduct });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;