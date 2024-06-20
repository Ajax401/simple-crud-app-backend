require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello from Node API Updated');
});
//copilot extension for auto completion.
/*
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.send(500).json({ message: err.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
*/
//update product
/*
app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(req.body, {
      upsert: true,
      new: true,
    });
    if (product) {
      return res.status(400).json({ error: 'Document exist' });
    }
    const myProduct = await Product.create(req.body);
    res.status(200).json(myProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }*/
/*
  try {
    const product = await Product.findOne(req.body.name);
    console.log(product);
    if (product) {
      return res.status(400).json({ error: 'Document exist' });
    }
    const myProduct = await Product.create(req.body);
    res.status(200).json(myProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
*/
//});
/*
app.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(400).json({ message: 'Product not found!' });
    }

    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.send(500).json({ message: err.message });
  }
});

//delete a product

app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(400).json({ message: 'Product not found!' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.send(500).json({ message: err.message });
  }
});*/

mongoose
  .connect(process.env.MONGO_SECRET, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed!');
  });
