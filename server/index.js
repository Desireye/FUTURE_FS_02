const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const productModel = require('./models/product')

const app = express();
app.use(cors());
app.use(express.json());
const connectDB = require('./db.js');

// mongoose.connect("mongodb+srv://desire:d123@cluster0.ftdwn82.mongodb.net/mini-mall?retryWrites=true&w=majority&appName=Cluster0")
// .then(() => {
//  console.log('Connected to database');
// }).catch((err) => {
//     console.log('Error connecting to database', err);
// });

connectDB();

app.get('/', async (req, res) => {
    const response = await productModel.find()
    return res.json({products : response})
})


app.get('/products', async (req, res) => {
    
})

app.listen(3000, () => console.log("App running on port 3000"))