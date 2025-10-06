const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db.js');
const productModel = require('./models/product.js')
const pRouter = require("./routes/productsRouter.js");
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', pRouter)

app.get('/', async (req, res) => {
    try {
        const response = await productModel.find();
        res.json({ products: response });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))