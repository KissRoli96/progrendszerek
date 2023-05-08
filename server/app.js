const mongoose = require('mongoose');
const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

app.use(express.json()); // JSON adatok feldolgozása 

//MongoDB-hez való csatlakozás
const uri = "mongodb://127.0.0.1:27017/mydb";
mongoose.connect(uri, { useNewUrlParser: true, serverSelectionTimeoutMS: 30000,});

//MongoDB-hez csatlakozás eseménykezelés
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB adatbázis csatlakoztatva!");
});


// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//routek megadás User, Product esetén
app.use('/users', userRoutes);
app.use('/products', productRoutes);


  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

